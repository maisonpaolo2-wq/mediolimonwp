import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/data'

const clean = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const escape = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  // Honeypot: los bots rellenan el campo oculto. Respondemos ok sin enviar nada.
  if (clean(body.website)) return NextResponse.json({ ok: true })

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 30),
    date: clean(body.date, 80),
    guests: clean(body.guests, 30),
    service: clean(body.service, 80),
    place: clean(body.place, 160),
    message: clean(body.message, 3000),
  }

  if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return NextResponse.json({ error: 'Nombre y email son obligatorios' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[lead] Falta RESEND_API_KEY')
    return NextResponse.json({ error: 'Servicio de correo no configurado' }, { status: 503 })
  }

  const rows: Array<[string, string]> = [
    ['Nombre', lead.name],
    ['Email', lead.email],
    ['Teléfono', lead.phone || 'No indicado'],
    ['Fecha prevista', lead.date || 'No indicada'],
    ['Invitados', lead.guests || 'No indicado'],
    ['Servicio', lead.service || 'Sin decidir'],
    ['Lugar', lead.place || 'No indicado'],
  ]

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: process.env.LEAD_FROM || `${site.name} <web@${site.domain}>`,
      to: [process.env.LEAD_TO || site.email],
      replyTo: lead.email,
      subject: `Nueva consulta de boda (Medio Limón) · ${lead.name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMensaje:\n${lead.message || 'Sin mensaje'}`,
      html: `<div style="font-family:Georgia,serif;color:#1d2620">
  <h2 style="font-weight:400">Nueva consulta desde la web</h2>
  <table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#777">${k}</td><td><strong>${escape(v)}</strong></td></tr>`)
    .join('')}</table>
  <p style="margin-top:20px;white-space:pre-wrap">${escape(lead.message || 'Sin mensaje')}</p>
</div>`,
    })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[lead] Error enviando email', err)
    return NextResponse.json({ error: 'No se pudo enviar' }, { status: 500 })
  }
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { services, site } from '@/content/data'

type Status = 'idle' | 'loading' | 'error'
type Fields = { name: string; email: string; phone: string; date: string; guests: string; service: string; place: string; message: string; website: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', email: '', phone: '', date: '', guests: '', service: '', place: '', message: '', website: '' }

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Decidnos vuestro nombre'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Revisa el email'
  if (f.phone && !/^[+\d\s()-]{6,20}$/.test(f.phone.trim())) e.phone = 'Teléfono no válido'
  if (f.message.length > 3000) e.message = 'Máximo 3000 caracteres'
  return e
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})

  const update = (field: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      router.push('/gracias')
    } catch {
      setStatus('error')
    }
  }

  const field = (key: keyof Fields, label: string, input: React.ReactNode) => (
    <div className={`field${errors[key] ? ' field--error' : ''}`}>
      <label htmlFor={`f-${key}`}>{label}</label>
      {input}
      {errors[key] && <span className="field__error" id={`f-${key}-err`}>{errors[key]}</span>}
    </div>
  )

  const aria = (key: keyof Fields) => ({
    id: `f-${key}`,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `f-${key}-err` : undefined,
  })

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form__row">
        {field('name', 'Vuestros nombres *', <input {...aria('name')} type="text" autoComplete="name" placeholder="Lucía y Daniel" value={form.name} onChange={update('name')} />)}
        {field('email', 'Email *', <input {...aria('email')} type="email" autoComplete="email" inputMode="email" placeholder="hola@vuestroemail.com" value={form.email} onChange={update('email')} />)}
      </div>
      <div className="form__row">
        {field('date', 'Fecha prevista', <input {...aria('date')} type="text" placeholder="Mes y año aproximado" value={form.date} onChange={update('date')} />)}
        {field('guests', 'Invitados aprox.', <input {...aria('guests')} type="text" inputMode="numeric" placeholder="Ej. 150" value={form.guests} onChange={update('guests')} />)}
      </div>
      {!compact && (
        <div className="form__row">
          {field('service', 'Qué os interesa', (
            <select {...aria('service')} value={form.service} onChange={update('service')}>
              <option value="">Todavía no lo sabemos</option>
              {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
            </select>
          ))}
          {field('place', 'Lugar o zona', <input {...aria('place')} type="text" placeholder="Cortijo, iglesia, ciudad o sin decidir" value={form.place} onChange={update('place')} />)}
        </div>
      )}
      {field('phone', 'Teléfono (opcional)', <input {...aria('phone')} type="tel" autoComplete="tel" inputMode="tel" placeholder="+34 600 000 000" value={form.phone} onChange={update('phone')} />)}
      {field('message', 'Contadme vuestra boda', <textarea {...aria('message')} rows={compact ? 3 : 5} placeholder="Cómo os la imagináis, qué os importa, qué os preocupa..." value={form.message} onChange={update('message')} />)}

      {/* Honeypot antispam */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">No rellenar</label>
        <input id="f-website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
      </div>

      {status === 'error' && (
        <p className="form__alert" role="alert">
          No se ha podido enviar. Escribidme a <a href={`mailto:${site.email}`}>{site.email}</a> o por Instagram.
        </p>
      )}

      <div>
        <button type="submit" className="btn btn--solid" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar consulta'} <span className="btn__arrow">→</span>
        </button>
      </div>
      <p className="form__legal">Primera reunión gratuita y sin compromiso. Uso vuestros datos solo para responderos.</p>
    </form>
  )
}

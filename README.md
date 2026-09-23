# Medio Limón · Bodas + Eventos

Web de Medio Limón (@mediolimonwp), wedding planner en Jaén. Next.js 15 + Framer Motion + Resend, CSS puro.

## Arrancar

```bash
npm install
npm run dev
```

## Contenido

Todo el texto está en `content/data.ts`. Pendiente de la cliente:

- `planner`: nombre de la planner (vacío, la web habla como "Medio Limón")
- `domain`: `mediolimonbodas.com` es provisional
- `whatsapp`: vacío; al rellenarlo aparecen el botón flotante y los enlaces de WhatsApp
- `testimonials`: de muestra. Cuando sean reales, poner `REVIEWS_ARE_REAL = true` en `app/layout.tsx`

## Fotos

Las capturas originales de Instagram van en `scripts/raw/` (no se versionan). `npm run photos` las recorta
a `public/photos/`, genera el logo transparente en dos tintas, `app/icon.png` y `public/og-image.jpg`.

## Formulario

`/api/lead` envía con Resend. Copiar `.env.local.example` a `.env.local` y configurar `RESEND_API_KEY`,
`LEAD_FROM` (remitente verificado) y `LEAD_TO`.

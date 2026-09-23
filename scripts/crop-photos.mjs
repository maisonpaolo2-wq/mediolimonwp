// Recorta capturas de Instagram (iPhone) y genera fotos limpias en public/photos.
// Uso: node scripts/crop-photos.mjs
//
// Cada captura tiene el chrome en posiciones distintas (barra de estado, cabecera
// del post, badge "1/4", iconos de persona y sonido...). Por eso cada foto lleva
// su caja de recorte explícita. Si una foto no tiene caja, se detectan
// automáticamente las bandas planas (claras u oscuras) arriba y abajo.
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const RAW = join(root, 'scripts', 'raw')
const OUT = join(root, 'public', 'photos')

// left, top, width, height sobre capturas de 923×2000
const POST = { left: 0, top: 496, width: 923, height: 938 } // post 4:5 con badge arriba e iconos abajo
const POST_TALL = { left: 0, top: 496, width: 923, height: 1018 } // post 3:4

const photos = [
  { raw: '18.jpg', out: 'novia-olivar-jaen.jpg', box: { left: 156, top: 496, width: 767, height: 1040 } },
  { raw: '15.jpg', out: 'centro-mesa-flores-silvestres.jpg', box: POST_TALL },
  { raw: '17.jpg', out: 'seating-papel-algodon.jpg', box: POST_TALL },
  { raw: '19.jpg', out: 'portada-iglesia-flores.jpg', box: POST_TALL },
  { raw: '20.jpg', out: 'novios-atardecer-olivos.jpg', box: POST_TALL },
  { raw: '16.jpg', out: 'mesa-numero-trece.jpg', box: POST_TALL },
  { raw: '6.jpg', out: 'novios-beso-puerta.jpg', box: POST },
  { raw: '7.jpg', out: 'novia-lagrima.jpg', box: POST },
  { raw: '8.jpg', out: 'novia-velo-ramo.jpg', box: POST },
  { raw: '9.jpg', out: 'novios-baile-noche.jpg', box: POST },
  { raw: '10.jpg', out: 'novia-tul-sofa.jpg', box: POST },
  { raw: '12.jpg', out: 'novia-espejo-dorado.jpg', box: POST },
  { raw: '13.jpg', out: 'salida-iglesia-novios.jpg', box: POST },
  { raw: '14.jpg', out: 'confeti-puerta-iglesia.jpg', box: { left: 131, top: 473, width: 661, height: 990 } },
]

// Detecta filas "planas" (UI de la app) desde arriba y desde abajo.
async function detectBars(file) {
  const { data, info } = await sharp(file).greyscale().raw().toBuffer({ resolveWithObject: true })
  const { width, height } = info
  const isFlat = y => {
    let sum = 0, sq = 0
    for (let x = 0; x < width; x += 4) { const v = data[y * width + x]; sum += v; sq += v * v }
    const n = Math.ceil(width / 4)
    const mean = sum / n
    return sq / n - mean * mean < 60 && (mean > 225 || mean < 30)
  }
  let top = 0; while (top < height / 2 && isFlat(top)) top++
  let bottom = height - 1; while (bottom > height / 2 && isFlat(bottom)) bottom--
  return { left: 0, top, width, height: bottom - top + 1 }
}

await mkdir(OUT, { recursive: true })

for (const p of photos) {
  const src = join(RAW, p.raw)
  const box = p.box ?? (await detectBars(src))
  await sharp(src).extract(box).jpeg({ quality: 90, mozjpeg: true }).toFile(join(OUT, p.out))
  console.log(`${p.raw} → ${p.out} (${box.width}×${box.height})`)
}

// Logo amarillo sobre blanco (captura 1) → PNG transparente en dos tintas.
// Alfa = cuánto se aleja el canal azul del blanco (el amarillo apenas tiene azul).
async function logo(fill, file) {
  const { data, info } = await sharp(join(RAW, '1.jpg'))
    .extract({ left: 255, top: 770, width: 410, height: 235 })
    .resize({ width: 820 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const out = Buffer.alloc(info.width * info.height * 4)
  for (let i = 0; i < info.width * info.height; i++) {
    const b = data[i * 3 + 2]
    const a = Math.max(0, Math.min(255, Math.round(((255 - b) / 225) * 255)))
    out[i * 4] = fill[0]; out[i * 4 + 1] = fill[1]; out[i * 4 + 2] = fill[2]
    out[i * 4 + 3] = a < 24 ? 0 : a
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).trim().png().toFile(join(root, 'public', file))
  console.log(`logo → public/${file}`)
}
await logo([242, 174, 18], 'logo-limon.png')
await logo([255, 255, 255], 'logo-blanco.png')

// Logo circular del perfil → icono de la web
await sharp(join(RAW, '1.jpg'))
  .extract({ left: 160, top: 588, width: 604, height: 604 })
  .resize(512, 512)
  .png()
  .toFile(join(root, 'app', 'icon.png'))
console.log('1.jpg → app/icon.png')

// OG image 1200×630: foto hero + velo + nombre del estudio
const ogSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#1D2620" stop-opacity="0.9"/>
      <stop offset="0.6" stop-color="#1D2620" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#1D2620" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="200" font-family="Arial, sans-serif" font-size="22" letter-spacing="9" fill="#F2AE12">BODAS + EVENTOS</text>
  <text x="76" y="320" font-family="Georgia, serif" font-size="104" letter-spacing="-3" fill="#FBF8F1">Medio Limón</text>
  <rect x="80" y="356" width="72" height="2" fill="#F2AE12"/>
  <text x="80" y="420" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#FBF8F1" fill-opacity="0.88">Bodas con luz propia.</text>
  <text x="80" y="550" font-family="Arial, sans-serif" font-size="20" letter-spacing="5" fill="#FBF8F1" fill-opacity="0.65">WEDDING PLANNER · JAÉN · ANDALUCÍA</text>
</svg>`)

await sharp(join(OUT, 'novia-olivar-jaen.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: ogSvg }])
  .jpeg({ quality: 88 })
  .toFile(join(root, 'public', 'og-image.jpg'))
console.log('og-image.jpg generada')

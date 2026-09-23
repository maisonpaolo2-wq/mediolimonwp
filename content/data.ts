// Contenido único de la web. Todo el texto visible sale de aquí.
// PENDIENTE CLIENTE: planner (nombre), domain y whatsapp. Con whatsapp vacío el botón
// flotante y los enlaces de WhatsApp se ocultan y los CTA apuntan a email/Instagram.

export const siteConfig = {
  name: 'Medio Limón',
  planner: '',
  domain: 'mediolimonbodas.com',
  email: 'mediolimonbodasyeventos@gmail.com',
  whatsapp: '',
  instagram: '@mediolimonwp',
  locations: ['Jaén', 'Úbeda y Baeza', 'Granada', 'Córdoba', 'Toda Andalucía'],
  tagline: 'Bodas con luz propia, entre olivos',
  bio:
    'Medio Limón nace en Jaén de una idea muy sencilla: una boda tiene que parecerse a quienes se casan. Ni a la última tendencia ni a la boda de la prima. Me enamoré de este oficio organizando celebraciones de amigos, cuando descubrí que lo que más disfrutaba no era el día en sí, sino los meses anteriores: escuchar, ordenar ideas sueltas, encontrar al florista exacto, pensar en la abuela que necesita una silla a la sombra. Hoy organizo bodas y eventos en cortijos, iglesias y fincas de Jaén y del resto de Andalucía, con un estilo limpio, luminoso y muy cuidado, y con la convicción de que la calma del día se construye mucho antes.',
  bioShort:
    'Organizo bodas y eventos en Jaén y toda Andalucía con un estilo limpio, luminoso y muy personal. Vosotros ponéis la historia; yo me encargo de que cada pieza encaje.',
}

export const site = {
  ...siteConfig,
  url: `https://${siteConfig.domain}`,
  displayName: siteConfig.planner || siteConfig.name,
  instagramUrl: 'https://www.instagram.com/mediolimonwp/',
  linkInBio: 'https://bit.ly/429F7Yr',
  whatsappMessage: 'Hola, os escribimos desde la web de Medio Limón. Nos gustaría hablar sobre nuestra boda.',
  region: 'Andalucía',
  locality: 'Jaén',
  description:
    'Medio Limón, wedding planner en Jaén. Organización integral de bodas, coordinación del día B y eventos privados en cortijos e iglesias de toda Andalucía.',
  quote: 'Una boda bonita no es la que sale perfecta en las fotos. Es la que se parece a vosotros.',
  press: 'Marie Claire',
}

export type Service = {
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  imageAlt: string
  idealFor: string
  includes: string[]
}

export const services: Service[] = [
  {
    title: 'Organización integral',
    slug: 'organizacion-integral',
    description:
      'De la primera idea al último baile. Buscamos el lugar, elegimos proveedores y diseñamos una boda con criterio y con vuestro sello.',
    longDescription:
      'Empezamos por vosotros: cómo os conocisteis, qué os hace reír, qué no queréis ver ni en pintura. Con eso defino un concepto y una paleta que ordenan todas las decisiones. Visitamos cortijos y fincas juntos, filtro proveedores de confianza según estilo y presupuesto, llevo contratos, pagos y calendario, y diseño la decoración, la papelería y el recorrido de los invitados. Os mando un resumen claro cada mes para que siempre sepáis en qué punto estamos. El día de la boda coordino todo en persona con mi equipo.',
    image: '/photos/portada-iglesia-flores.jpg',
    imageAlt: 'Portada de piedra de una iglesia con columnas y rosetón, enmarcada por dos grandes composiciones de flores blancas y verdes y alfombra de esparto',
    idealFor: 'Parejas que quieren delegar y disfrutar del camino',
    includes: [
      'Reuniones ilimitadas y resumen mensual',
      'Búsqueda y visitas de espacios',
      'Selección y gestión de proveedores',
      'Control de presupuesto y pagos',
      'Concepto, paleta y diseño decorativo',
      'Papelería y seating plan',
      'Cronograma minuto a minuto',
      'Coordinación del día B con equipo',
    ],
  },
  {
    title: 'Coordinación del día B',
    slug: 'coordinacion-dia-b',
    description:
      'Lo tenéis todo contratado y solo falta alguien que lo haga sonar a tiempo. Me incorporo meses antes y el día soy vuestra sombra.',
    longDescription:
      'Me incorporo unos tres meses antes de la boda. Reviso cada contrato, hablo con todos los proveedores y detecto huecos que suelen pasar desapercibidos: quién recoge los centros, dónde se cambia la novia, qué pasa si llueve a la hora del cóctel. Con todo eso monto un cronograma detallado que reciben todos. El día B llego la primera, monto detalles, recibo a proveedores, guío a los invitados y resuelvo cualquier imprevisto antes de que os enteréis. Vuestro móvil se queda en el bolso.',
    image: '/photos/salida-iglesia-novios.jpg',
    imageAlt: 'Novios saliendo de la mano por el portón de madera tallada de una iglesia barroca, en blanco y negro',
    idealFor: 'Parejas organizadas que quieren vivir el día sin mirar el reloj',
    includes: [
      'Incorporación tres meses antes',
      'Revisión de contratos y proveedores',
      'Visita técnica al espacio',
      'Cronograma completo compartido',
      'Plan B por lluvia o calor',
      'Montaje de detalles y papelería',
      'Coordinación presencial todo el día',
    ],
  },
  {
    title: 'Eventos y celebraciones',
    slug: 'eventos',
    description:
      'Pedidas, preboda, aniversarios, bautizos o una cena para cuarenta en un cortijo. Mismo mimo, formato a medida.',
    longDescription:
      'No todo lo que merece celebrarse es una boda. Organizo pedidas de mano, cenas de preboda, aniversarios, comuniones y celebraciones familiares, además de eventos para empresas que buscan algo más cálido que un salón de hotel. Me encargo del espacio, del catering, de la mesa y de la ambientación, con el mismo cuidado por el detalle que en una boda: flores de temporada, papelería escrita a mano y un ritmo que deja disfrutar a los anfitriones.',
    image: '/photos/mesa-numero-trece.jpg',
    imageAlt: 'Mesa redonda con copas de cristal, centro de flores silvestres sobre musgo y número trece pintado en papel de algodón',
    idealFor: 'Celebraciones íntimas o de empresa con alma de boda',
    includes: [
      'Pedidas y cenas de preboda',
      'Aniversarios y celebraciones familiares',
      'Bautizos y comuniones',
      'Eventos de empresa',
      'Búsqueda de espacio y catering',
      'Diseño de mesa y ambientación',
    ],
  },
]

export const processSteps = [
  {
    number: 1,
    title: 'Un café sin compromiso',
    description:
      'En Jaén o por videollamada. Me contáis quiénes sois, la fecha que tenéis en mente y cómo os imagináis el día. Yo escucho y pregunto mucho.',
  },
  {
    number: 2,
    title: 'Propuesta a medida',
    description:
      'Os envío una propuesta clara con el servicio que encaja, qué incluye y cuánto cuesta. Sin letra pequeña y sin cambios a mitad de camino.',
  },
  {
    number: 3,
    title: 'Diseñamos juntos',
    description:
      'Concepto, paleta, espacio y proveedores. Cada decisión se toma con calma, con muestras reales y con un criterio común que lo une todo.',
  },
  {
    number: 4,
    title: 'Ultimamos cada detalle',
    description:
      'Cronograma minuto a minuto, seating, plan B y prueba final con todos los proveedores. Llegáis a la última semana con la cabeza tranquila.',
  },
  {
    number: 5,
    title: 'Vuestro día',
    description:
      'Llego antes que nadie y me voy la última. Coordino, resuelvo y cuido a las personas para que vosotros solo tengáis que vivirlo.',
  },
]

// Testimonios de muestra coherentes con los servicios. Sustituir por reseñas reales antes de publicar.
export const testimonials = [
  {
    name: 'Carmen y Álvaro',
    date: 'Mayo 2026',
    location: 'Cortijo en la campiña de Jaén',
    service: 'Organización integral',
    text: 'Le dijimos que queríamos flores silvestres, papel de algodón y nada de brillos. Nos presentó una paleta con peras, uvas y musgo que no se nos habría ocurrido nunca y acertó de lleno. El seating colgado con pinzas fue lo que más fotografiaron los invitados.',
  },
  {
    name: 'Elena y Jorge',
    date: 'Septiembre 2025',
    location: 'Úbeda',
    service: 'Coordinación del día B',
    text: 'Lo teníamos todo contratado desde Madrid y nos daba miedo el día. Tres meses antes lo repasó todo con los proveedores y nos mandó un cronograma que parecía un guion. A las ocho de la tarde se fue la luz del cortijo diez minutos y ni nos enteramos.',
  },
  {
    name: 'Marta y Andrés',
    date: 'Junio 2025',
    location: 'Iglesia y finca en Baeza',
    service: 'Organización integral',
    text: 'Yo quería un vestido con mucho volumen y una ceremonia sencilla, y mi madre justo lo contrario. Medio Limón medió entre todos con un cariño enorme. Cuando salimos de la iglesia y cayó el confeti, la vimos emocionada detrás de las columnas.',
  },
  {
    name: 'Cristina y Fernando',
    date: 'Octubre 2024',
    location: 'Jaén',
    service: 'Eventos y celebraciones',
    text: 'Nos organizó la pedida y después la boda. En la pedida éramos cuarenta en una casa de campo y cuidó la mesa como si fueran doscientos. Por eso luego no nos planteamos llamar a nadie más.',
  },
]

export type Photo = {
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}

export const photos: Photo[] = [
  {
    src: '/photos/novia-olivar-jaen.jpg',
    alt: 'Novia con velo largo girándose entre olivos centenarios en la campiña de Jaén, en blanco y negro',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/centro-mesa-flores-silvestres.jpg',
    alt: 'Centro de mesa de flores silvestres sobre musgo con peras, uvas y número doce pintado a mano en papel de algodón',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/novios-beso-puerta.jpg',
    alt: 'Novios riendo nariz con nariz frente a una puerta de madera, ella con vestido de cuello alto y él con ramo de craspedia',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/novia-espejo-dorado.jpg',
    alt: 'Novia de espaldas frente a un espejo de marco dorado, con vestido de cuello alto y falda de tul en capas',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/portada-iglesia-flores.jpg',
    alt: 'Portada de piedra de una iglesia con rosetón y dos composiciones florales blancas y verdes a los lados de la puerta',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/novia-lagrima.jpg',
    alt: 'Primer plano de una novia con una lágrima brillante en la mejilla y pendiente de joya antigua',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/confeti-puerta-iglesia.jpg',
    alt: 'Novios celebrando con los brazos en alto bajo una lluvia de confeti blanco a la salida de la iglesia',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/seating-papel-algodon.jpg',
    alt: 'Seating plan en tarjetas de papel de algodón escritas a mano y colgadas con pinzas de madera y cordel',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/novia-velo-ramo.jpg',
    alt: 'Novia sonriendo bajo un velo de tul con vestido de mangas lazo y ramo de rosas blancas',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/novios-atardecer-olivos.jpg',
    alt: 'Novios apoyados en una valla de madera entre olivos, frente con frente, con la luz naranja del atardecer',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/novia-tul-sofa.jpg',
    alt: 'Novia sentada en un sofá blanco con una enorme cola de tul extendida por el suelo, en blanco y negro',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/mesa-numero-trece.jpg',
    alt: 'Mesa de banquete con copas, platos blancos y centro de flores silvestres junto al número trece',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/salida-iglesia-novios.jpg',
    alt: 'Novios saliendo de la mano de una iglesia barroca por un portón de madera tallada, en blanco y negro',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/novios-baile-noche.jpg',
    alt: 'Novia bailando de noche con un invitado con copas de cava en la mano, en blanco y negro',
    featured: true,
    orientation: 'portrait',
  },
]

export const photoBySrc = (name: string) => photos.find(p => p.src.endsWith(name))!

export const values = [
  {
    title: 'Luz',
    text: 'Bodas limpias, luminosas y con aire. Menos cosas, mejor elegidas. Cada elemento está porque cuenta algo de vosotros.',
  },
  {
    title: 'Cercanía',
    text: 'Me tenéis a un mensaje. Conozco a vuestras familias antes del día, y eso se nota cuando algo se tuerce y hay que decidir rápido.',
  },
  {
    title: 'Oficio',
    text: 'Cronogramas al minuto, plan B para todo y proveedores de Jaén con los que trabajo desde hace años. La calma se construye antes.',
  },
]

export const coverage = [
  { area: 'Jaén capital y campiña', note: 'Cortijos, haciendas y fincas entre olivos. Sin desplazamiento.' },
  { area: 'Úbeda, Baeza y Sierra de Cazorla', note: 'Patrimonio renacentista y bodas de montaña.' },
  { area: 'Granada, Córdoba y Málaga', note: 'Desplazamiento incluido en la propuesta.' },
  { area: 'Resto de España', note: 'Bodas destino bajo consulta, con visitas previas planificadas.' },
]

export const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
]

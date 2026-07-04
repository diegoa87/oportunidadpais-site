/**
 * Oportunidad País · Datos
 * En producción, esto vendría de un CMS o API. Acá va inline para mantener
 * el sitio 100% estático y deployable en cualquier hosting.
 *
 * Estructura de cada persona:
 *   slug, name, role, org, industry, city, bio, keyIdea, chapterNum, tone
 *   + photoUrl       — URL a foto real (600x600 recomendado). Si falta, fallback a iniciales.
 *   + linkedinUrl    — perfil de LinkedIn
 *   + story          — objeto {intro, sections: [{title, paragraphs: []}]}
 *   + logros        — array de logros [{year, title, detail}]
 *   + formacion      — array [{institution, title, year}]
 *   + memberships    — array [{org, role}]
 *
 * Estructura de cada capítulo:
 *   num, title, personaSlug, industry, duration, date, tone
 *   + spotifyUrl     — link al show de Spotify (no hay episode IDs públicos)
 *   + youtubeUrl     — link directo al episodio en YouTube
 *   + shareText      — texto pre-llenado para compartir por WhatsApp (wzp)
 *
 * NOTA: El podcast NO está en Apple Podcasts (solo YouTube + Spotify).
 *
 * Estado de los 12 capítulos de la Temporada 1:
 *   - 9 episodios publicados (C1-C9)
 *   - 3 capítulos en producción (C10, C11, C12)
 *
 * Datos verificados contra la playlist oficial de YouTube y el show en
 * Spotify. Ver README para detalle de fuentes.
 */

const DATA = {
  // Industrias canónicas (usadas en filtros)
  industries: [
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'educacion', name: 'Educación' },
    { id: 'energia', name: 'Energía' },
    { id: 'mineria', name: 'Minería' },
    { id: 'inclusion', name: 'Inclusión' },
    { id: 'negocios', name: 'Negocios' },
    { id: 'politicas', name: 'Políticas públicas' }
  ],

  // Fotos locales en /fotos/[slug].jpg (assets del sitio).
  // Si falta foto real, fallback a Pravatar.
  _photoFallback(slug) {
    return `https://i.pravatar.cc/600?u=${encodeURIComponent(slug)}`;
  },

  personas: [
    {
      slug: 'justo-vargas',
      name: 'Justo Miguel Vargas',
      role: 'VP Technology & Tech Partner en Globant',
      org: 'Cofounder Unlearni',
      industry: 'tecnologia',
      city: 'Santiago',
      bio: 'Ingeniero en Sistemas de la UTN Argentina. MBA de la U. de Chile. Lidera desde 2020 la operación de Globant en Chile y Uruguay, con más de 2.400 ingenieros. Cofundó Unlearni en 2024. Docente en la UAI.',
      keyIdea: '¿Ganas más usando IA en tu empresa?',
      whyKnow: 'Es la voz más clara del país sobre cómo las empresas se están adaptando al nuevo paradigma de IA. Para entender qué está pasando en tecnología corporativa, hay que escucharlo. Si te importa saber cómo se pasa del discurso a la implementación real, esta conversación es para ti.',
      chapterNum: 1,
      tone: 2,
      photoUrl: 'fotos/justo-vargas.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/justomiguel',
      gender: 'm',

    },
    {
      slug: 'jeannette-escudero',
      name: 'Jeannette Escudero Vásquez',
      role: 'Directora Ejecutiva Talento Digital para Chile',
      org: 'Talento Digital para Chile',
      industry: 'tecnologia',
      city: 'Santiago',
      bio: 'Ingeniera Civil Industrial de la U. de Chile. Certificada en Marketing Digital de la Universidad de Columbia. Más de 20 años en cargos ejecutivos en empresas del sector financiero. Fue Gerente de Transformación Digital y Canales Digitales en BancoEstado (2018-2020).',
      keyIdea: 'IA: ¿Amenaza u oportunidad?',
      whyKnow: 'Porque dirige el programa público-privado que ha reconvertido laboralmente a más de 35.000 personas en Chile hacia perfiles digitales. Si te importa la formación con impacto real, escuchar a Jeannette te cambia la perspectiva sobre lo que funciona.',
      chapterNum: 2,
      tone: 3,
      photoUrl: 'fotos/jeannette-escudero.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/jeannette-escudero-vasquez',
      gender: 'f',

    },
    {
      slug: 'francisco-mardones',
      name: 'Francisco Mardones',
      role: 'Board Member & Tech Advisor',
      org: 'Ex Director Ejecutivo CHILETEC',
      industry: 'energia',
      city: 'Santiago',
      bio: 'Líder tecnológico con más de 20 años construyendo equipos de ingeniería para empresas de US en Latam. Ex presidente de CHILETEC, actual Director en Fundación Kodea. Voice referente en la industria de software chilena.',
      keyIdea: 'Chile debe potenciar tech.',
      whyKnow: 'Porque lleva más de 40 años en la industria del software y actualmente es Director Ejecutivo de CHILETEC, el gremio que nuclea a las empresas de tecnología más grandes de Chile. Si te interesa entender hacia dónde va el sector tech —y por qué se está quedando atrás frente a la región— escuchalo. Habla con datos, no con slogans.',
      chapterNum: 3,
      tone: 4,
      photoUrl: 'fotos/francisco-mardones.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/fmardones',
      gender: 'm',

    },
    {
      slug: 'luz-maria-garcia',
      name: 'Luz María García Contreras',
      role: 'Gerente General ACTI Chile',
      org: 'ACTI Chile',
      industry: 'tecnologia',
      city: 'Santiago',
      bio: 'Administradora Pública de la U. de Chile. Más de 15 años de experiencia en el sector público diseñando políticas digitales para Chile. Lidera ACTI, el principal referente gremial del sector TI en Chile.',
      keyIdea: 'Qué debe hacer Chile, según la Gerente General ACTI.',
      whyKnow: 'Porque lleva una década empujando la agenda digital del país desde el Estado, y hoy la empuja desde el gremio que reúne a las empresas tech. Si te interesa entender la diferencia entre política digital hecha y política digital escrita, esta conversación es para ti.',
      chapterNum: 4,
      tone: 1,
      photoUrl: 'fotos/luz-maria-garcia.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/luz-maría-garcía-contreras-085024a4',
      gender: 'f',

    },
    {
      slug: 'elizabeth-cameron',
      name: 'Elizabeth Cameron Ovando',
      role: 'Principal Asuntos Corporativos Cerro Colorado',
      org: 'BHP',
      industry: 'mineria',
      city: 'Antofagasta',
      bio: 'Magíster en Gestión de Políticas Públicas. Lidera asuntos corporativos en Cerro Colorado, una operación de BHP en el norte de Chile. Socia WIM, Mentora RIM, Embajadora LIQCAU, reconocida entre las 100 mujeres inspiradoras de la minería chilena.',
      keyIdea: 'Chile necesita mirar al norte: la visión de Elizabeth Cameron de BHP.',
      whyKnow: 'Porque lidera inclusión en una de las mineras más grandes del mundo desde adentro —no desde el PowerPoint. Es evidencia empírica de que la diversidad funciona, no solo un argumento. Si quieres ver cómo se mide de verdad, escuchala.',
      chapterNum: 5,
      tone: 2,
      photoUrl: 'fotos/elizabeth-cameron.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/elizabeth-cameron-ovando-15baba35',
      gender: 'f',

    },
    {
      slug: 'varinka-farren',
      name: 'Varinka Farren',
      role: 'Directora ejecutiva de Hub APTA',
      org: 'Hub APTA',
      industry: 'tecnologia',
      city: 'Santiago',
      bio: 'Economista y MBA de Clarion University of Pennsylvania. Más de 15 años llevando ciencia y tecnología desde la universidad al mercado. Ha puesto más de 60 tecnologías chilenas en el mercado nacional e internacional. Reconocida como Gestora Tecnológica de Chile 2016 (Corfo), una de las 50 Mujeres Genias 2024 y Premio Her Global 2026. Conductora del podcast MadeInnChile.',
      keyIdea: 'Ciencia chilena al mercado con Varinka Farren, Hub APTA.',
      whyKnow: 'Porque lleva 15 años demostrando que Chile puede generar negocios de base científico-tecnológica de clase mundial, si se elimina la burocracia entre academia, Estado e industria. Si te importa entender por qué Chile invierte en I+D pero casi nada llega a la calle, esta conversación es para ti.',
      chapterNum: 6,
      tone: 3,
      photoUrl: 'fotos/varinka-farren.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/vfarren',
      gender: 'f',

    },
    {
      slug: 'camila-forno',
      name: 'Camila Forno',
      role: 'Subgerente de Sostenibilidad Corporativo',
      org: 'Falabella Financiero',
      industry: 'inclusion',
      city: 'Santiago',
      bio: 'Lidera sostenibilidad corporativa en Banco Falabella. Conduce el Movimiento Gennials, con foco en educación financiera, desarrollo local, diversidad e inclusión. Premiada con el sello Cuantificación de Huella Chile.',
      keyIdea: 'IA y educación financiera: ¿oportunidad o riesgo?',
      whyKnow: 'Porque lidera la agenda de educación financiera digital de una de las empresas más grandes de Chile, con foco en grupos vulnerables. Si quieres entender cómo se construye inclusión financiera real desde una empresa privada, esta conversación es para ti.',
      chapterNum: 7,
      tone: 4,
      photoUrl: 'fotos/camila-forno.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/camila-forno-2510a14a',
      story: {
        intro: "Subgerente Corporativa de Sostenibilidad en Falabella Financiero. Ingeniera Comercial de la Universidad de Valparaíso. Lidera educación financiera, diversidad e inclusión con un enfoque basado en evidencia y alianzas intersectoriales. Reconocida como Top Voice de LinkedIn en Sostenibilidad ASG para Chile.",
        sections: [
          {
            title: "Orígenes y formación",
            paragraphs: [
              "Originaria de la Región de Valparaíso. Estudió <strong>Ingeniería Comercial</strong> en la Universidad de Valparaíso, titulándose a fines de la década de 2000. Esa base disciplinaria le dio el herramental cuantitativo y estratégico que hoy aplica a la sostenibilidad corporativa.",
              "En su juventud fue campeona de cueca universitaria (2009), lo que refleja una faceta cultural y comunitaria que anticipó su لاحق trajetória profesional enfocada en el bienestar colectivo."
            ]
          },
          {
            title: "De Responsabilidad Social a Sostenibilidad Estratégica",
            paragraphs: [
              "En <strong>2017</strong> assumió como <strong>Jefa Corporativa de Responsabilidad Social</strong> de Falabella Financiero, en una época en que la industria bancaria operaba bajo el marco clásico de la RSE: vinculación comunitaria, donación y voluntariado corporativo.",
              "A medida que el mercado de capitales global empezó a exigir mayor rendición de cuentas y los marcos normativos internacionales —como los lineamientos del <strong>Global Reporting Initiative (GRI)</strong>— adquirieron carácter vinculante, la organización evolucionó. Para <strong>2020</strong>, el cargo se expandió formalmente a <strong>Subgerencia Corporativa de Sostenibilidad</strong> con alcance regional en Chile, Perú, Colombia y la empresa conjunta en México.",
              "Esa transición nominal encapsula un giro estratégico profundo: el abandono de la filantropía como centro de gravedad en favor de la integración sistemática de variables ambientales y sociales en el núcleo del negocio de originación de crédito y medios de pago."
            ]
          },
          {
            title: "La Radiografía UC que cambió todo",
            paragraphs: [
              "El hito analítico más trascendental de su gestión fue la alianza investigativa de casi tres años con el <strong>Centro de Políticas Públicas de la Pontificia Universidad Católica de Chile (PUC)</strong>. El estudio resultante, \"Radiografía de la Educación e Inclusión Financiera en Chile\", utilizó bases de datos levantadas durante 2024 y published entre 2025 y 2026.",
              "Los hallazgos fueron devastadores: el ciudadano chileno se autoevalúa con un <strong>3.0 sobre 5</strong> en conocimientos financieros, pero su dominio real mide apenas <strong>1.6 sobre 5</strong>. Solo el <strong>30%</strong> responde correctamente tres preguntas económicas basales. Apenas el <strong>20%</strong> comprende cómo opera una tasa de interés. La planificación presupuestaria familiar es inexistente para más de la mitad de los hogares. Únicamente el <strong>34%</strong> de la población declara poder cubrir sus gastos sin dificultad.",
              "Estos datos forzaron una redefinición completa de la política de riesgo crediticio y los modelos de vinculación comunitaria del banco."
            ]
          },
          {
            title: "Su impacto hoy",
            paragraphs: [
              "Hoy lidera el <strong>Movimiento Gennials</strong> —un programa con foco en educación financiera, desarrollo local, diversidad e inclusión— y coordina alianzas con entidades como la Pontificia Universidad Católica de Chile, Entel, Pacto Global y la Comisión Asesora para la Inclusión Financiera del Ministerio de Hacienda.",
              "También conduce programas como <strong>EDDU</strong> (plataforma de edutainment financiero), el podcast <strong>\"Detrás del Fraude\"</strong> (que dominó los charts radiales), <strong>Fondo 55+</strong> y <strong>OpenSeniors</strong> para adultos mayores, y la tarjeta <strong>CMR con Garantía</strong> diseñada para perfiles no bancarizados.",
              "Bajo su liderazgo, Falabella Financiero logró un <strong>ROE de 21,94%</strong>, un expansión crediticia de <strong>18,8%</strong> (superando los MM$4.900.000 en colocaciones) y se encamina hacia <strong>Cero Netas 2035</strong>."
            ]
          }
        ]
      },
      logros: [
        {
          year: '2025',
          title: 'ROE histórico 21,94%',
          detail: 'Falabella Financiero supera su techo operacional con retornos de capital ajustados a máximos históricos.'
        },
        {
          year: '2025',
          title: 'Podcast "Detrás del Fraude"',
          detail: 'Contenido de prevención de fraude cibernético que dominó los charts radiales y demostró la demanda masiva de educación financiera.'
        },
        {
          year: '2024',
          title: 'MM$ 4.900.000 en colocaciones',
          detail: 'Expansión de 18,8% del libro total de crédito, con provisiones saneadas y bajo índice de morosidad.'
        },
        {
          year: '2023',
          title: 'Radiografía UC — Educación Financiera',
          detail: 'Alianza investigativa con el Centro de Políticas Públicas UC: el estudio más completo sobre educación financiera en Chile.'
        },
        {
          year: '2022',
          title: 'Net Zero 2035',
          detail: 'Anuncio formal del compromiso de Falabella Financiero con cero emisiones netas para 2035.'
        },
        {
          year: '2020',
          title: 'Subgerencia de Sostenibilidad',
          detail: 'Creación y liderazgo de la nueva Subgerencia Corporativa de Sostenibilidad con alcance regional.'
        }
      ],
      formacion: [
        {
          institution: 'Universidad de Valparaíso',
          title: 'Ingeniería Comercial',
          year: '~2009'
        }
      ],
      memberships: [
        { org: 'Pacto Global Chile', role: '' },
        { org: 'Comisión Asesora para la Inclusión Financiera — Ministerio de Hacienda', role: '' },
        { org: 'GRI — Global Reporting Initiative', role: '' }
      ],
      aportacion: "Porque demuestra que la sostenibilidad bancaria no es un costo sino una herramienta de mitigación de riesgo y generación de valor. Si te interesa cómo el sector privado puede abordar problemas estructurales de inequidad financiera con data y rigor, esta conversación es clave."
    },
    {
      slug: 'carolina-garcia',
      name: 'Carolina García Berguecio',
      role: 'Fundadora Comunidad Inclusiva · Champion D&I BHP',
      org: 'BHP Minerals Américas',
      industry: 'inclusion',
      city: 'Santiago',
      bio: 'Ingeniera Civil Industrial de la U. de Chile. 25 años en gestión estratégica en diversas industrias, los últimos 20 vinculados al sector minero. Top Voice LinkedIn en Diversidad e Inclusión en Chile. 100 Mujeres Líderes 2025.',
      keyIdea: 'La inclusión no es caridad: es productividad.',
      whyKnow: 'Porque lleva una vida demostrando que la inclusión es productividad, no caridad. Si te importa construir equipos diversos y quieres argumentos con datos, no con consignas, esta conversación es imperdible. Es una de las voces más influyentes de Chile en D&I.',
      chapterNum: 8,
      tone: 1,
      photoUrl: 'fotos/carolina-garcia.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/carolinagarciaberguecio',
      story: {
        intro: "Ingeniera Civil Industrial de la Universidad de Chile. Hijo de Fernando García, presidente del Colegio de Ingenieros y ejecutivo de IBM. Deportista de alta competencia: campeona nacional de windsurf a los 15 años. Tetraplejia desde 2006 tras un accidente de tránsito. Hoy lidera inclusión en BHP y fundo Comunidad Inclusiva.",
        sections: [
          {
            title: "Orígenes y formación",
            paragraphs: [
              "Hija de <strong>Fernando García</strong> —presidente del Colegio de Ingenieros de Chile y ejecutivo de IBM por más de tres décadas— y de Mireya Berguecio. Crecía en un entorno de alta exigencia académica y constante movilidad geográfica.",
              "Esa dinámica familiar instaló lo que ella denomina un <strong>\"mandato\" institucional</strong>: la creencia de que por poseer una mente matemática y racional no había espacio para la vulnerabilidad emocional. Durante su juventud canalizó esa energía hacia el deporte de alta competencia: spinning, montañismo, esquí y windsurf, consagrándose como <strong>campeona nacional de windsurf</strong> desde los 15 años.",
              "Motivada por su aptitud matemática y el consejo paterno, ingresó a la <strong>Universidad de Chile</strong> para estudiar Ingeniería Civil Industrial, consolidándose como una de las pocas mujeres de su cohorte en acceder a disciplinas STEM."
            ]
          },
          {
            title: "El accidente que lo cambió todo",
            paragraphs: [
              "El <strong>12 de abril de 2006</strong>, mientras se dirigía a una reunión de negocios en Antofagasta, el taxi en que viajaba colisionó de frente con un camión. El impacto le causó una fractura de médula espinal a nivel cervical, resultando en una tetraplejia severa. Durante los primeros ocho meses solo podía mover los ojos y la boca.",
              "El diagnóstico médico inicial señaló una inmovilidad permanente y la necesidad de asistencia las 24 horas del día. Su cuerpo, que antes era su principal herramienta de expresión y conquista, cambió drásticamente para depender de una silla neurológica y asistencia externa."
            ]
          },
          {
            title: "La exclusión y la reconstrucción",
            paragraphs: [
              "Al regresar a la empresa donde trabajaba, fue relegada a funciones de backoffice y despedida un año después bajo la justificación corporativa de que <strong>\"ya no servía\"</strong> para el puesto. Entre 2007 y 2012 enfrentó el rechazo sistemático del mercado laboral chileno ante su condición.",
              "La exclusión laboral la obligó a iniciar un proceso de reinvención personal. Se certificó como Coach Ontológico en <strong>Newfield Network</strong> en 2014, mentored por Esperanza Cueto. Cursó programas con <strong>Humberto Maturana</strong>, <strong>Fernando Flores</strong> y estudios de postgrado en mindfulness en NYU. Aprendió a nombrar y procesar emociones que había bloqueado bajo su antigua identidad racionalista."
            ]
          },
          {
            title: "Su impacto hoy",
            paragraphs: [
              "En <strong>2018</strong> co-fundó la <strong>Fundación Comunidad Inclusiva</strong>, generando cambio cultural sistémico en empresas públicas y privadas para la incorporación sostenible de personas con discapacidad y equidad de género. En BHP Minerals Americas lidera la gobernanza del entrenamiento técnico de operadores mineros.",
              "Ha sido reconocida como <strong>Top Voice de LinkedIn en Diversidad e Inclusión para Chile</strong>, incluida en la lista de las 100 Mujeres Más Inspiradoras de la Minería Global, premiada como Líder Minera 2025 y expositora principal del Congreso Futuro 2026."
            ]
          }
        ]
      },
      logros: [
        {
          year: '2026',
          title: 'Congreso Futuro',
          detail: 'Expositora principal en la sesión de tecnologías emergentes con la conferencia "Derribar barreras para una humanidad inclusiva", hablando sobre exclusión algorítmica e IA.'
        },
        {
          year: '2025',
          title: 'Líder Minera 2025',
          detail: 'Premio de la Fundación Minera de Chile en la categoría "Líder Minera 2025" por su gestión en BHP Minerals Americas.'
        },
        {
          year: '2025',
          title: 'Mujeres Influyentes #3 Chile',
          detail: 'Posicionada en el puesto 3 del ranking de mujeres influyentes de LinkedIn en Chile según Favikon / Jeremy Boissinot.'
        },
        {
          year: '2023',
          title: 'Top Voice LinkedIn Chile',
          detail: 'Reconocida como Top Voice #1 en Diversidad e Inclusión en el Trabajo para Chile por LinkedIn Corporation.'
        },
        {
          year: '2022',
          title: 'Premio Mujeres Influyentes',
          detail: 'Galardonada en la categoría de Diversidad e Inclusión en Minería por su trabajo en BHP y Comunidad Inclusiva.'
        },
        {
          year: '2020-2021',
          title: '100 Mujeres Más Inspiradoras de la Minería Global',
          detail: 'Incluida en la lista internacional de Women in Mining (WIM) UK por su labor de visibilización de la inclusión en el sector.'
        },
        {
          year: '2018',
          title: 'Fundación Comunidad Inclusiva',
          detail: 'Co-fundó la fundación junto a las ingenieras Cecilia Barros y Beatriz, generando cambio cultural sistémico en empresas públicas y privadas.'
        }
      ],
      formacion: [
        {
          institution: 'Universidad de Chile',
          title: 'Ingeniería Civil Industrial',
          year: 'Década de 1990'
        },
        {
          institution: 'Newfield Network',
          title: 'Certificación en Coaching Ontológico',
          year: '2014'
        },
        {
          institution: 'Universidad de Nueva York (NYU)',
          title: 'Estudios de Postgrado en Mindfulness',
          year: 'Post-2012'
        },
        {
          institution: 'Formación con Humberto Maturana',
          title: 'Dos programas — lenguaje, emociones y transformación',
          year: 'Post-2012'
        },
        {
          institution: 'Formación con Fernando Flores',
          title: 'Programa "Navegando con templanza y serenidad" — gestión de crisis y liderazgo',
          year: 'Post-2012'
        }
      ],
      memberships: [
        {
          org: 'Women in Mining (WIM) Chile',
          role: 'Socia'
        },
        {
          org: 'Mujeres Influyentes',
          role: 'Miembro'
        },
        {
          org: 'HERGlobal Impact',
          role: 'Participante — redes de mentoría femenina en sectores masculinizados'
        }
      ],
      aportacion: 'Carolina representa la demostración viviente de que la inclusión no es un acto de caridad sino de productividad estratégica. Su historia es un caso de estudio sobre cómo la exclusión laboral sistemática obliga a las personas a reconstruirse ontológicamente, y cómo esa reconstrucción puede convertirse en palanca de cambio estructural para miles de otras personas. Su mayor aporte es haber convertido su experiencia de exclusión en un marco de trabajo técnico que empresas como BHP pueden replicar para generar inclusión sostenible — no por altruismo, sino por resultados medibles.',

    },
    {
      slug: 'cristobal-aravena',
      name: 'Cristóbal Aravena Concha',
      role: 'Líder de Propósito y Relacionamiento',
      org: 'ABASTIBLE S.A.',
      industry: 'negocios',
      city: 'Santiago',
      bio: 'Ingeniero Comercial de la Pontificia Universidad Católica de Chile. Lidera la implementación del propósito corporativo de Abastible, que incluye el compromiso de pago a 7 días a proveedores PYME —más de 3.000 PYMES beneficiadas, con 95% de cumplimiento. Es parte de la Corporación Grande PYME junto a BCI, SURA, Entel, Aguas Andina y Cencosud.',
      keyIdea: 'Las PYME no quiebran por ventas: quiebran por caja.',
      whyKnow: 'Porque logró algo casi imposible: que una gran empresa le pague a sus proveedores PYME en 7 días. Es evidencia concreta —no discurso— de que las grandes empresas pueden ser motor del ecosistema emprendedor. Si quieres ver un caso real de cómo se cambia la suerte de una PYME, escuchalo.',
      chapterNum: 9,
      tone: 2,
      photoUrl: 'fotos/cristobal-aravena.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/cristóbal-aravena-concha-16a82b117',
      gender: 'm',

    },
    {
      slug: 'diego-arias',
      name: 'Diego Arias',
      role: 'Director de Alianzas y Estrategias',
      org: 'Desafío Latam',
      industry: 'educacion',
      city: 'Santiago',
      bio: 'Socio Fundador de Desafío Latam.',
      keyIdea: 'Conversaciones que revelan la productividad de Chile.',
      whyKnow: 'Host de Oportunidad País.',
      chapterNum: 0,
      tone: 3,
      photoUrl: 'fotos/diego-arias.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/diegoaarias',
      gender: 'm',
    },
  ],

  // Capítulos — con links reales a YouTube y Spotify, y shareText para wzp
  capitulos: [
    {
      num: 9,
      title: "Las PYME no quiebran por ventas: quiebran por caja.",
      personaSlug: 'cristobal-aravena',
      industry: 'negocios',
      duration: '52 min',
      date: '2026-07-16',
      tone: 2,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=QoWBA62rA1w',
      shareText: 'Las PYME no quiebran por ventas: quiebran por caja. Cap 9 de Oportunidad País.'
    },
    {
      num: 8,
      title: "La inclusión no es caridad: es productividad.",
      personaSlug: 'carolina-garcia',
      industry: 'mineria',
      duration: '60 min',
      date: '2026-07-02',
      tone: 4,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=WSgsbpbyGJc',
      teaserId: 'WSgsbpbyGJc',
      teaserVideo: 'videos/teaser-carolina-480.mp4',
      shareText: 'La inclusión no es caridad: es productividad. Cap 8 de Oportunidad País.'
    },
    {
      num: 7,
      title: "IA y educación financiera: ¿oportunidad o riesgo?",
      personaSlug: 'camila-forno',
      industry: 'politicas',
      duration: '54 min',
      date: '2026-06-18',
      tone: 2,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=OVEHWEDahA0',
      teaserVideo: 'videos/teaser-camila-480.mp4',
      shareText: 'IA y educación financiera: ¿oportunidad o riesgo? Cap 7 de Oportunidad País.'
    },
    {
      num: 6,
      title: "Ciencia chilena al mercado con Varinka Farren, Hub APTA.",
      personaSlug: 'varinka-farren',
      industry: 'tecnologia',
      duration: '48 min',
      date: '2026-06-03',
      tone: 3,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=w6zXPnNhyzI',
      shareText: 'Ciencia chilena al mercado con Varinka Farren, Hub APTA. Cap 6 de Oportunidad País.'
    },
    {
      num: 5,
      title: "Chile necesita mirar al norte: la visión de Elizabeth Cameron de BHP.",
      personaSlug: 'elizabeth-cameron',
      industry: 'educacion',
      duration: '49 min',
      date: '2026-05-20',
      tone: 1,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=C-upc2eDoh0',
      shareText: 'Chile necesita mirar al norte: la visión de Elizabeth Cameron de BHP. Cap 5 de Oportunidad País.'
    },
    {
      num: 4,
      title: "Qué debe hacer Chile, según la Gerente General ACTI.",
      personaSlug: 'luz-maria-garcia',
      industry: 'negocios',
      duration: '73 min',
      date: '2026-05-06',
      tone: 4,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=NlY7gtO4Ut4',
      shareText: 'Qué debe hacer Chile, según la Gerente General ACTI. Cap 4 de Oportunidad País.'
    },
    {
      num: 3,
      title: "Chile debe potenciar tech.",
      personaSlug: 'francisco-mardones',
      industry: 'tecnologia',
      duration: '57 min',
      date: '2026-04-15',
      tone: 2,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=-jepRqm50g4',
      shareText: 'Chile debe potenciar tech. Cap 3 de Oportunidad País.'
    },
    {
      num: 2,
      title: "IA: ¿Amenaza u oportunidad?",
      personaSlug: 'jeannette-escudero',
      industry: 'politicas',
      duration: '32 min',
      date: '2026-03-31',
      tone: 3,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=GbMk7umUWig',
      shareText: 'IA: ¿Amenaza u oportunidad? Cap 2 de Oportunidad País.'
    },
    {
      num: 1,
      title: "¿Ganas más usando IA en tu empresa?",
      personaSlug: 'justo-vargas',
      industry: 'tecnologia',
      duration: '56 min',
      date: '2026-03-17',
      tone: 1,
      spotifyUrl: 'https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=aYCqxOal1uk',
      shareText: '¿Ganas más usando IA en tu empresa? Cap 1 de Oportunidad País.'
    }
  ]
};

// Helpers — generan HTML de cards en cliente
const Helpers = {
  ytThumb(url) {
    if (!url) return '';
    const m = url.match(/[?&]v=([^&]+)|youtu\.be\/([^?&#]+)/);
    const id = (m && (m[1] || m[2])) || '';
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
  },
  initials(name) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
  },
  industryName(id) {
    const i = DATA.industries.find(x => x.id === id);
    return i ? i.name : id;
  },
  personaBySlug(slug) { return DATA.personas.find(p => p.slug === slug); },
  capByNum(num) { return DATA.capitulos.find(c => c.num === num); },

  // Devuelve la URL de la foto (real si existe, sino fallback Pravatar).
  photoUrl(p) {
    return p.photoUrl || DATA._photoFallback(p.slug);
  },

  // Render una card de persona.
  // Si photoUrl está set, renderiza <img>; si no, fallback a iniciales.
  // Las iniciales solo se muestran si la imagen falla en cargar.
  personCard(p) {
    const photoUrl = Helpers.photoUrl(p);
    const init = Helpers.initials(p.name);
    return `
      <a href="persona.html?slug=${p.slug}" class="person-card tone-${p.tone}">
        <div class="person-photo-wrap">
          <div class="person-photo" data-photo-wrap>
            <img src="${photoUrl}" alt="${p.name}" loading="lazy" decoding="async"
                 style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%;"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <span class="init">${init}</span>
          </div>
          ${p.linkedinUrl ? `<span class="li-badge li-badge-sm" role="button" tabindex="0" aria-label="Seguir a ${p.name} en LinkedIn" onclick="event.preventDefault();event.stopPropagation();window.open('${p.linkedinUrl}','_blank','noopener');">in</span>` : ''}
        </div>
        <div class="person-meta">C${p.chapterNum} · ${Helpers.industryName(p.industry)}</div>
        <div class="person-name">${p.name}</div>
        <div class="person-role">${p.role}</div>
        <div class="person-bio">"${p.keyIdea}"</div>
        ${p.whyKnow ? `<div class="person-why">${p.whyKnow}</div>` : ''}
      </a>
    `;
  },

  // Render una card de capítulo
  capCard(c) {
    const p = Helpers.personaBySlug(c.personaSlug);
    const thumb = Helpers.ytThumb(c.youtubeUrl);
    return `
      <a href="capitulo.html?num=${c.num}" class="ep-card">
        <div class="ep-cover${thumb ? ' ep-cover-thumb' : ''}">
          ${thumb ? `<img class="ep-thumb" src="${thumb}" alt="Thumbnail" loading="lazy" onerror="this.parentElement.classList.remove(&apos;ep-cover-thumb&apos;)">` : ''}
          <div class="ep-meta-top">C${c.num} · ${Helpers.industryName(c.industry).toUpperCase()} · ${c.duration}</div>
          <div class="ep-quote">"${c.title.replace(/^[^:]+: /, '').replace(/\.$/, '')}"</div>
        </div>
        <div class="ep-body">
          <div class="ep-num">Capítulo ${String(c.num).padStart(2, '0')}</div>
          <h3>${p ? p.name : '—'}</h3>
          <div class="ep-meta-bot">${c.date} · ${c.duration}</div>
        </div>
      </a>
    `;
  },

  // Construye el link wzp (WhatsApp share) para un capítulo dado.
  // Usa wa.me/?text=... que abre WhatsApp y permite elegir contacto.
  // Si el usuario tiene un número fijo, reemplazar 'wa.me/' por 'wa.me/569XXXXXXXX'.
  wzpUrlForCap(c, pageUrl) {
    const text = `${c.shareText} ${pageUrl}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  },

  // Variante genérica — para mensajes que no son sobre un capítulo.
  wzpUrlFor({ shareText }, pageUrl) {
    const suffix = pageUrl ? ` ${pageUrl}` : '';
    return `https://wa.me/?text=${encodeURIComponent(shareText + suffix)}`;
  }
};
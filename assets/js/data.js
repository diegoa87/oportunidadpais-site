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
      story: {
        intro: "Gerenta General de ACTI Chile desde septiembre de 2023. De la编码 editorial y el diseño digital (1997-1998) a la gerencia del gremio tecnológico más antiguo de Chile. Residió y trabajó en Colombia y Argentina, especializándose en IA en la UBA. Lideró Sé Santiago Smart City (CORFO) y coordina la Agenda 2026-2030 del sector tech ante el Estado chileno bajo la Ley de Lobby.",
        sections: [
          {
            title: "Orígenes y el giro hacia la tecnología",
            paragraphs: [
              "Su carrera comenzó a finales de la década de 1990, específicamente entre <strong>1997 y 1998</strong>, un período marcado por la transición de los medios impresos hacia las plataformas digitales interactivas. Inicialmente vinculada al diseño editorial y de libros, optó por un giro estratégico hacia el sector tecnológico durante el auge inicial de internet, integrándose en equipos multidisciplinarios donde adquirió competencias directas en <strong>programación y desarrollo web</strong>.",
              "Esta experiencia inicial le otorgó una comprensión estructural de los sistemas de información desde sus bases operativas."
            ]
          },
          {
            title: "La movilidad regional en Sudamérica",
            paragraphs: [
              "Con el objetivo de ampliar su perspectiva profesional y asimilar las tendencias del mercado digital en el Cono Sur, residió y trabajó durante varios años en <strong>Colombia y Argentina</strong>. Durante su estancia en Argentina cursó estudios especializados en <strong>inteligencia artificial</strong> en la <strong>Universidad de Buenos Aires (UBA)</strong>.",
              "Esta decisión académica resultó altamente anticipatoria: mientras la IA se percibía como una disciplina predominantemente teórica o distante de la aplicación comercial masiva, García Contreras asimiló los fundamentos conceptuales de los sistemas cognitivos que hoy rigen los procesos de automatización y la economía del conocimiento. A su regreso a Chile, consolidó esta preparación técnica con una especialización de más de <strong>15 años en articulación de alianzas público-privadas y diseño de estrategias digitales de alcance nacional</strong>."
            ]
          },
          {
            title: "ACTI y la agenda digital del Estado chileno",
            paragraphs: [
              "Su vinculación formal con la ACTI se inició entre <strong>2015 y 2018</strong>, cuando ejerció como <strong>Directora de la organización</strong>, participando activamente en la formulación de las primeras agendas y estrategias de desarrollo digital del Estado chileno, promoviendo la adopción de estándares internacionales de conectividad y ciberseguridad."
            ]
          },
          {
            title: "Sé Santiago Smart City y la gestión urbana",
            paragraphs: [
              "Posteriomente asumió la <strong>gerencia general de Sé Santiago Smart City</strong>, un programa estratégico metropolitano cofinanciado por <strong>CORFO</strong>. Bajo su liderazgo, este programa funcionó como un laboratorio de articulación urbana donde se implementaron pilotos tecnológicos orientados a mejorar la <strong>movilidad, la seguridad ciudadana y la resiliencia climática</strong> de Santiago, a través del uso de sensores, análisis de datos masivos e <strong>internet de las cosas (IoT)</strong>.",
              "Su gestión en CORFO validó su capacidad para unificar los requerimientos de corporaciones multinacionales con las demandas de los municipios locales y las agencias gubernamentales."
            ]
          },
          {
            title: "Gerenta General de ACTI y la diplomacia tecnológica",
            paragraphs: [
              "En <strong>septiembre de 2023</strong>, la junta directiva de ACTI, encabezada por su presidente Francisco Guzmán, la designó <strong>Gerenta General de la asociación</strong>. Desde esta posición ejerce una representación activa del sector tecnológico ante los poderes del Estado, registrando audiencias oficiales bajo el marco de la <strong>Ley de Lobby</strong> con ministros, Subsecretarios y asesores de diversas carteras gubernamentales.",
              "Entre sus intervenciones normativas más destacadas se encuentra la coordinación con el <strong>Equipo de Respuesta ante Incidentes de Seguridad Informática (CSIRT)</strong> de la Coordinación Nacional de Ciberseguridad, promoviendo el establecimiento de protocolos estandarizados para que las empresas privadas de telecomunicaciones y software colaboren directamente en la defensa de la infraestructura crítica del Estado ante amenazas persistentes y ciberataques coordinados."
            ]
          },
          {
            title: "La Agenda 2026-2030 y las 4 barreras del ecosistema",
            paragraphs: [
              "Ha liderado la presentación de la <strong>\"Agenda 2026-2030: Innovación, Emprendimiento y Futuro\"</strong>, entregando formalmente a las autoridades del Ministerio de Ciencia un documento poscional compuesto por <strong>ocho ejes estratégicos</strong>. Su gestión se articula en torno a la superación de cuatro barreras estructurales que limitan el crecimiento de la economía digital en Chile y América Latina:",
              "<strong>1. Infraestructura e inversión:</strong> lentitud en permisos ambientales y normativos (\"permisología\") para data centers y proyectos de conectividad. Propuesta: desregulación con plazos ciertos para evitar la fuga de inversiones internacionales.",
              "<strong>2. Capital humano:</strong> brecha proyectada de más de <strong>100.000 profesionales calificados</strong> en tecnología. Propuesta: alianzas con la academia (Universidad Adolfo Ibáñez), propuesta del Centro Nacional de Capacitación Digital para inserción expedita de egresados.",
              "<strong>3. Equidad de género:</strong> baja representación femenina en directorios y áreas técnicas. Propuesta: participación en redes como <strong>Woman Geek Latam</strong>, fomento de liderazgos empáticos y colaborativos.",
              "<strong>4. Descentralización:</strong> concentración del desarrollo tech en el área metropolitana de Santiago. Propuesta: rediseño de los <strong>Tech Awards</strong> para premiar innovaciones aplicadas a sectores tradicionales en regiones —minería de precisión, agricultura, construcción, servicios—, digitalizando la cadena de valor completa del país."
            ]
          }
        ]
      },
      logros: [
        {
          year: '2023-presente',
          title: 'Gerenta General ACTI Chile',
          detail: 'Designada por la junta directiva en sep. 2023 para liderar el gremio tech más antiguo de Chile ante el Estado y los poderes públicos.'
        },
        {
          year: '2026-2030',
          title: 'Agenda de Innovación, Emprendimiento y Futuro',
          detail: 'Documento poscional de 8 ejes estratégicos entregado al Ministerio de Ciencia para transformar la economía digital chilena.'
        },
        {
          year: '2019-2023',
          title: 'Gerenta General — Sé Santiago Smart City (CORFO)',
          detail: 'Laboratorio urbano de articulación metropolitana: sensores, IoT, movilidad, seguridad y resiliencia climática para Santiago.'
        },
        {
          year: '2015-2018',
          title: 'Directora ACTI — Primeras agendas digitales del Estado',
          detail: 'Formulación de estándares internacionales de conectividad y ciberseguridad para la agenda digital del gobierno chileno.'
        },
        {
          year: '1997-1998',
          title: 'Del diseño editorial a la tecnología',
          detail: 'Giro estratégico de los medios impresos hacia plataformas digitales durante el primer auge de internet.'
        },
        {
          year: 'Argentina',
          title: 'Especialización en IA — Universidad de Buenos Aires',
          detail: 'Formación anticipatoria en sistemas cognitivos y automatización mientras la IA aún se percibía como disciplina teórica.'
        }
      ],
      formacion: [
        {
          institution: 'Universidad de Buenos Aires (UBA)',
          title: 'Especialización en Inteligencia Artificial',
          year: 'Durante residencia en Argentina'
        },
        {
          institution: 'Chile / Colombia / Argentina',
          title: 'Trayectoria regional en desarrollo digital',
          year: '1997-presente'
        }
      ],
      memberships: [
        { org: 'ACTI Chile — Gerenta General', role: '' },
        { org: 'Woman Geek Latam — Participante activa', role: '' },
        { org: 'CSIRT — Coordinación de ciberseguridad con el Estado', role: '' },
        { org: 'Ministerio de Ciencia — Mesas técnicas interministeriales', role: '' }
      ],
      aportacion: "Porque lleva la agenda digital de Chile desde el Estado al gremio y de vuelta al Estado — conoce las trincheras de ambas veredas. Si te interesa entender por qué Chile tiene talent tech pero tropieza en regulación, talento y desconcentración, esta conversación es clave."
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
      story: {
        intro: "Ingeniera Comercial y Magíster en Gestión y Políticas Públicas por la Universidad de Chile. De la gestión territorial en Fundación Integra (Antofagasta) a Especialista en Comunidades en Minera Escondida/BHP. Hoy es Directora de Asuntos Corporativos de BHP Chile, liderando la viabilidad social y regulatoria de Cerro Colorado. Llevó la participación femenina de Escondida del 7% al 40%.",
        sections: [
          {
            title: "Orígenes y formación",
            paragraphs: [
              "Es <strong>Ingeniera Comercial</strong> con una sólida base en gestión organizacional y administración pública. Para robustecer su desempeño en entornos regulatorios exigentes, cursó el <strong>Magíster en Gestión y Políticas Públicas (MGPP)</strong> en la Universidad de Chile, rindiendo su examen de grado el <strong>28 de diciembre de 2023</strong> en el Departamento de Ingeniería Industrial.",
              "Su formación avanzada le ha otorgado un instrumental analítico robusto para abordar la denominada \"permisología\", optimizando los procesos de aprobación ambiental mediante modelos de consulta indígena y comunitaria temprana."
            ]
          },
          {
            title: "Fundación Integra y la gestión territorial",
            paragraphs: [
              "Entre <strong>2012 y 2014</strong> se desempeñó como <strong>Directora Regional de la Fundación Integra</strong> en la Región de Antofagasta, asumiendo la representación legal e institucional de la Fundación de Desarrollo Integral del Menor ante los organismos públicos y de fiscalización del Estado.",
              "En este cargo administró el presupuesto regional de educación inicial, gestionó contratos de infraestructura educativa local y lideró programas innovadores de cobertura rural. Su principal hito fue el diseño territorial de la campaña de educación inicial móvil <strong>\"Jardín Sobre Ruedas\"</strong>, en alianza con la productora creativa <strong>Woki Toki</strong> y el patrocinio financiero de <strong>Banco Santander</strong>."
            ]
          },
          {
            title: "Minera Escondida y la transformación cultural",
            paragraphs: [
              "Su ingreso a la gran minería se produjo en <strong>Minera Escondida</strong> (operada por BHP) entre <strong>2015 y 2024</strong>, primero como <strong>Especialista en Comunidades</strong> y luego como <strong>Especialista en Asuntos Corporativos</strong>. Su gestión se orientó a alinear los objetivos de la compañía con las metas de desarrollo sostenible de la Región de Antofagasta, enfrentando la baja representatividad histórica de mujeres en la fuerza laboral minera.",
              "En <strong>2017</strong>, cuando BHP estableció la meta global de alcanzar el balance de género para 2025, la operación de Escondida presentaba apenas un <strong>7%</strong> de participación femenina —un reflejo de la exclusión estructural y los sesgos culturales históricos de la industria minera en Chile."
            ]
          },
          {
            title: "El programa \"Mineras\": del 7% al 40%",
            paragraphs: [
              "Cameron y su equipo diseñaron un <strong>modelo sistémico de transformación cultural</strong> estructurado en tres dimensiones interconectadas. <strong>Primero</strong>: la redefinición técnica del rol operativo —se reformularon los perfiles de reclutamiento eliminando la barrera de experiencia previa obligatoria y se introdujeron tecnologías de entrenamiento inmersivo como simuladores de realidad virtual, mixta y aumentada para la adquisición de competencias sin riesgo.",
              "<strong>Segundo</strong>: la creación de la <strong>\"Comunidad Mineras\"</strong> —un programa interno de retención, mentoría y acompañamiento para mitigar los impactos personales y familiares de los turnos rotativos tradicionales de <strong>7x7 días</strong> en faena. Esto incluyó el rediseño de la infraestructura física y la publicación del libro institucional <strong>\"Memorias de Mineras: relatos y logros en comunidad\"</strong>.",
              "<strong>Tercero</strong>: el foco en educación STEM temprana, mediante el programa <strong>\"STEM + Género\"</strong> en colaboración con la empresa de tecnología educativa <strong>Lab4U</strong>, dotando de herramientas experimentales de indagación científica a docentes de enseñanza media y impacting directly a <strong>+1.200 estudiantes</strong> en la Región de Antofagasta. El resultado: la participación femenina en Escondida pasó del <strong>7% en 2017 al 40% consolidado en 2024</strong>, superando los prejuicios tradicionales de la industria."
            ]
          },
          {
            title: "Directora de Asuntos Corporativos de BHP Chile",
            paragraphs: [
              "Desde <strong>2024</strong> es <strong>Directora de Asuntos Corporativos de BHP Chile</strong>, con responsabilidades directas sobre el posicionamiento estratégico de la compañía en las regiones de <strong>Tarapacá y Antofagasta</strong>, y el liderazgo de la viabilidad social y regulatoria de la faena <strong>Cerro Colorado</strong>.",
              "Su gestión se enfoca en la conducción de relaciones gubernamentales e institucionales de primer nivel, la facilitación de la consulta previa y el diseño de la estrategia social para la reapertura de Cerro Colorado —un proyecto que contempla la utilización exclusiva de agua de mar desalinizada, reconfigurando drásticamente el mapa de actores hacia el borde costero y las comunidades andinas."
            ]
          },
          {
            title: "Reconocimientos e impacto",
            paragraphs: [
              "Ha sido seleccionada en el cuadro de honor <strong>WIM 100</strong> de Women in Mining Chile, como una de las 100 mujeres líderes e inspiradoras de la industria nacional. También participa como socia de WIM Chile y mentora RIM.",
              "En el período 2025/2026, las operaciones combinadas de BHP en Chile —bajo su dirección en asuntos corporativos— superaron el <strong>48% de representación femenina global</strong>, posicionando a la compañía como referente internacional de diversidad y demostrando que la equidad de género dismilye la rotación voluntaria, improve la adaptabilidad de los equipos y robustece la toma de decisiones críticas en las operaciones."
            ]
          }
        ]
      },
      logros: [
        {
          year: '2025/2026',
          title: 'BHP Chile supera el 48% de participación femenina global',
          detail: 'Resultado consolidado bajo su dirección en Asuntos Corporativos, posicionando a BHP como referente internacional de diversidad.'
        },
        {
          year: '2024',
          title: 'Directora de Asuntos Corporativos BHP Chile',
          detail: 'Liderazgo institucional y regulatorio para Cerro Colorado, gestionando la viabilidad social de la reopening de la faena.'
        },
        {
          year: '2024',
          title: 'Escondida alcanza 40% de participación femenina',
          detail: 'Resultado del programa "Mineras": del 7% en 2017 al 40% consolidado, superando la meta corporativa global de BHP.'
        },
        {
          year: '2023',
          title: 'Magíster en Gestión y Políticas Públicas — U. de Chile',
          detail: 'Examen de grado rindido el 28 de diciembre de 2023 en el Departamento de Ingeniería Industrial.'
        },
        {
          year: '2017-2024',
          title: 'Programa "Mineras" — 1.200 estudiantes en STEM+Género',
          detail: 'Modelo sistémico de transformación cultural: reclutamiento inclusivo, Comunidad Mineras y programa STEM+Género con Lab4U.'
        },
        {
          year: '2012-2014',
          title: 'Directora Regional — Fundación Integra Antofagasta',
          detail: 'Gestión territorial de educación inicial; diseño de la campaña "Jardín Sobre Ruedas" en alianza con Banco Santander y Woki Toki.'
        }
      ],
      formacion: [
        {
          institution: 'Universidad de Chile',
          title: 'Ingeniería Comercial + Magíster en Gestión y Políticas Públicas',
          year: 'Graduación MGPP: dic. 2023'
        }
      ],
      memberships: [
        { org: 'Women in Mining Chile — Socia WIM', role: '' },
        { org: 'WIM 100 — Cuadro de Honor', role: '' },
        { org: 'RIM Chile — Mentora', role: '' },
        { org: 'LIQCAU — Embajadora', role: '' }
      ],
      aportacion: "Porque lidera inclusión en una de las mineras más grandes del mundo desde adentro —no desde el PowerPoint. Demostró con datos que llevar la participación femenina del 7% al 40% no solo es posible sino que reduce la rotación voluntaria, mejora la adaptabilidad de equipos y robustece la toma de decisiones. Si quieres ver cómo se mide de verdad la diversidad en la industria, escuchala."
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
      story: {
        intro: "Ingeniera Comercial de la Universidad Católica del Norte. MVP en banca PYME en Banco Santander (2002-2003). Traffic Area Manager en MSC USA (2005-2008), operando en Nueva York, Houston y Charleston. Desde 2018 es CEO de Hub APTA, donde ha transferido más de 60 tecnologías científicas chilenas al mercado. Premiada por Her Global Impact 2026.",
        sections: [
          {
            title: "Orígenes y formación",
            paragraphs: [
              "Originaria de Chile, estudió <strong>Ingeniería Comercial</strong> en la Universidad Católica del Norte (1996-2001), un programa de nivel licenciamiento/maestría que combina microeconomía, macroeconomía, administración de empresas y finanzas corporativas.",
              "Para profundizar en financiamiento e inclusión, cursó un <strong>Diplomado en Venture Capital</strong> en la Universidad Adolfo Ibáñez y un <strong>Diplomado en Economía de la Igualdad y Brechas de Género</strong> en la Universidad de Chile."
            ]
          },
          {
            title: "La banca y el tránsito a la innovación",
            paragraphs: [
              "Su carrera comenzó en el sector financiero tradicional. Entre <strong>2002 y 2003</strong> se desempeñó como <strong>Ejecutiva de Banca PYME</strong> en Banco Santander-Santiago, evaluando riesgo crediticio, viabilidad financiera y líneas de financiamiento para pequeñas y medianas empresas.",
              "Esa experiencia le dio una comprensión profunda de los mecanismos de asignación de capital y gestión del riesgo corporativo — competencias que luego resultaron críticas para diseñar modelos de valorización y comercialización de tecnologías científicas."
            ]
          },
          {
            title: "EE.UU. y el visado H-1B1",
            paragraphs: [
              "Entre <strong>2005 y 2008/2009</strong> migró a los Estados Unidos para trabajar en <strong>Mediterranean Shipping Company (MSC) USA, Inc.</strong> —una de las navieras más grandes del mundo— escalando posiciones hasta convertirse en <strong>Traffic Area Manager</strong>, operando en los tres hubs portuarios más importantes del país: <strong>Nueva York, Charleston (Carolina del Sur) y Houston (Texas)</strong>.",
              "Su visado fue un <strong>H-1B1</strong> —categoría exclusiva para profesionales chilenos bajo el Tratado de Libre Comercio Chile-EE.UU. (vigente desde enero 2004)— que evita el sorteo de la lotería H-1B estándar. Regresó a Chile a finales de 2008, coincidando con el estallido de la crisis financiera global de las hipotecas subprime."
            ]
          },
          {
            title: "El regreso y la transferencia tecnológica",
            paragraphs: [
              "De vuelta en Chile, identificó un vacío sistémico: la vinculación entre la ciencia de los laboratorios universitarios y las necesidades de la industria productiva era prácticamente nula. Se incorporó a <strong>Laboratorios Andrómaco</strong> para liderar su división de innovación.",
              "En <strong>2011</strong> diseñó e implementó el programa <strong>\"Farma Innova\"</strong>, una iniciativa altamente disruptiva para la industria local, logrando levantar y adjudicar hasta <strong>USD 2 millones</strong> para financiar la maduración y empaquetamiento comercial de tecnologías biomédicas de origen académico chileno.",
              "Este éxito la llevó a la <strong>Universidad de Chile</strong>, donde assumió como <strong>Jefa de la Unidad de Negocios</strong> de la Dirección de Innovación (VID). Ahí estructuró formalmente el área de transferencia tecnológica y negoció el hito más importante de su carrera: el licenciamiento de la tecnología \"electrofarma\" —electrotransmisores implantables para tratar el síndrome de ovario poliquístico— desarrollada por el químico chileno <strong>Hernán Lara</strong>, a <strong>Verylife</strong> (compañía vinculada a Google y Claxon). Este acuerdo marcó un precedente para la ciencia aplicada chilena a nivel internacional.",
              "Luego coordinó la iniciativa <strong>KNOW HUB Chile</strong>, un consorcio universitario orientado a la transferencia tecnológica financiado por CORFO."
            ]
          },
          {
            title: "CEO de Hub APTA — más de 60 tecnologías transferidas",
            paragraphs: [
              "Desde <strong>2018</strong> es <strong>CEO y Directora Ejecutiva de Hub APTA</strong> (Andes Pacific Technology Access), una corporación de transferencia tecnológica cofinanciada por CORFO que integra <strong>10 universidades socias y más de 17 instituciones asociadas</strong>, centros de investigación y empresas del sector productivo.",
              "Bajo su liderazgo, Hub APTA ha estructurado e implementado estrategias comerciales exitosas que han permitido la transferencia de <strong>más de 60 tecnologías científicas chilenas</strong> a mercados nacionales e internacionales, impulsando la productividad y diversificación económica del país. En 2025 lanzó la hoja de ruta estratégica <strong>\"Efecto APTA\" (2025-2027)</strong>, orientanda a fortalecer la articulación trilateral entre academia, industrias privadas y sector público, con programas como <strong>\"APTA Builder\"</strong> (creación de EBCTs) y <strong>\"APTA Woman Power\"</strong> (innovación liderada por científicas)."
            ]
          },
          {
            title: "Gobernanza, políticas públicas e impacto global",
            paragraphs: [
              "Su gestión en Hub APTA se complementa con una participación activa en directórios, mesas de políticas públicas y organismos internacionales: es <strong>Presidenta del Consejo de Sociedad Civil del INAPI</strong>, donde asesora en políticas de patentes y estrategias de fomento a la INVENTION nacional.",
              "Cofundadora y <strong>Presidenta de la Asociación de Directoras de Empresas de Base Científico-Tecnológica \"Women Board Up\"</strong> —pionera en América Latina en capacitar e incorporar mujeres profesionales en juntas directivas de startups científicas para mejorar su gobernanza corporativa.",
              "Integra la <strong>Mesa de Políticas Públicas de Inteligencia Artificial del Senado de Chile</strong>, diseñando marcos éticos y regulatorios para la adopción tecnológica del país. A nivel global, es miembro del comité asesor de <strong>Latam-GPT</strong>, impulsando la soberanía lingüística y la repatriación segura de patrimonios culturales indígenas mediante IA ética.",
              "En <strong>2026</strong> asumió como <strong>Directora del Concurso de Innovación y Startups Madera21</strong> de la Corporación Chilena de la Madera (CORMA), acelerando la sustentabilidad forestal y el desarrollo del sector cacaotero sostenible en la región andina. También es miembro del consejo estratégico de <strong>Village Capital</strong> (EE.UU.), fondo de inversión de impacto social, y Evaluadora Experta del <strong>Premio Nacional a la Innovación (AVONNI)</strong>."
            ]
          }
        ]
      },
      logros: [
        {
          year: '2026',
          title: 'Premio Her Global Impact — Catalizadora de Impacto en Ciencia y Tecnología',
          detail: 'Reconocimiento internacional entregado por la organización Her Global Impact en la categoría de mayor impacto en transferencia tecnológica.'
        },
        {
          year: '2026',
          title: 'Directora Madera21 / CORMA',
          detail: 'Nombramiento como Directora del Concurso de Innovación y Startups Madera21, acelerando sustentabilidad forestal y sector cacaotero andino.'
        },
        {
          year: '2025',
          title: 'Hoja de ruta "Efecto APTA" 2025-2027',
          detail: ' roadmap estratégico para fortalecer la articulación academia-industria-estado con programas APTA Builder y APTA Woman Power.'
        },
        {
          year: '2018',
          title: 'CEO de Hub APTA',
          detail: 'Liderazgo de la corporación de transferencia tecnológica más grande de Chile: 10 universidades, 17 instituciones, 60+ tecnologías transferidas.'
        },
        {
          year: '2013-2017',
          title: 'Acuerdo "electrofarma" con Verylife (Google/Claxon)',
          detail: 'Negociación y licenciamiento de tecnología de electrotransmisores implantables del químico Hernán Lara a Verylife — precedente internacional para la ciencia chilena.'
        },
        {
          year: '2011',
          title: 'Programa Farma Innova — USD 2 millones',
          detail: 'Creación e implementación del programa en Laboratorios Andrómaco para financiar la maduración de tecnologías biomédicas académicas.'
        }
      ],
      formacion: [
        {
          institution: 'Universidad Católica del Norte',
          title: 'Ingeniería Comercial',
          year: '~2001'
        },
        {
          institution: 'Universidad Adolfo Ibáñez',
          title: 'Diplomado en Venture Capital',
          year: 'Post-2015'
        },
        {
          institution: 'Universidad de Chile',
          title: 'Diplomado en Economía de la Igualdad y Brechas de Género',
          year: 'Post-2010'
        }
      ],
      memberships: [
        { org: 'INAPI — Presidenta del Consejo de Sociedad Civil', role: '' },
        { org: 'Women Board Up — Cofundadora y Presidenta', role: '' },
        { org: 'Mesa de Políticas Públicas de IA — Senado de Chile', role: '' },
        { org: 'Village Capital — Miembro del Consejo Estratégico', role: '' },
        { org: 'LANEK — Miembro del Directorio', role: '' },
        { org: 'EIVA Valparaíso — Miembro del Consejo Consultivo', role: '' },
        { org: 'Latam-GPT — Miembro del Comité Asesor', role: '' }
      ],
      aportacion: "Porque demuestra que Chile puede generar negocios de base científico-tecnológica de clase mundial si se elimina la burocracia entre academia, Estado e industria. Su trayectoria —banca, logística global, transferencia tecnológica, gobernanza— es un caso de estudio sobre cómo la experiencia跨国acional se convierte en palanca para construir ecosistemas de innovación sostenibles."
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
      teaserVideo: 'videos/camila-vimeo-final.mp4',
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
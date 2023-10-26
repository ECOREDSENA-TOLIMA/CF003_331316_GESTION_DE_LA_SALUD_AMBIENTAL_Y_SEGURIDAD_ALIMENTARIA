export default {
  global: {
    componenteFormativo: 'Acciones de mejora en los servicios de salud',
    descripcionCurso:
      'La ley 1122 del 2007, transforma el Sistema General de Seguridad Social en Salud e impone normas para el mejoramiento en la prestación del servicio a los usuarios, involucrando a la dirección y los actores participantes, así como la racionalización de la prestación, fortaleciendo los programas de salud pública y las funciones de inspección, vigilancia y control de dicha organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Prestación del servicio de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios de política en la prestación del servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Planes de mejoramiento en la prestación de servicios de salud',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Presentación de informes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Reporte oportuno de eventos adversos según sistema de notificación establecido',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Mecanismos y estrategias de medición en la prestación de los servicios de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificar tipos de usuarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Verificar necesidades del usuario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Valorar grado de satisfacción del usuario',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Socializar los resultados generados del grado de satisfacción de las personas',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Principios de política en la prestación del servicio',
      referencia:
        'Ministerio de Salud y Protección Social. Ley Número 1122 de 2007.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf',
    },
    {
      tema: '1.2 Planes de mejoramiento en la prestación de servicios de salud',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Plan Nacional de Mejoramiento de la Calidad en Salud (PNMCS) Plan Estratégico 2016-2021. ',
      tipo: 'Cuadernillo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/Plan-nacional-de-mejoramiento-calidad.pdf',
    },
    {
      tema: '1.2 Planes de mejoramiento en la prestación de servicios de salud',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de atención integral en salud “Un sistema de salud al servicio de la gente” 2016. ',
      tipo: 'Cuadernillo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      tema:
        '2. Mecanismos y estrategias de medición en la prestación de los servicios de salud',
      referencia:
        'Intendencia de Prestadores de Salud Unidad Técnica Asesora. (2011). Sistemas de vigilancia y notificación de Eventos Adversos.',
      tipo: 'Cuadernillo',
      link:
        'https://www.supersalud.gob.cl/observatorio/671/articles-6921_recurso_1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Es la posibilidad que tiene el usuario de utilizar los servicios de salud que le garantiza el Sistema General de Seguridad Social en Salud. ',
    },
    {
      termino: 'Atención en salud',
      significado:
        'Describe el conjunto de servicios que se prestan al usuario en el marco de los procesos propios del aseguramiento, así como de las actividades, procedimientos e intervenciones asistenciales en las fases de promoción y prevención, diagnóstico, tratamiento y rehabilitación que se prestan a toda la población. ',
    },
    {
      termino: 'Aseguramiento del riesgo en salud',
      significado:
        'Es la aplicación de la técnica de seguros a la provisión de actividades donde se realice una concientización de la responsabilidad que tiene el individuo sobre los estilos de vida, para que estos sean modificados y así tener menos probabilidades de enfermarse y de tener secuelas de esas patologías, además de los servicios asistenciales sanitarios, con las características para el afiliado descritas anteriormente, en un marco de administración del riesgo epidemiológico con la intención de garantizar tanto la generación de salud a la población afiliada como la contención de actividades costo-efectivas. ',
    },
    {
      termino: 'Calidad de la atención de salud',
      significado:
        'Se concibe como la provisión de servicios de salud a los usuarios individuales y colectivos de manera accesible y equitativa, a través de un nivel profesional óptimo, teniendo en cuenta el balance entre beneficios, riesgos y costos, con el propósito de lograr la adhesión y satisfacción de dichos usuarios.',
    },
    {
      termino: 'Continuidad',
      significado:
        'Es el grado en el cual los usuarios reciben las intervenciones requeridas, mediante una secuencia lógica y racional de actividades, basada en el conocimiento científico. ',
    },
    {
      termino: 'Enfermedad',
      significado:
        'La OMS define enfermedad como la alteración de cualquier orden biopsicosocial, que represente sufrimiento al individuo. ',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Es la posibilidad que tiene el usuario de obtener los servicios que requiere, sin que se presenten retrasos que pongan en riesgo su vida o su salud. Esta característica se relaciona con la organización de la oferta de servicios en relación con la demanda y con el nivel de coordinación institucional para gestionar el acceso a los servicios. ',
    },
    {
      termino: 'Prestadores de servicios de salud',
      significado:
        'Son las Instituciones Prestadoras de Servicios de Salud, los Profesionales Independientes de Salud y los Servicios de Transporte Especial de Pacientes. Para los efectos del presente documento se consideran como instituciones prestadoras de servicios de salud a los grupos de práctica profesional que cuentan con infraestructura física para prestar servicios de salud. ',
    },
    {
      termino: 'Riesgo en salud',
      significado:
        'Se define como la probabilidad de un resultado adverso, o un factor que aumenta esa probabilidad. Para proteger a la población y ayudarla a protegerse a sí misma, los gobiernos necesitan poder evaluar los riesgos y elegir las intervenciones más costo efectivas y accesibles para evitar que se produzcan esos riesgos. ',
    },
    {
      termino: 'Salud',
      significado:
        'Estado dinámico de bienestar físico, mental y sociocultural que permite a las personas ser capaces de identificar y realizar la satisfacción de sus necesidades y de modificar o adaptarse al ambiente, y no únicamente la ausencia de enfermedad. ',
    },
    {
      termino: 'Seguridad',
      significado:
        'Es el conjunto de elementos estructurales, procesos, instrumentos y metodologías basadas en evidencias científicamente probadas que propenden por minimizar el riesgo de sufrir un evento adverso en el proceso de atención de salud o de mitigar sus consecuencias. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Echemendía Tocabens Belkis. (2011) Definiciones acerca del riesgo y sus implicaciones. Revista Cubana de Higiene y Epidemiología, 49, 3, 470481. ',
      link: 'https://www.redalyc.org/pdf/2232/223221363013.pdf',
    },
    {
      referencia:
        'Estrada Estrada, A. (2011). Lineamientos sectoriales construcción política integral - salud ambiental para todos. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/lineamientos-sectoriales-construccion-politica-integral-salud-ambiental-para-todos-.pdf',
    },
    {
      referencia:
        'Gómez Arias, R. D. (2018). ¿Qué se ha entendido por salud y enfermedad?  ',
      link:
        'https://revistas.udea.edu.co/index.php/fnsp/article/view/335873/20791472',
    },
    {
      referencia:
        'Ministerio de Salud y Protección social. (2005). Política Nacional de Prestación de Servicios de Salud. ',
      link:
        'https://www.minsalud.gov.co/Ministerio/Documents/Politica%20Nacional%20de%20Prestaci%C3%B3n%20de%20Servicios%20de%20Salud.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Caracterización Registro Especial de Prestadores de Servicios de Salud (REPS)-IPS. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PES/caracterizacion-registro-especial-prestadores-reps.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Plan Decenal de Salud Pública PDSP, 2012-2021. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Decreto 780 de 2016. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Gestión integral del riesgo en salud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/girs-prespectiva-desde-aseguramiento.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Prestación de servicios. ',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/Prestacion-servicios-home.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Salud ambiental. ',
      link:
        'https://www.minsalud.gov.co/salud/publica/ambiental/Paginas/Salud-ambiental.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Decreto 2309 de 2002. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-2309-de-2002.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Decreto 1011 de 2006. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud OMS. (s.f.). Calidad de la atención. ',
      link: 'https://www.who.int/es/health-topics/quality-of-care#tab=tab_1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

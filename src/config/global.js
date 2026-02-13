export default {
  global: {
    Name: 'Acciones y estrategias de eficiencia energética',
    Description:
      'La gestión energética permite optimizar sistemas de fuerza motriz, iluminación y climatización mediante estrategias de intervención técnica. A través de fundamentos de auditoría, se establecen líneas base para identificar ahorros y desarrollar propuestas de valor sostenibles. Estas acciones se validan mediante análisis de viabilidad financiera (VAN y TIR) y protocolos de seguimiento, garantizando proyectos rentables que reducen el impacto ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Fundamentos de la auditoría y gestión',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de intervención por uso final',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Viabilidad, seguimiento y propuesta de valor',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Fundamentos de la auditoría y gestión',
      referencia:
        'Fornieles, F. (2016). Estrategia del puzzle para auditorías energéticas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jGzD42pFr-c',
    },
    {
      tema: 'Estrategias de intervención por uso final',
      referencia: 'Rubiato, D. (2017). VAN y TIR.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CHBwf0Vvvp4',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría energética',
      significado:
        'Examen sistemático de las instalaciones y el consumo de energía de una entidad para identificar oportunidades de mejora, ahorro de costos y reducción de impacto ambiental.',
    },
    {
      termino: 'Línea base',
      significado:
        'Perfil de consumo energético histórico de referencia, ajustado por variables operacionales y climáticas (normalizado), que se utiliza para cuantificar el ahorro después de una intervención.',
    },
    {
      termino: 'Variador de frecuencia',
      significado:
        'Dispositivo electrónico que permite variar la velocidad de rotación de un motor eléctrico controlando la frecuencia y tensión de la energía suministrada. Es una acción de eficiencia energética que genera ahorros significativos.',
    },
    {
      termino: 'Gestión de la demanda',
      significado:
        'Estrategia coordinada para influir en el perfil de consumo del usuario final, buscando trasladar la carga de las horas pico (caras) a las horas valle (baratas).',
    },
    {
      termino: 'Periodo de recuperación',
      significado:
        'Indicador financiero que mide el tiempo, generalmente en años, necesario para que los ahorros de costos acumulados igualen la inversión inicial del proyecto.',
    },
    {
      termino: 'Valor actual neto',
      significado:
        'Indicador financiero que calcula la riqueza neta generada por un proyecto, descontando todos los flujos de caja futuros a su valor presente. Un VAN positivo indica rentabilidad.',
    },
    {
      termino: 'Tasa interna de retorno',
      significado:
        'Indicador financiero que expresa la rentabilidad de un proyecto como un porcentaje. Es la tasa de descuento que hace que el VAN sea igual a cero. Se acepta el proyecto si la TIR es mayor que la TMAR.',
    },
    {
      termino: 'Medición y verificación',
      significado:
        'Conjunto de prácticas y procedimientos para cuantificar y certificar los ahorros reales logrados por una Medida de Ahorro Energético (MAE).',
    },
    {
      termino: 'Protocolo IPMVP',
      significado:
        'Estándar internacional para la medición y verificación que establece métodos rigurosos y transparentes para el cálculo, la medicición y el reporte de los ahorros de energía.',
    },
    {
      termino: 'Reglamento técnico de etiquetado',
      significado:
        'Reglamento colombiano que exige a los comercializadores incluir la Etiqueta de Eficiencia Energética en ciertos productos de consumo, indicando su desempeño y clasificación (A, B, C).',
    },
    {
      termino: 'Límite mínimo de eficiencia energética',
      significado:
        'Estándares mínimos de eficiencia que un equipo debe cumplir obligatoriamente para poder ser comercializado en Colombia, de acuerdo con el RETIQ.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión de Regulación de Energía y Gas. (2020). Estructura tarifaria del servicio de energía eléctrica (Resolución CREG 015 de 2018 y sus modificaciones).',
      link:
        'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0015_2018.htm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones. Diario Oficial No. 51.738.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166326',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Plan Nacional de Desarrollo 2022–2026: Colombia potencia mundial de la vida (capítulo sobre transición energética).',
      link: 'https://www.dnp.gov.co/plan-nacional-desarrollo/pnd-2022-2026',
    },
    {
      referencia:
        'Díaz, D. (2021). Gestión de la demanda (DSM) y su influencia en la economía. LinkedIn.',
      link:
        'https://www.linkedin.com/pulse/gesti%C3%B3n-de-la-demanda-dsm-y-su-influencia-en-econom%C3%ADa-david/',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Towards a circular economy: A business case for energy efficiency.',
      link:
        'https://content.ellenmacarthurfoundation.org/m/4384c08da576329c/original/Towards-a-circular-economy-Business-rationale-for-an-accelerated-transition.pdf',
    },
    {
      referencia: 'Habitissimo. (2025). Cambio de iluminación [Fotografía].',
      link: 'https://fotos.habitissimo.cl/foto/cambio-de-iluminacion_503527',
    },
    {
      referencia: 'IPS Ingenieros. (2020). Aislamiento térmico.',
      link: 'https://ipsingenieros.com/2020/05/26/aislamiento-termico/',
    },
    {
      referencia:
        'LUP Motors. (2024). The difference between IE1, IE2, IE3, and IE4 motors.',
      link:
        'https://lupmotors.com/the-difference-between-ie1-ie2-ie3-ie4-motors/',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2016, 1 de junio). Respuesta a comentarios del proyecto de modificación del RETIQ.',
      link:
        'https://www.minenergia.gov.co/documents/3875/Respuesta_a_comentarios_2016_proyecto__Mod__RETIQ_01-06-2016.pdf',
    },
    {
      referencia:
        'Motores Eléctricos. (2025). Variador de frecuencia SINAMICS V20 Siemens.',
      link:
        'https://motores-electricos.com.ar/variadores-de-frecuencia/variador-frecuencia-sinamics-v20-siemens/',
    },
    {
      referencia:
        'Naciones Unidas. (1987). Informe de la Comisión Mundial sobre Medio Ambiente y Desarrollo: Nuestro futuro común (Informe Brundtland). Asamblea General de las Naciones Unidas.',
      link:
        'https://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Oikonomou, V. A., Gielen, D. J., & Rübbelke, D. (2020). Energy efficiency and the three pillars of sustainable development: A concise review. Energy Policy, 137(1), 111100.',
      link: 'https://doi.org/10.1016/j.enpol.2019.111100',
    },
    {
      referencia:
        'Rincón, J. M., & Rincón, A. E. (2021). Análisis de ciclo de vida (ACV) como herramienta para la evaluación de sostenibilidad de proyectos energéticos. Revista de la Escuela Colombiana de Ingeniería, 120(2), 54–67.',
      link:
        'https://www.raco.cat/index.php/afinidad/article/download/276501/364433',
    },
    {
      referencia:
        'Sin Ce O Dos. (2018). La línea base y su importancia en la ISO 50001.',
      link:
        'https://www.sinceo2.com/la-linea-base-y-su-importancia-en-la-iso-50001/',
    },
    {
      referencia:
        'WEG. (2025). Banco de condensadores trifásico con protección BCWP.',
      link:
        'https://www.weg.net/catalog/weg/BR/es/Automatizaci%C3%B3n-Industrial/Controls/Capacitores-y-Correcci%C3%B3n-del-Factor-de-Potencia/Condensadores-para-Correcci%C3%B3n-del-Factor-de-Potencia/Banco-de-Condensadores-Trif%C3%A1sico-con-Protecci%C3%B3n-BCW/Banco-de-Condensadores-Trif%C3%A1sicos-con-Protecci%C3%B3n-BCWP/p/MKT_WDC_BRAZIL_THREE-PHASE_CAPACITOR_BANK_WITH_PROTECTION_BCWP',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto Temático Electricidad',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}

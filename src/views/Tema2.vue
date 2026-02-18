<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de intervención por uso final


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema2/1.svg', alt='')
      .col-lg-11
        p.mb-0 La clave de una propuesta de EE exitosa es dirigir las acciones a los sistemas que consumen la mayor parte de la energía, aplicando el principio 80 / 20 (el 20 % de los equipos genera el 80 % del consumo). Las estrategias se agrupan por el uso final de la energía, que es donde se encuentran las mayores oportunidades de ahorro.

    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Oportunidades de EE en sistemas comunes


    p.mb-5 Fuerza motriz (motores, bombas y compresores): Los sistemas que utilizan motores eléctricos (como bombas, compresores, ventiladores y cintas transportadoras) suelen representar la mayor parte del consumo industrial.


    TabsC.color-primario.mb-5(data-aos="fade-left")
      .bg3.p-5(titulo="Motores de alta eficiencia")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-6
                ul.lista-ul.mb-0
                  li.d-flex.mb-4
                    i.fas.fa-angle-right
                    p.mb-0 #[b Acción:] reemplazo de motores estándar por motores clasificados como #[b IE3] #[em (Premium Efficiency)] o #[b IE4] #[em (Super Premium Efficiency)], según la normativa IEC.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Beneficio:] reducen las pérdidas internas de energía (calor) y mantienen una alta eficiencia incluso con carga variable.
              .col-lg-6
                .titulo-sexto.mb-4
                  h5 Figura 6. 
                  | #[em Curva de eficiencia de motores]
                img.mb-3(src='@/assets/curso/tema2/2.png', alt='Gráfico que muestra la eficiencia energética de motores eléctricos en función de la potencia de salida, comparando las clases de eficiencia IE1 a IE5, donde se observa un aumento de la eficiencia a mayor potencia y en niveles superiores de clasificación')
                figcaption #[b Fuente:] LUP Motors (2024)
      .bg3.p-5(titulo="Control de velocidad ")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-6
                h4.mb-4 Control de velocidad (Variadores de Frecuencia - VFD)
                ul.lista-ul.mb-0
                  li.d-flex.mb-4
                    i.fas.fa-angle-right
                    p.mb-0 #[b Acción:] instalación de #[b Variadores de Frecuencia (VFD)] para controlar la velocidad del motor según la necesidad real del proceso, en lugar de operarlo siempre a plena capacidad.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Beneficio clave:] el consumo de potencia en bombas y ventiladores se relaciona con el cubo de la velocidad. Por lo tanto, una pequeña reducción en la velocidad genera un ahorro de energía exponencialmente mayor.
              .col-lg-6
                .titulo-sexto.mb-4
                  h5 Figura 7. 
                  | #[em Variador de frecuencia]
                img.mb-3(src='@/assets/curso/tema2/3.png', alt='Variador de frecuencia industrial utilizado para el control de velocidad y eficiencia energética de motores eléctricos.')
                figcaption #[b Fuente:] Motores Eléctricos (2025)
      .bg3.p-5(titulo="Corrección del factor de potencia")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-6
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Acción:] instalación de bancos de condensadores para compensar la energía reactiva (kVArh) y evitar las penalizaciones económicas de la factura.
              .col-lg-6
                .titulo-sexto.mb-4
                  h5 Figura 8. 
                  | #[em Banco de condensadores]
                img.mb-3(src='@/assets/curso/tema2/4.png', alt='Banco de condensadores para corrección del factor de potencia, compuesto por capacitores, contactores y sistema de control montados en un gabinete eléctrico.')
                figcaption #[b Fuente:] WEG (2025)


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Iluminación


    p.mb-5 La iluminación es una fuente sencilla de EE por su rápida amortización.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-start.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Sustitución tecnológica
                ul.lista-ul.mb-0
                  li.d-flex.mb-4
                    i.fas.fa-angle-right
                    p.mb-0 #[b Acción:] migración total de tecnologías antiguas (fluorescentes, halógenas, vapor de sodio) a #[b tecnología LED] de alta eficiencia y larga vida útil.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Beneficio:] una reducción directa del consumo de hasta el 50 - 70 % respecto a la tecnología convencional.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema2/5.png")
            .row.justify-content-center.align-items-start.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Sistemas de control inteligente
                ul.lista-ul.mb-0
                  li.d-flex.mb-4
                    i.fas.fa-angle-right
                    p.mb-0 #[b Acción:] implementación de sensores de presencia / movimiento (en zonas de poco tráfico) y sensores de luz natural (que atenúan la luz artificial cuando hay suficiente luz solar).
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Gestión de la Demanda (GDE):] uso de temporizadores y horarios para apagar luces en horas no operativas.
              .col-lg-5.col-md-8.col-10
                .titulo-sexto.mb-4
                  h5 Figura 9. 
                  | #[em Cambio de iluminación]
                img.mb-0(alt="Persona realizando mantenimiento o reemplazo de una luminaria en el techo, como parte de actividades de mejora en sistemas de iluminación." src="@/assets/curso/tema2/6.png")


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Climatización y HVAC (calefacción, ventilación y aire acondicionado)

    
    p.mb-5 Los sistemas de HVAC son críticos en edificios y procesos con requerimientos de temperatura o calidad del aire.


    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Optimización de equipos")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Acción:] reemplazo de unidades antiguas por equipos con alto SEER #[em (Seasonal Energy Efficiency Ratio)] o EER #[em (Energy Efficiency Ratio)].
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Mantenimiento:] limpieza regular y calibración de termostatos para asegurar su operación óptima.
          .row.align-items-center(titulo="Aislamiento y envolvente")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Acción:] mejorar el aislamiento térmico de techos, paredes y ventanas para reducir las ganancias o pérdidas de calor.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Beneficio:] se reduce la carga térmica, disminuyendo las horas de operación de los equipos de aire acondicionado y el consumo de energía asociado.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/7.png', alt='')


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Optimización de procesos térmicos


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema2/8.svg', alt='')
      .col-lg-10
        .bg4.p-4
          p.mb-0.mb-lg-1.mt-lg-2 #[b Aislamiento:] aislamiento de tuberías y calderas (ejemplo: detección con cámaras termográficas).
      .col-lg-1
        img(src='@/assets/curso/tema2/9.svg', alt='')

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
          .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
            .subtitulo
          .col.ps-lg-0
            .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
              h4.mb-0 Recuperación de calor
        .bg5.p-5.mb-4
          p.mb-0 captura y reutilización del calor residual (vapor, gases) que normalmente se desecha, para precalentar agua u otros fluidos.
        img.img-t.img-d(src='@/assets/curso/tema2/10.svg', alt='')
      .col-lg-5
        .titulo-sexto.mb-4
          h5 Figura 10. 
          | #[em Aislamiento térmico]
        img(src='@/assets/curso/tema2/11.png', alt='Técnico realizando mantenimiento e instalación de ductos de climatización con aislamiento térmico en un sistema HVAC.')


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Gestión de la demanda (GDE)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg5.p-5.mb-4
          p.mb-0 la GDE son acciones orientadas a cambiar el perfil de consumo del usuario, trasladando la carga de las horas pico (donde la energía es más cara) a las horas valle.
        img.img-t.img-d(src='@/assets/curso/tema2/13.svg', alt='')
      .col-lg-5
        img(src='@/assets/curso/tema2/12.png', alt='')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Acciones clave

    
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/14.svg')
          h3.mb-4.text-center Desplazamiento de carga
          p.mb-0 Programar procesos no esenciales (ejemplo: carga de baterías, arranque de compresores) para las horas de menor costo.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/15.svg')
          h3.mb-4.text-center.text-white Almacenamiento térmico o eléctrico
          p.mb-lg-4.text-white Usar la electricidad barata de la noche para crear frío / calor (almacenamiento térmico) o cargar baterías (almacenamiento eléctrico) que luego se utiliza en las horas pico.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/16.png', alt='')
      .col-lg-7
        .bg4.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-
            .col-lg-2
              img.img-t.img-a(src='@/assets/curso/tema2/15.svg')
            .col-lg-10
              p.mb-0 La Gestión de la Demanda (GDE), también conocida como #[em Demand Side Management (DSM)], es una estrategia planificada y coordinada por la empresa eléctrica (o el propio usuario industrial) para influir en el perfil de consumo eléctrico del usuario final.
        p.mb-0 A diferencia de la Eficiencia Energética (EE), que se enfoca en usar menos energía en general, la GDE se enfoca en cambiar el cuándo se usa la energía, buscando los siguientes objetivos:


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Reducción de picos
          p.mb-2.text-center Disminuir el consumo en las horas de máxima demanda del sistema eléctrico (horas pico, típicamente en la mañana o la tarde), donde la energía es más cara y el sistema está más tensionado.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Aplanamiento de la curva de carga
          p.mb-2.text-center Trasladar la carga energética de las horas pico a las horas valle (madrugada o fines de semana), cuando el costo es menor y la capacidad de la red es holgada.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Mejora de la resiliencia
          p.mb-2.text-center Reducir la dependencia de la red en momentos críticos, fortaleciendo la seguridad del suministro.

    
    p.mb-5 El diagrama adjunto ilustra cómo la GDE es un enfoque más activo y bidireccional que la simple respuesta a la demanda.


    .row.fondo3.p-4.p-lg-4.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-4
            .titulo-sexto.mb-4
              h5 Figura 11. 
              | #[em Gestión de la demanda]
            img.mb-4(src='@/assets/curso/tema2/20.svg', alt='Diagrama comparativo entre Respuesta a la Demanda (DR) y Gestión de la Demanda (DSM) en redes eléctricas, mostrando su interacción con los usuarios finales y las Smart Grids.')
            figcaption #[b Fuente:] Díaz, D (2021)


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Caso práctico: desplazamiento de carga en una planta de producción de frío


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg10.p-lg-5.p-4.mb-0
          .bg9.p-2.mb-4
            h4.mb-0.text-white.ps-3.pe-3 Contexto del caso
          p.mb-1 Una gran planta de procesamiento de alimentos opera un sistema de refrigeración industrial masivo que utiliza compresores y #[em chillers], que representan el 60 % de su demanda eléctrica total. La empresa enfrenta altos costos en su factura debido a la energía consumida durante las horas pico (17:00 a 20:00), que tienen las tarifas más altas.
      .col-lg-6
        img.mb-0(src='@/assets/curso/tema2/21.svg' alt='AvatarTop')
        

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 La estrategia de gestión de la demanda aplicada


    p.mb-5 La planta implementa una estrategia de desplazamiento de carga utilizando el sistema de almacenamiento inherente al frío.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Tecnología clave")
            .col-lg-12
              p.mb-4 Se maximiza el uso de la capacidad de almacenamiento térmico de la planta (la inercia térmica de las cámaras frigoríficas y los grandes tanques de fluido refrigerante).
              img.mb-0(src='@/assets/curso/tema2/22.png' alt='AvatarTop')

          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Acción GDE")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Horas valle (23:00 a 06:00):] la planta programa los compresores para trabajar a su máxima capacidad, “sobre enfriando” las cámaras y acumulando el frío necesario a un costo tarifario bajo.
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Horas pico (17:00 a 20:00):] los compresores principales son desconectados o reducidos drásticamente (mediante VFD) durante este periodo crítico. La planta mantiene la temperatura de operación crítica utilizando únicamente el frío acumulado durante la noche (la inercia térmica). 
              img.mb-0(src='@/assets/curso/tema2/23.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | #[em Ejemplo gestión de la demanda]
        .tabla-a.tab1
          table
            thead
              tr
                th Indicador
                th Antes de la GDE
                th Después de la GDE
                th Beneficio
            tbody
              tr
                td.gr #[b Demanda en hora pico]
                td.gr Alta (costo máximo).
                td.gr Baja.
                td.gr Reducción del 25 % en costos de energía por tarifa.
              tr
                td #[b Consumo total de energía]
                td Sin cambios significativos.
                td Sin cambios significativos.
                td La GDE no reduce el consumo total (kWh), sino el costo total (COP) al mover el consumo.
              tr
                td.gr #[b Resiliencia]
                td.gr Baja.
                td.gr Alta.
                td.gr Menor riesgo de paradas en picos de demanda del sistema.

    
    p.mb-5 Este ejemplo demuestra que la GDE es una poderosa herramienta financiera que, sin necesariamente reducir la cantidad total de energía utilizada, logra una reducción significativa de los costos operativos al aprovechar las estructuras tarifarias horarias.


    .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/24.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        h4.mb-5 Criterios normativos para la selección de equipos eléctricos (RETIQ)
        br
        br
        p.mb-0 La Eficiencia Energética (EE) en Colombia no es solo una opción de ahorro, sino una obligación legal al momento de adquirir o comercializar ciertos equipos. Para garantizar la entrada al mercado solo de productos que cumplen con estándares mínimos de rendimiento, el Ministerio de Minas y Energía ha establecido el Reglamento Técnico de Etiquetado (RETIQ).


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Reglamento Técnico de Etiquetado (RETIQ)


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 El RETIQ es el reglamento técnico colombiano que exige a los productores, importadores y comercializadores la inclusión de la etiqueta de eficiencia energética en productos de uso final que impactan significativamente el consumo energético nacional.
        .bg1.p-4(data-aos="fade-left")
          .row.justify-content-center
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema2/26.svg' alt='AvatarTop')
            .col-lg-10
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-angle-right
                  p.mb-0 #[b Objetivo:] suministrar información clara al consumidor sobre el desempeño energético y el consumo de los equipos, permitiendo la toma de decisiones informadas a favor de la EE.
                li.d-flex.mb-1
                  i.fas.fa-angle-right
                  p.mb-0 #[b Alcance:] aplica a una lista específica de productos, incluyendo refrigeradores, aires acondicionados, lavadoras, balastos, motores eléctricos y calentadores de agua, entre otros.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Certificación:] los productos deben demostrar, mediante ensayos en laboratorios acreditados, que cumplen con los Límites Mínimos de Eficiencia Energética (LMME) establecidos por la norma.
      .col-lg-4
        img.mb-0(src='@/assets/curso/tema2/25.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4
        .titulo-sexto.mb-4
          h5 Figura 12. 
          | #[em Etiquetado energético]
        img.mb-2(src='@/assets/curso/tema2/27.png', alt='Etiqueta de eficiencia energética que muestra el consumo de energía, el nivel de eficiencia y la clasificación energética de un motor monofásico en Colombia.')
        figcaption #[b Fuente:] Ministerio de Minas y Energía (2016)

    
    p.mb-4 La etiqueta es la herramienta clave del RETIQ para la Gestión de la Demanda (GDE), ya que influye directamente en la decisión de compra del usuario:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .row.justify-content-center.align-items-end
          .col-lg-9.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema2/28.svg", alt="alt")
                .col
                  h4.mb-3 Escala de desempeño
                  p.mb-0 Muestra una escala de color y letras (generalmente de A u G) donde la letra A o el color verde indican la mayor eficiencia y el menor consumo de energía.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema2/29.svg", alt="alt")
                .col
                  h4.mb-3 Consumo anual
                  p.mb-0 Indica el consumo de energía estimado del equipo en condiciones de prueba, expresado en kWh / año. Esto es esencial para que el comprador pueda proyectar el costo operativo en la factura.
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema2/30.svg", alt="alt")
                .col
                  h4.mb-3 Comparación
                  p.mb-0 Fecuentemente incluye un valor de referencia para comparar el consumo del producto con un modelo de eficiencia mínima o promedio, facilitando la justificación del CAPEX más alto de un equipo eficiente.
                       
          .col-lg-4.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema2/31.svg", alt="alt")

    
    p.mb-5 Para el gestor de energía, el RETIQ y la etiqueta tienen implicaciones directas en la propuesta de mejora:

    
    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/32.svg')
          h3.mb-4.text-center Criterio de reemplazo
          p.mb-0 Toda acción de reemplazo de equipos de fuerza motriz (motores) o climatización debe obligatoriamente proponer modelos que cumplan, como mínimo, con los LMME del RETIQ y preferiblemente optar por las categorías de más alta eficiencia (clases A o superiores).
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/33.svg')
          h3.mb-4.text-center.text-white Justificación financiera
          p.mb-lg-4.text-white La etiqueta proporciona el dato oficial (kWh / año) para realizar proyecciones financieras precisas, respaldando los cálculos de VAN / TIR con información verificable por la autoridad.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

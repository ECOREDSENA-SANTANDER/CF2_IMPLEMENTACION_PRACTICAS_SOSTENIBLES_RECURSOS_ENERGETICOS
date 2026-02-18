<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la auditoría y gestión
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/1.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-0
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-4 La auditoría y la gestión energética constituyen herramientas fundamentales para la optimización del uso de los recursos energéticos en las organizaciones, ya que permiten comprender de manera integral cómo se consume la energía, dónde se presentan las mayores pérdidas y qué acciones pueden implementarse para mejorar el desempeño energético. Estos fundamentos proporcionan el marco conceptual y metodológico necesario para la toma de decisiones informadas, orientadas a la eficiencia, la sostenibilidad y la competitividad.
        p.mb-0 En este contexto, la Auditoría Energética (AE) se define como un examen sistemático, estructurado y detallado de las instalaciones, equipos o procesos de una entidad, cuyo objetivo principal es identificar los flujos de energía y detectar oportunidades de mejora que permitan reducir el consumo, los costos asociados y el impacto ambiental. La auditoría energética actúa como un vínculo entre el análisis del consumo reflejado en la facturación energética y la formulación e implementación de soluciones técnicas y de gestión que generen ahorros reales y sostenibles.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tipos de auditoría energética

    
    p.mb-5 El alcance de la auditoría energética debe definirse desde la etapa inicial, considerando los recursos disponibles y la complejidad del proceso productivo. Con base en estos criterios, se establecen los siguientes tipos de auditoría energética:


    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="AE preliminar (o de recorrido)")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Alcance:] es un análisis rápido y de bajo costo. Utiliza principalmente la información histórica de facturas y una inspección visual de las instalaciones.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Objetivo:] identificar las áreas de alto consumo y las oportunidades “obvias” o de bajo costo (ejemplo: corregir fugas, apagar luces). Sirve para justificar la necesidad de una auditoría más profunda.
          .row.align-items-center(titulo="AE detallada (o completa)")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-angle-right
                  p.mb-0 #[b Alcance:] es un estudio exhaustivo que incluye mediciones en tiempo real, análisis térmicos, de calidad de la energía y simulaciones. Requiere el uso de instrumentos especializados.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Objetivo:] determinar el perfil de consumo exacto de los equipos individuales, identificar las causas raíz de la ineficiencia (ejemplo: bajo factor de potencia, motores sobredimensionados) y calcular con alta precisión el potencial de ahorro y los indicadores financieros (VAN, TIR) de las medidas correctivas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png', alt='')

    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Fases de la auditoría energética detallada

    
    p.mb-4 Una AE detallada se ejecuta a través de un proceso riguroso:


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Recolección de datos históricos
              p.mb-0 Recopilación de facturas (12 a 36 meses), planos de distribución, inventario de equipos y cronogramas de operación.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Saberes de proceso aplicado
              p.mb-0 #[b Concepto:] la línea base es el perfil de consumo histórico de referencia normalizado (ajustado por factores externos no controlables, como la producción o el clima).


    .row.fondo1.p-4.p-lg-4.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-6
            .titulo-sexto.mb-4
              h5 Figura 1. 
              | #[em Línea base de consumo de energía]
            .bg2.mb-0.p-4
              img(src='@/assets/curso/tema1/6.svg', alt='Gráfico que presenta la evolución del consumo de energía en el tiempo, comparando energía de referencia, energía medida y energía ajustada, e indicando el ahorro obtenido tras la implementación de medidas de eficiencia energética.')
            figcaption #[b Fuente:] Sin Ce O Dos (2018)

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Mediciones e instrumentación
                p.mb-0 Esta etapa comprende la recolección de información técnica mediante el uso de instrumentos especializados que permiten caracterizar el comportamiento energético de los sistemas evaluados. Se emplean analizadores de redes eléctricas para registrar variables como la potencia activa, reactiva y el factor de potencia, fundamentales para identificar ineficiencias eléctricas. Adicionalmente, se utilizan cámaras termográficas para detectar pérdidas de energía asociadas a aislamientos deficientes en calderas, sobrecalentamientos en equipos eléctricos o fallas incipientes en conexiones. De manera complementaria, se realizan mediciones puntuales de caudales, temperaturas y niveles de iluminación, con el fin de obtener una visión integral del desempeño energético de los procesos y las instalaciones.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/7.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Análisis y elaboración de medidas
                p.mb-0 A partir de los datos obtenidos en las mediciones, se realiza un análisis detallado que permite clasificar los equipos y procesos según su nivel de consumo energético. En esta fase se aplica el principio 80 / 20, identificando aquellos usos finales que concentran la mayor proporción del consumo total y que, por tanto, representan las principales oportunidades de mejora. Con base en este análisis, se formulan medidas técnicas y de gestión orientada a optimizar el desempeño energético, reducir costos operativos y minimizar los impactos ambientales asociados al consumo de energía.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/8.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Informe y plan de acción
                p.mb-0 El proceso culmina con la elaboración de un informe técnico que consolida los resultados del análisis energético. Este documento incluye el cálculo del ahorro potencial de energía, la estimación de la reducción de emisiones de CO₂, el detalle de la inversión requerida y la evaluación financiera de cada medida propuesta. Asimismo, se estructura un plan de acción priorizado, que facilita la toma de decisiones y orienta la implementación de las acciones de mejora de manera ordenada, viable y alineada con los objetivos de sostenibilidad de la organización.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/9.png")


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Ejemplo práctico: determinación de la línea base y ahorro potencial


    p.mb-5 El siguiente ejemplo se centra en la sustitución de luminarias, una de las medidas de eficiencia más comunes, y muestra cómo se utiliza la Línea Base para cuantificar la oportunidad de ahorro.


    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull" style="overflow-x: hidden; max-width: 100%;").mb-0(data-aos="fade-left")
      .row.justify-content-center.align-items.p-0(titulo="Contexto del caso (fase de recolección de datos)")
        .col-lg-11.mb-0
          p.mb-4 Una empresa industrial desea evaluar la viabilidad de reemplazar 300 luminarias fluorescentes T8 de 70W (incluyendo balasto) por luminarias LED de 30W en su área de producción.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6
              .titulo-sexto
                h5 Tabla 1. 
                | #[em Parámetros operativos del sistema de iluminación]
              .tabla-a.peq
                table
                  thead
                    tr
                      th Parámetro
                      th Valor
                  tbody
                    tr
                      td.gr Horas de operación (H):
                      td.gr 12 horas / día
                    tr
                      td.bl Días de operación (D):
                      td.bl 25 días / mes
                    tr
                      td.gr Costo unitario promedio (CU):
                      td.gr $550 COP / kWh
                    tr
                      td.bl Número de luminarias (N):
                      td.bl 300 unidades
      .row.justify-content-center.align-items.p-0(titulo="Determinación de la línea base (consumo actual)")
        .col-lg-11.mb-0
          p.mb-4 La Línea Base (LB) se establece calculando el consumo y el costo mensual de la situación #[em sin intervención] (la tecnología actual).
          h5.mb-3 Cálculo de Consumo de la Línea Base (CLB)
          p.mb-4 La potencia de la tecnología antigua es #[b P#[sub antigua] = 70  W = 0.070 kW]  
          h5.mb-3 Consumo mensual total (kWh):
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 2. 
                | #[em Ecuación y desarrollo de ejercicio para cálculo de consumo mensual según ejercicio]
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-9
                  img.img-t.img-a(src='@/assets/curso/tema1/10.svg', alt='Cálculo del consumo energético de la línea base a partir de la potencia instalada, número de equipos y tiempo de operación mensual.')
          h5.mb-3 Costo Mensual de la Línea Base (COP):
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 3. 
                | #[em Ecuación y desarrollo de ejercicio para cálculo de costo mensual según ejercicio]
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  img.img-t.img-a(src='@/assets/curso/tema1/11.svg', alt='Cálculo del costo mensual actual de energía a partir del consumo de la línea base y el costo unitario por kilovatio hora.')
      .row.justify-content-center.align-items.p-0(titulo="Cálculo del consumo propuesto y ahorro potencial")
        .col-lg-11.mb-0
          h5.mb-4 Cálculo del Consumo Propuesto (C#[sub Propuesta])
          p.mb-0 La potencia de la tecnología LED es P#[sub propuesta] = 30  W = 0.030 kW
      .row.justify-content-center.align-items.p-0(titulo="Consumo mensual propuesto (kWh)")
        .col-lg-11.mb-0
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 4. 
                | #[em Cálculo del consumo energético mensual propuesto]
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-10
                  img.img-t.img-a(src='@/assets/curso/tema1/12.svg', alt='Cálculo del consumo energético mensual propuesto para un sistema de iluminación.')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 5. 
                | #[em Cálculo del ahorro energético y económico mensual]
              h5.mb-3.mx-3 Cálculo del Ahorro Potencial
              h5.mb-3.mx-3 1. Ahorro de energía #[em (kWh)]
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-10
                  img.img-t.img-a(src='@/assets/curso/tema1/13.svg', alt='Cálculo del ahorro energético y económico mensual obtenido al comparar la línea base con la propuesta de mejora.')
              h5.mb-3.mx-3 2. Ahorro económico (COP)
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-10
                  img.img-t.img-a(src='@/assets/curso/tema1/14.svg', alt='Cálculo del ahorro energético y económico mensual obtenido al comparar la línea base con la propuesta de mejora.')


</template>

<script>
export default {
  name: 'Tema1',
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

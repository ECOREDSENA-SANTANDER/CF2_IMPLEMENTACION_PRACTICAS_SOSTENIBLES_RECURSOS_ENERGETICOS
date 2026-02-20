<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Viabilidad, seguimiento y propuesta de valor


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img.img-t.img-a(src='@/assets/curso/tema3/1.svg', alt='')
      .col-lg-11.col-md-10
        p.mb-0  Una propuesta de eficiencia energética, por muy sólida que sea técnicamente, solo se aprueba si demuestra viabilidad económica. Esto requiere traducir los ahorros de energía (en kWh) en flujos de caja (dinero) y compararlos con la inversión inicial (CAPEX).

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores financieros clave


    p.mb-5(data-aos="fade-right") Los siguientes indicadores permiten evaluar la rentabilidad del proyecto en el largo plazo:


    TabsC.color-primario.mb-5(data-aos="fade-left")
      .bg3.p-lg-5.p-4(titulo="Periodo de Recuperación (PR)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-5.col-md-7.col-10.order-lg-2.order-md-2.order-2
                img(src='@/assets/curso/tema3/2.png', alt='')
              .col-lg-7.my-lg-4.order-lg-1.order-md-1.order-1
                p.mb-4 #[b • Definición:] el tiempo (en meses o años) que tarda la empresa en recuperar la inversión inicial (CAPEX) únicamente con los ahorros generados por el proyecto.
                h5.mb-4 • Fórmula Simple (sin valor del dinero en el tiempo): 
                .formula.mb-4
                  p.mb-0 #[math #[mi PR] #[mo =] #[mfrac #[mtext Inversión inicial] #[mtext Ahorro anual]]]
                p.mb-lg-0.mb-4 • Relevancia: Es el indicador más usado por la gerencia para medir el riesgo a corto plazo.
      .bg3.p-lg-5.p-4(titulo="Valor Actual Neto (VAN)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-5.col-md-7.col-10.order-lg-2.order-md-2.order-2
                img(src='@/assets/curso/tema3/3.png', alt='')
              .col-lg-7.my-lg-4.order-lg-1.order-md-1.order-1
                p.mb-lg-0.mb-4 #[b • Definición:] es la diferencia entre el valor actual de los flujos de caja futuros (los ahorros anuales) y el valor actual de la inversión inicial. Utiliza una tasa de descuento (Tasa de Oportunidad o Tasa Mínima Aceptable de Retorno - TMAR) para traer el valor futuro del dinero al presente.

      
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.mb-4
          h5 Figura 13. 
          | Fórmula y criterio de VAN
        p.mb-4 #[b * Criterio:] Si V AN > 0, el proyecto es rentable. Si V AN = 0, el proyecto es indiferente. Si V AN < 0, el proyecto se debe rechazar. #[b * Fórmula (Generalizada):]
        .bg1.p-4.mb-4
          img.mb-0.img-t.img-a(src='@/assets/curso/tema3/4.svg', alt='Fórmula y criterios del Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR) para la evaluación de la rentabilidad de proyectos.')

    
        p.mb-5 Donde i es la tasa de descuento y t es el periodo.


        h5.mb-3 • Tasa Interna de Retorno (TIR):


    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img.imaa.my-4(src='@/assets/curso/tema3/5.svg' alt='')
          .tarjeta.bg11
            .p-4.p-lg-5
              h4.mb-4.text-center Definición
              p.mb-0 Es la tasa de descuento (i) a la cual el #[b VAN] del proyecto se hace #[b cero] #[em (V AN = 0)]. Mide la rentabilidad intrínseca del proyecto en términos porcentuales.
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img.imaa.my-4(src='@/assets/curso/tema3/6.svg' alt='')
          .tarjeta.bg11
            .p-4.p-lg-5
              h4.mb-4.text-center Criterio
              p.mb-0 #[b Criterio:] Si #[em #[b TIR > i]] (TMAR), el proyecto es aceptado. Si la TIR es menor que la tasa de oportunidad de la empresa, es mejor invertir el dinero en otra parte.

    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 El rol de los incentivos fiscales (Ley 2099 de 2021)


    .bg12.mb-0(data-aos="fade-left")
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-3.pe-lg-0.h-100
          img.mb-0.img-t.img-a(src='@/assets/curso/tema3/7.svg', alt='')
        .col-lg-6.ps-lg-0.pe-lg-0
          .bg10.p-4.h-100
            p.mb-4.mx-lg-4.mt-lg-4 Es crucial incluir los beneficios tributarios ofrecidos por la legislación colombiana (Ley 2099 de 2021) en el análisis financiero, ya que reducen el CAPEX y aumentan la TIR:
            ul.lista-ul.mb-lg-3.mx-lg-4
              li.d-flex.mb-2
                i.fas.fa-angle-right
                p.mb-0 #[b Deducción en renta:] permite deducir hasta el 50 % de la inversión en EE del impuesto de renta en un plazo de 15 años.
              li.d-flex.mb-0
                i.fas.fa-angle-right
                p.mb-0 #[b Exclusión de IVA y arancel:] exención de estos impuestos para los equipos y servicios asociados a la EE. 
        .col-lg-3.ps-lg-0.h-100
          img.mb-0.img-t.img-a(src='@/assets/curso/tema3/8.svg', alt='')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Seguimiento y medición (M&V)

    
    p.mb-5(data-aos="fade-left") La medición y verificación (M&V) es la práctica de cuantificar los ahorros reales generados por una medida de eficiencia energética, asegurando que las proyecciones iniciales se cumplan.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-8.col-10
        img.mb-lg-0.mb-5(src='@/assets/curso/tema3/9.png', alt='')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="A" titulo="La necesidad de M&V")
            .col-lg-12
              p.mb-0 El ahorro energético es un ahorro evitado (no se puede medir directamente), por lo que se debe comparar el consumo después de la intervención con la Línea Base Ajustada (el consumo que habría ocurrido sin el proyecto).
          .row.justify-content-center.align-items-center.mb-0(numero="B" titulo="Protocolo IPMVP")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-3
                  i.fas.fa-angle-right
                  p.mb-0 #[b Definición:] el #[em International Performance Measurement and Verification Protocol] (IPMVP) es el estándar global que define los procedimientos para medir, verificar y reportar los ahorros.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Propósito:] da credibilidad a los ahorros reportados, lo cual es vital para los contratos de rendimiento energético y para justificar el uso de incentivos fiscales. 


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Propuesta de valor sostenible

    
    p.mb-5(data-aos="fade-right") La propuesta final debe articular el valor técnico y financiero con la visión estratégica de la sostenibilidad de la empresa (los tres pilares).


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Articulación de la propuesta

    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Valor económico
          p.mb-2.text-center Ahorro en costos operativos y rentabilidad (VAN positivo).
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Valor ambiental
          p.mb-2.text-center Cálculo de la reducción de la huella de carbono (toneladas de CO2 evitadas), utilizando el factor de emisión de la matriz colombiana.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg8.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
          .bg9.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Valor social
          p.mb-2.text-center Mejora en la calidad del ambiente laboral (ejemplo: mejor iluminación LED) y cumplimiento normativo (responsabilidad social corporativa).

    
    p.mb-5(data-aos="fade-right") Teniendo en cuenta el ejercicio desarrollado previamente, se tomarán los resultados para establecer la propuesta de valor.


    .bg1.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-1
          img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/3.svg' alt='AvatarTop')
        .col-lg-11
          p.mb-0 Este ahorro económico mensual de $1,980,000 COP es el Flujo de Caja Anual que se utilizará para calcular los indicadores financieros (PR, VAN, TIR). Por ejemplo, si la inversión total ($CAPEX$) es de $30,000,000 COP, el Periodo de Recuperación (PR) inicial (sin considerar el valor del dinero en el tiempo) sería:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.mb-4
          h5 Figura 14. 
          | Ejercicio periodo de recuperación parte 1
        img.mb-4.img-t.img-a(src='@/assets/curso/tema3/13.svg', alt='Fórmula y cálculo del Período de Recuperación (PR) en meses a partir de la inversión total y el ahorro mensual.')
        .bg1.p-4
          p.mb-0 Retomando el caso práctico: la inversión inicial (CAPEX) es de $30,000,000 COP y el ahorro económico anual es de $23,760,000 COP ($1,980,000 COP / mes x 12 meses).


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Cálculo de indicadores clave


    p.mb-5(data-aos="fade-right") Para evaluar la viabilidad económica, utilizaremos los tres indicadores fundamentales, asumiendo una vida útil del proyecto (N) de 5 años y una tasa de descuento (i) o TMAR del 10 % anual (la tasa mínima que la empresa acepta ganar).

    
    AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items.p-0(titulo="Periodo de Recuperación (PR) simple")
        .col-lg-11.mb-0
          p.mb-4 Este indicador determina el riesgo a corto plazo sin considerar el valor del dinero en el tiempo.
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-6
              .titulo-sexto
                h5 Figura 15.
                | Ejercicio periodo de recuperación parte 2
              img.mb-0.img-t.img-a(src='@/assets/curso/tema3/14.svg', alt='Fórmula y cálculo del Período de Recuperación (PR) en años, basado en la inversión inicial y el ahorro anual.')
          p.mb-0 #[b Conclusión pr:] la inversión se recupera en aproximadamente un año y tres meses, lo cual es altamente atractivo.
      .row.justify-content-center.align-items.p-0(titulo="Valor Actual Neto (VAN)")
        .col-lg-11.mb-0
          p.mb-4 El VAN determina si el proyecto genera riqueza real en el presente, trayendo los flujos de caja futuros a valor actual. 
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4
              .titulo-sexto
                h5 Figura 16.
                | Ejercicio valor actual neto
              img.mb-0.img-t.img-a(src='@/assets/curso/tema3/15.svg', alt='Ejemplo de cálculo del Valor Actual Neto (VAN) que presenta la fórmula aplicada, los flujos de caja descontados por año y el resultado final del VAN para un proyecto de inversión.')
          
          .tabla-a.tab2.mb-4
            table
              thead
                tr
                  th Año (t)
                  th Flujo de caja (COP)
                  th Factor de descuento (1 / (1.10)^t)
                  th Valor actual (COP)
              tbody
                tr.gr
                  td #[b 0 (CAPEX)]
                  td -$30,000,000
                  td 1.0000
                  td -$30,000,000
                tr.bl
                  td #[b 1]
                  td +$23,760,000
                  td 0.9091
                  td +$21,599,976
                tr.gr
                  td #[b 2]
                  td +$23,760,000
                  td 0.8264
                  td +$19,634,809
                tr.bl
                  td #[b 3]
                  td +$23,760,000
                  td 0.7513
                  td +$17,852,788
                tr.gr
                  td #[b 4]
                  td +$23,760,000
                  td 0.6830
                  td +$16,233,639
                tr.bl
                  td #[b 5]
                  td +$23,760,000
                  td 0.6209
                  td +$14,752,464
                tr.fila-van.gr
                  td(colspan="2").text-center #[b VAN]
                  td.bor
                  td(colspan="2") +$80,073,676
          p.mb-0 Criterio VAN: Dado que VAN > 0 ($80,073,676), el proyecto es altamente rentable y debe ser aceptado.
      .row.justify-content-center.align-items.p-0(titulo="Tasa Interna de Retorno (TIR)")
        .col-lg-11.mb-0
          p.mb-4 La TIR es el porcentaje de rentabilidad que genera el proyecto (cuando VAN=0).
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6
              .titulo-sexto
                h5 Figura 17.
                | Ejercicio tasa interna de retorno
              img.mb-0.img-t.img-a(src='@/assets/curso/tema3/16.svg', alt='Resultado de la Tasa Interna de Retorno (TIR) y criterio de aceptación del proyecto al compararla con la tasa de descuento.')
  

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Vínculo con sostenibilidad y normativa

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-5 La propuesta final de valor debe incluir estos cálculos:
        .bg1.p-4.mb-0(data-aos="fade-left")
          .row.justify-content-center.my-lg-3
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/3.svg' alt='AvatarTop')
            .col-lg-10
              ul.lista-ul.mb-1
                li.d-flex.mb-3
                  i.fas.fa-angle-right
                  p.mb-0 #[b Valor financiero:] se garantiza una inversión con un PR de 1.26 años y una TIR del 76.57 %.
                li.d-flex.mb-3
                  i.fas.fa-angle-right
                  p.mb-0 #[b Valor normativo:] el proyecto califica para los Incentivos Tributarios de la Ley 2099 de 2021 (deducción en renta, exclusión de IVA), lo cual mejora aún más la TIR calculada.
                li.d-flex.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 #[b Valor ambiental:] el ahorro anual de $3,600 kWh / mes x 12 meses = 43,200 kWh / año se traduce en una reducción significativa de la huella de carbono de la empresa.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/17.png', alt='')


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Medición y Verificación (M&V) (recapitulación)

  
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/18.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-5
            img.img-t.img-a.mb-lg-0.mb-4.mb-md-0(src='@/assets/curso/tema3/19.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 Para asegurar que estos $80 millones de VAN se materialicen, es obligatorio implementar el M&V bajo el Protocolo IPMVP. Esto implica:
        .bg14.p-4
          ul.lista-ul.mb-0
            li.d-flex.mb-3
              i.fas.fa-angle-right
              p.mb-0 #[b Ajuste:] comparar el consumo post - LED con la línea base ajustada por horas de operación reales.
            li.d-flex.mb-0
              i.fas.fa-angle-right
              p.mb-0 #[b Verificación:] certificar que el ahorro de $3,600 kWh / mes es real y atribuible únicamente al cambio de tecnología.
      

</template>

<script>
export default {
  name: 'Tema3',
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

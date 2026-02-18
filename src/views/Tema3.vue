<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Viabilidad, seguimiento y propuesta de valor


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema3/1.svg', alt='')
      .col-lg-11
        p.mb-0 Una propuesta de eficiencia energética, por muy sólida que sea técnicamente, solo se aprueba si demuestra viabilidad económica. Esto requiere traducir los ahorros de energía (en kWh) en flujos de caja (dinero) y compararlos con la inversión inicial (CAPEX).

    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores financieros clave


    p.mb-5 Los siguientes indicadores permiten evaluar la rentabilidad del proyecto en el largo plazo:


    TabsC.color-primario.mb-5(data-aos="fade-left")
      .bg3.p-5(titulo="Periodo de Recuperación (PR)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-5
                img(src='@/assets/curso/tema3/2.png', alt='')
              .col-lg-7
                p.mb-4 #[b • Definición:] el tiempo (en meses o años) que tarda la empresa en recuperar la inversión inicial (CAPEX) únicamente con los ahorros generados por el proyecto.
                h5.mb-4 • Fórmula Simple (sin valor del dinero en el tiempo): 
      .bg3.p-5(titulo="Valor Actual Neto (VAN)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-start
              .col-lg-5
                img(src='@/assets/curso/tema3/3.png', alt='')
              .col-lg-7
                p.mb-0 #[b • Definición:] es la diferencia entre el valor actual de los flujos de caja futuros (los ahorros anuales) y el valor actual de la inversión inicial. Utiliza una tasa de descuento (Tasa de Oportunidad o Tasa Mínima Aceptable de Retorno - TMAR) para traer el valor futuro del dinero al presente.

      


























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

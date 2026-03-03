<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png' alt='AvatarTop')
      .col-lg-7
        .row.justify-content-center.align-items.mb-0
          .col-lg-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/2.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-4 Bienvenido al componente formativo “Implementación de prácticas sostenibles en gestión de recursos energéticos”. El contenido del curso ha sido diseñado para proporcionar la información necesaria que permita aprovechar de manera óptima este programa de formación, presentando los objetivos de aprendizaje, la estructura de los contenidos, las actividades a desarrollar, los criterios de evaluación y los recursos de apoyo disponibles.
        p.mb-0 El componente se enfoca en la etapa clave de la proposición e implementación de soluciones, donde la Eficiencia Energética (EE) se consolida como un eje fundamental de la sostenibilidad, al convertir el ahorro de recursos en rentabilidad económica y en la reducción de impactos ambientales, en concordancia con lo establecido en la Ley 2099 de 2021 en Colombia. El contenido se estructura para facilitar la transición del análisis a la acción, iniciando con los Fundamentos de la Auditoría Energética (AE), la definición de la línea base de consumo y los objetivos de ahorro, y profundizando posteriormente en estrategias de intervención específicas por uso final en fuerza motriz, Iluminación y climatización.


    .bg1.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-1
          img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/intro/3.svg' alt='AvatarTop')
        .col-lg-11
          p.mb-0 Finalmente, se aborda la etapa de evaluación y viabilidad económica, determinante para la toma de decisiones, mediante el cálculo de indicadores financieros como el Valor Actual Neto (VAN), la Tasa Interna de Retorno (TIR) y el Período de Recuperación (PR), y su articulación con los objetivos de sostenibilidad, como la reducción de emisiones de CO₂. De esta manera, el aprendiz queda capacitado para formular una propuesta de valor integral que garantice la viabilidad técnica y financiera de las acciones de mejora.


    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/SY6og-mgB0o?si=-8zbgvBG1UZI2S38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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

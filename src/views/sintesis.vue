<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-left") La auditoría y la gestión energética proporcionan la base metodológica para intervenir de manera efectiva los sistemas de consumo. A través de la auditoría energética se establece un proceso estructurado que incluye la medición, el uso de instrumentación especializada y la definición de una línea base de consumo normalizada, la cual permite cuantificar con precisión el ahorro potencial asociado a cada acción de mejora. Este enfoque facilita la transición del análisis del consumo histórico hacia la identificación objetiva de oportunidades de eficiencia.
    p.mb-5(data-aos="fade-right") Sobre esta base, se desarrollan estrategias técnicas orientadas a los sistemas de mayor consumo, como la fuerza motriz, la iluminación y la climatización, incorporando tecnologías de alta eficiencia y prácticas de gestión que optimizan el desempeño energético. La viabilidad de estas acciones se consolida mediante la evaluación financiera, utilizando indicadores como el período de recuperación, el valor actual neto y la tasa interna de retorno, y se valida a través de procesos de seguimiento y verificación de ahorros. Finalmente, se integra el valor económico, ambiental y normativo, fortaleciendo la toma de decisiones mediante propuestas de valor sostenibles alineadas con la reducción de la huella de carbono y los incentivos regulatorios vigentes.


    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama conceptual que resume las acciones y estrategias de eficiencia energética, integrando metodología y auditoría, estrategias de intervención por uso final y evaluación de viabilidad, seguimiento y generación de valor.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

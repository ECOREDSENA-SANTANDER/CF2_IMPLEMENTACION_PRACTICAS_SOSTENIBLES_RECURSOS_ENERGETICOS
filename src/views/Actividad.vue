<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
//import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    //ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Acciones y estrategias de eficiencia energética.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el eje fundamental de la sostenibilidad mencionado en el componente formativo que convierte el ahorro de recursos en rentabilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La Auditoría Energética (AE).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Eficiencia Energética (EE).',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La Ley 2099 de 2021.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La Tasa Interna de Retorno (TIR).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué ley colombiana se cita como marco de referencia para la implementación de soluciones de sostenibilidad energética?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Ley 1715 de 2014.', esCorrecta: false },
            { id: 'b', texto: 'Ley 99 de 1993.', esCorrecta: false },
            { id: 'c', texto: 'Ley 2099 de 2021.', esCorrecta: true },
            { id: 'd', texto: 'Decreto 1076 de 2015.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Dentro de la transición del análisis a la acción, ¿cuál es el primer paso mencionado en la estructura del contenido?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategias de intervención en fuerza motriz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cálculo del Valor Actual Neto (VAN).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de emisiones de CO2.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fundamentos de la Auditoría Energética (AE).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento es crucial definir para establecer los objetivos de ahorro en una gestión energética?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'La línea base de consumo.', esCorrecta: true },
            {
              id: 'b',
              texto: 'El presupuesto de marketing.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La cantidad de empleados.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El organigrama de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿En cuáles de los siguientes usos finales se profundiza para las estrategias de intervención?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Transporte y logística.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Fuerza motriz, iluminación y climatización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Domótica y entretenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reciclaje de residuos y agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Al finalizar el componente, ¿qué documento integral está capacitado para formular el aprendiz?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Un manual de convivencia ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una Propuesta de Valor integral.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un inventario de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una factura de servicios públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de estos indicadores financieros se utiliza para determinar el Período de Recuperación de la inversión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'TIR', esCorrecta: false },
            { id: 'b', texto: 'VAN', esCorrecta: false },
            { id: 'c', texto: 'PR', esCorrecta: true },
            { id: 'd', texto: 'CO2', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué representa la Tasa Interna de Retorno (TIR) en la evaluación de proyectos energéticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La rentabilidad propia del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El costo total de la energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de kilovatios ahorrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo que tarda en dañarse un motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Además de la rentabilidad económica, ¿con qué otro objetivo se articulan los indicadores financieros?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de la jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objetivos de sostenibilidad (ejemplo: reducción de CO2).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambio de nombre de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento de metas de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué permite garantizar la viabilidad técnica y financiera de las acciones de mejora?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar el equipo más barato.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Ignorar la línea base.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La formulación de una Propuesta de Valor integral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el consumo de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal del diseño del contenido del curso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Vender software de auditoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar información para aprovechar el programa de formación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar el desempeño del instructor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Redactar leyes nuevas para Colombia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué etapa es considerada clave para la consolidación de la Eficiencia Energética?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La etapa de proposición e implementación de soluciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La etapa de cierre de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La etapa de contratación de personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La etapa de diseño de logotipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué significa VAN en el contexto de evaluación económica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Vehículo de Acción Nacional.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Valor Actual Neto.', esCorrecta: true },
            { id: 'c', texto: 'Volumen de Ahorro Nominal.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Validación de Acciones Nuevas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿A qué se refiere el término "climatización" en el componente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Estudio de las nubes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ajuste de salarios por inflación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistemas de aire acondicionado y calefacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Viajes a diferentes zonas climáticas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el beneficio económico directo de la Eficiencia Energética según el texto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Obtención de préstamos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conversión del ahorro de recursos en rentabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento del precio de los productos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Pago de más impuestos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de motores o sistemas se asocian comúnmente con la "fuerza motriz"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Paneles solares.', esCorrecta: false },
            { id: 'b', texto: 'Bombillas LED.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Motores eléctricos industriales.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Pantallas de computador.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es determinante la evaluación de viabilidad económica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Para cumplir con la ley de gravedad.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Para la toma de decisiones.', esCorrecta: true },
            { id: 'c', texto: 'Para despedir empleados.', esCorrecta: false },
            { id: 'd', texto: 'Para decorar las oficinas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es uno de los criterios que se presentan para aprovechar el programa de formación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Criterios de evaluación.', esCorrecta: true },
            { id: 'b', texto: 'Criterios de elegancia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Criterios de velocidad de internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Criterios de selección de personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'En el contexto de sostenibilidad, ¿qué representa el CO2?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Un tipo de combustible nuevo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un indicador de emisiones que se busca reducir.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nombre de un indicador financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una marca de motores eficientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Hacia dónde facilita el contenido la transición del aprendiz?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Del análisis a la acción.', esCorrecta: true },
            { id: 'b', texto: 'De la acción al olvido.', esCorrecta: false },
            { id: 'c', texto: 'De la teoría a más teoría.', esCorrecta: false },
            { id: 'd', texto: 'De la oficina al parque.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Posee una buena comprensión sobre los conceptos fundamentales para el desarrollo del componente. ¡Siga explorando este fascinante mundo de las energías renovables!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

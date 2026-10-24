<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
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
              texto: 'La auditoría energética (AE).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eficiencia energética (EE).',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La Ley 2099 de 2021.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La tasa interna de retorno (TIR).',
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
              texto: 'Cálculo del valor actual neto (VAN).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de emisiones de CO<sub>2</sub>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fundamentos de la auditoría energética (AE).',
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
              texto: 'El presupuesto de <em>marketing.</em>',
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
              texto: 'Una propuesta de valor integral.',
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
            '¿Cuál de estos indicadores financieros se utiliza para determinar el período de recuperación de la inversión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'TIR', esCorrecta: false },
            { id: 'b', texto: 'VAN', esCorrecta: false },
            { id: 'c', texto: 'PR', esCorrecta: true },
            { id: 'd', texto: 'CO<sub>2</sub>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Acciones y estrategias de eficiencia energética.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué representa la tasa interna de retorno (TIR) en la evaluación de proyectos energéticos?',
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
              texto:
                'Objetivos de sostenibilidad (ejemplo: reducción de CO<sub>2</sub>).',
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
              texto: 'La formulación de una propuesta de valor integral.',
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
            '¿Cuál es el propósito de la medición y verificación (M&V) después de implementar una medida de eficiencia energética?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar el número de equipos instalados en la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar el consumo posterior a la intervención con la línea base ajustada para verificar los ahorros obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Establecer los horarios laborales de los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular únicamente el costo inicial de adquisición de los equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión del proceso de medición y verificación del desempeño energético. Identifica que comparar el consumo posterior a la intervención con la línea base ajustada permite comprobar los ahorros obtenidos.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la medición y verificación del desempeño energético, la línea base ajustada y los procedimientos para comprobar los ahorros reales después de implementar medidas de eficiencia energética.',
        },
        {
          id: 12,
          texto:
            '¿Qué etapa es considerada clave para la consolidación de la eficiencia energética?',
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
              texto: 'Vehículo de acción nacional.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Valor actual neto.', esCorrecta: true },
            { id: 'c', texto: 'Volumen de ahorro nominal.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Validación de acciones nuevas.',
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
            '¿Cuál es el beneficio económico directo de la eficiencia energética según el texto?',
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
            '¿Qué acción permite aplicar la gestión de la demanda para reducir los costos de energía durante las horas pico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener todos los equipos funcionando a máxima capacidad durante todo el día.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar el consumo energético durante los periodos de mayor demanda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trasladar el funcionamiento de procesos no esenciales a las horas valle, cuando el costo de la energía es menor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar todos los equipos eléctricos sin analizar sus horarios de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de la gestión de la demanda energética. Reconoce que trasladar el consumo de las horas pico a las horas valle puede reducir los costos operativos sin necesariamente disminuir el consumo total de energía.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la gestión de la demanda energética, el desplazamiento de cargas y la programación de procesos en horarios de menor costo para optimizar los gastos asociados al consumo de energía.',
        },
        {
          id: 19,
          texto:
            'En el contexto de sostenibilidad, ¿qué representa el CO<sub>2</sub>?',
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
            '¿Qué criterio permite determinar si un proyecto de eficiencia energética genera rentabilidad según el valor actual neto (VAN)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el consumo energético permanezca igual después de la intervención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la inversión inicial sea mayor que los ahorros económicos proyectados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el proyecto no requiera seguimiento ni medición de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el valor actual neto sea positivo, lo que indica que el proyecto genera valor económico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión del valor actual neto como indicador financiero. Identifica que un VAN positivo indica que el proyecto genera valor económico y constituye un criterio favorable para su aceptación.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la viabilidad económica de los proyectos de eficiencia energética, especialmente la interpretación del valor actual neto (VAN), la tasa interna de retorno (TIR) y el período de recuperación de la inversión (PR).',
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

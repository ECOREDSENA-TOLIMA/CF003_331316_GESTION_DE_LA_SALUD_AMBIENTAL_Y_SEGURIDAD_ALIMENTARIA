<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prestación del servicio de salud
      
    p.mb-5(data-aos="fade-down") En Colombia la prestación de servicios de salud se encuentra reglamentada por la Política Nacional de Prestación de Servicios de Salud, obedeciendo a la #[b Ley 1122 de 2007] y sus decretos reglamentarios, cuyo principal objetivo es garantizar el acceso y la calidad de los servicios, optimizar el uso de los recursos, promover los enfoques de atención centrada en el usuario y lograr la sostenibilidad financiera de las Instituciones prestadoras de servicios de salud públicas. 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La prestación de servicios de salud por parte de las instituciones públicas solo se hará a través de Empresas Sociales del Estado (ESE) que podrán estar constituidas por una o varias sedes o unidades prestadoras de servicios de salud. En todo caso, toda unidad prestadora de servicios de salud de carácter público deberá hacer parte de una Empresa Social del Estado, excepto las unidades de prestación de servicios de salud que hacen parte de las empresas industriales y comerciales del Estado y de aquellas entidades públicas cuyo objeto no es la prestación de servicios de salud. En cada municipio existirá una ESE o una unidad prestadora de servicios integrante de una ESE.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Principios de política en la prestación del servicio

    p.mb-5(data-aos="fade-down") La Política Nacional de Prestación de Servicios de Salud se basa en desarrollar condiciones fiscales que ayudan al usuario a conocer cuáles son sus derechos y deberes en cuanto la prestación del servicio de salud, teniendo en cuenta que:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/info-1.svg', alt='')
      .tarjeta.color-primario.p-3(x="5.5%" y="18%" numero="1")
        p La Política Nacional de Prestación de Servicios de Salud, propende por optimizar la prestación del servicio.
        p Se parte de reconocer que el principal objetivo del sistema es mejorar la salud de la población. 
      .tarjeta.color-primario.p-3(x="12%" y="31%" numero="2")
        p El Sistema General de Seguridad Social aplica a todos los colombianos.
        p El Sistema General de Seguridad Social en salud, regula el servicio público esencial y crea condiciones de acceso para toda la población en todos los niveles de atención en Colombia.
      .tarjeta.color-primario.p-3(x="5.5%" y="48%" numero="3")
        p Cobertura a todas las personas sin distinción.
        p Reconoce la heterogeneidad del país, esto constituye un desafío para la organización de la prestación de servicios de salud, que obliga la búsqueda de esquemas flexibles que den cuenta de las diferencias y que responda a las realidades epidemiológicas, sociales y culturales de la población.
      .tarjeta.color-primario.p-3(x="12%" y="63.5%" numero="4")
        p Acceso a todos los servicios de salud.
        p Promueve los enfoques de atención centrada en el usuario y mejoramiento continuo de la calidad, como ideales de la prestación de servicios de salud.
      .tarjeta.color-primario.p-3(x="5.5%" y="78%" numero="5")
        p Mayor cobertura.
        p Admite que la prestación de servicios de salud, se desarrolla en un escenario descentralizado, con definición de competencias, recursos y acciones de control de la prestación de servicios en las entidades territoriales.
      .tarjeta.color-primario.p-3(x="61.5%" y="18%" numero="6")
        p En el marco del presupuesto nacional.
        p Reconoce que la prestación de servicios se desarrolla en condiciones de ajuste fiscal y en un entorno de competencia. 
      .tarjeta.color-primario.p-3(x="72.8%" y="31%" numero="7")
        p Involucra todas las personas independientes de su estratificación económica o condición de salud.
        p Permite el diseño y aplicación de diferentes modelos de prestación de servicios, de manera que su organización dé respuesta a las necesidades y condiciones particulares de la población, en especial a la que se encuentra en situación de vulnerabilidad.
      .tarjeta.color-primario.p-3(x="61%" y="47.5%" numero="8")
        p Comunidades organizadas con un propósito en el entorno de la salud y el bienestar.
        p Reconoce la necesidad de explorar y fortalecer todas las posibilidades que tienen las comunidades de organizarse para solucionar sus problemas de salud y de articular la respuesta de los prestadores de servicios de salud a las necesidades de sus usuarios. 
      .tarjeta.color-primario.p-3(x="72.8%" y="63.5%" numero="9")
        p Comunidades con habilidades y propósitos colectivos.
        p Admite la necesidad de generar capacidades e incrementar habilidades en los individuos, grupos, organizaciones, instituciones y comunidad, con el fin de lograr los objetivos y metas del sistema de salud. 
      .tarjeta.color-primario.p-3(x="61.5%" y="78%" numero="10")
        p Inversión proporcional a las necesidades poblacionales.
        p Reconoce la rendición de cuentas como un elemento fundamental para la óptima utilización de los recursos y para lograr que la población reciba un trato semejante ante necesidades semejantes. 
        p Reconoce como ámbito de aplicación a prestadores públicos y privados.







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

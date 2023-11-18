<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") Bienvenidos a esta temática relacionada con las acciones de mejora para servicios de salud. Las entidades públicas o privadas encargadas de la prestación de servicios públicos, deberán analizar la vulnerabilidad a que están sometidas las instalaciones de su inmediata dependencia, para la prestación de servicios ante diferentes tipos de situaciones de salud y de esta forma ofrecer cobertura en zonas de mayor influencia en riesgo. Para comenzar el recorrido por el mismo, observe el video que se muestra a continuación:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mDKsK2Z_6aw" title="Acciones de mejora en los servicios de salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Acciones de mejora en los servicios de salud
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

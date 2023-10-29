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

    p.mb-3(data-aos="fade-down") La Política Nacional de Prestación de Servicios de Salud se basa en desarrollar condiciones fiscales que ayudan al usuario a conocer cuáles son sus derechos y deberes en cuanto la prestación del servicio de salud, teniendo en cuenta que:

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
  
    .d-block.d-md-none.mb-5 
      a.anexo.mb-4(:href="obtenerLink('/downloads/Principios_orientadores_de_la_politica_nacional_de_prestacion_de_servicios_de_salud.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p #[b Descargar]. Principios Orientadores de la Política Nacional de prestación de servicios de salud
    
    p.mb-3(data-aos="fade-down") Además de los principios orientadores de la política pública, existen tres objetivos fundamentales en la prestación de servicios de salud:

    .tarjeta.color-primario.p-5.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12.col-md-6.col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span #[b 1]
              | Mejorar el acceso a los servicios de salud.
            li 
              .lista-ol--cuadro__vineta
                span #[b 2]
              | Mejorar la calidad de la atención en salud.
            li 
              .lista-ol--cuadro__vineta
                span #[b 3]
              | Organizar la eficiencia en la prestación de servicios de salud y lograr la sostenibilidad financiera de las IPS públicas.
        .col-12.col-md-6.col-lg-5
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='')

    p.mb-3(data-aos="fade-down") No es de olvidar que el Sistema Obligatorio de Garantía de Calidad en Salud (SOGCS) trabaja mancomunadamente con la política pública en el entorno de la prestación de servicios de salud y corresponde al conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos del sector salud, para generar, mantener y mejorar la calidad de servicio de salud en el país.
    p.mb-5(data-aos="fade-down") El SOGCS está integrado por cuatro componentes a saber o subsistemas, estos son: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-11
        .tarjeta.color-primario.p-4
          h3.mb-4.text-center Subsistemas o componentes del Sistema Obligatorio de Garantía de Calidad en Salud- SOGCS
          img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-4.png' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Sistema Único de Habilitación (SUH)
              p Mediante la Resolución 3100 de 2019 "Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud y se adopta el Manual de Inscripción de Prestadores y Habilitación de Servicios de Salud".
      .col-lg-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-5.png' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC)
              p Son herramientas para lograr lo establecido en el Artículo 7 de la Ley 1966 de 2019, no obstante, se requiere para lograr su adecuada formulación, ejecución y seguimiento, de la implementación de una metodología que estandarice su presentación y contenga los criterios e indicadores.
      .col-lg-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-6.png' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Sistema Único de Acreditación (SUA)
              p Conjunto de procesos, procedimientos y herramientas de implementación voluntaria y periódica, para comprobar el cumplimiento gradual de calidad, por encima de los requisitos mínimos obligatorios, bajo la dirección del Estado y la inspección, vigilancia y control de la Superintendencia Nacional de Salud. 
      .col-lg-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-7.png' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Sistema de Información para la Calidad en Salud
              p.mb-1 Seguimiento y evaluación de la gestión de la calidad de la atención en salud.
              p.mb-1 Información a los usuarios para elegir libremente y tomar decisiones con base en la calidad de los servicios.
              p Insumos para la referenciación por calidad que permita materializar los incentivos de prestigio del sistema.

    p.mb-5(data-aos="fade-down") Algunas de las normas ancladas a la política regulada en el sistema de salud, así como el propósito de su implementación, de acuerdo con lo establecido en el #[b CONPES 3550/2008], pueden observarse en el siguiente esquema:

    .row.justify-content-center.mb-5
      .col-12.col-lg-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Política de salud ambiental en las entidades territoriales</i>
        .tarjeta.color-primario.p-3.p-md-5
          figure 
            img(src='@/assets/curso/temas/tema1/fig-1.svg', alt='La figura 1, muestra que la Política de Salud ambiental en las entidades territoriales se formaliza mediante el Decreto 3039 de 2007 y el CONPES 3550 de 2008, todas ellas supervisadas por la Comisión Técnica Nacional Intersectorial para la Salud Ambiental.')

    .cajon.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-down")
      p.mb-0 El CONPES 3550, se expide en respuesta a la identificación de necesidades y problemas de carácter sanitario y ambiental que afronta la población colombiana y al cumplimiento de acuerdos, convenios y compromisos internacionales.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Planes de mejoramiento en la prestación de servicios de salud

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7(data-aos="fade-down-right")
        p Los planes de mejoramiento en relación a la prestación de servicios de salud, proponen estrategias y acciones, que permitan impulsar los diferentes modelos de gestión que están encaminados a la excelencia y a la generación de valor social. Es así que determina como meta principal, fortalecer la gestión y la articulación de los diferentes agentes involucrados, con el fin de realizar un mejoramiento continuo, y logros tangibles en este sector. Y se espera, que como resultado se obtenga un mejoramiento de la calidad y sobre todo la recuperación de la confianza y legitimidad en el sistema. 
        p El Plan Nacional de Mejoramiento de la Calidad en Salud (PNMCS), genera directrices básicas para el desarrollo de los diferentes planes de mejoramiento que las instituciones y todos los actores involucrados, deben realizar; en el siguiente esquema se hace una explicación detallada al respecto:
      .col-md-5(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')


    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Plan Nacional de Mejoramiento de la Calidad en Salud (PNMCS)</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-2.svg', alt='La figura 2, muestra como el Plan Nacional de Mejoramiento de la Calidad en Salud establece estrategias hacia la gestión y logro de resultados, desde un enfoque sistémico, con el fin de brindar un servicio de calidad.')
      .col-12.d-block.d-md-none 
        a.anexo.mb-4(:href="obtenerLink('/downloads/Plan_Nacional_Mejoramiento_Calidad_en_Salud_PNMCS.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar]. Plan Nacional de Mejoramiento de la Calidad en Salud (PNMCS)
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Presentación de informes

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7(data-aos="fade-down-right")
        p En la presentación de informes, correspondientes a la satisfacción del servicio, se debe tener en cuenta algunos puntos importantes como son la evaluación y el seguimiento del plan; este documento informe, se realizará mediante dos aspectos fundamentales a saber: 1) monitoreo y seguimiento a los indicadores definidos por la actualización del sistema de información para la calidad y 2) la participación efectiva de los actores involucrados en la ejecución del PNMCS.
        p Una vez efectuada esta primera instancia, será el Ministerio de Salud y Protección Social, quien recopilará, analizará, consolidará y dispondrá la información necesaria para llevar a cabo el seguimiento del Plan de mejoramiento de la calidad en salud, presentado por las instancias respectivas.
        p Los objetivos definidos por el Ministerio de Salud y Protección Social, se relacionan con:
      .col-md-5(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')

    .tarjeta.color-acento-contenido.mb-5.p-3.p-md-5.d-none.d-md-block
      ImagenInfografica.color-acento-botones(data-aos="fade-down")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/info-2.svg', alt='')
        .tarjeta.color-primario.p-3(x="1.5%" y="18%" numero="+")
          p Monitoreo y evaluación del cumplimiento de los objetivos propuestos en el PNMCS.
        .tarjeta.color-primario.p-3(x="1.5%" y="78%" numero="+")
          p Difundir los resultados del monitoreo y evaluación a través del Observatorio Nacional de Calidad en Salud y la estrategia nacional de movilización social en calidad.
        .tarjeta.color-primario.p-3(x="75%" y="18%" numero="+")
          p El seguimiento y evaluación del PNMCS se realizará teniendo en cuenta la línea base formulada a través del reporte realizado por las entidades objeto del ámbito de aplicación de la Resolución 256 de 2016 y por el Informe Nacional de Calidad, Colombia 2015.
        .tarjeta.color-primario.p-3(x="38.2%" y="53%" numero="+")
          p Consolidar una cultura de monitoreo y evaluación de las distintas entidades territoriales y en todos los agentes del Sistema.
        .tarjeta.color-primario.p-3(x="75%" y="79%" numero="+")
          p Gestionar el conocimiento derivado de la evidencia necesaria para orientar la formulación del PNMCS.
    
    .row.d-block.d-md-none.mb-5(data-aos="fade-down")
      .col-12.mb-2
        img(src='@/assets/curso/temas/tema1/info-2b.svg', alt='')
      .col-12.mb-2
        .tarjeta.color-primario.p-3
          h4 Monitoreo y evaluación
          p Monitoreo y evaluación del cumplimiento de los objetivos propuestos en el PNMCS.
      .col-12.mb-2 
        .tarjeta.color-primario.p-3
          h4 Consolidar la cultura de seguimiento
          p Consolidar una cultura de monitoreo y evaluación de las distintas entidades territoriales y en todos los agentes del Sistema.
      .col-12.mb-2 
        .tarjeta.color-primario.p-3
          h4 Gestionar conocimiento
          p Gestionar el conocimiento derivado de la evidencia necesaria para orientar la formulación del PNMCS.
      .col-12.mb-2 
        .tarjeta.color-primario.p-3
          h4 Difundir resultados
          p Difundir los resultados del monitoreo y evaluación a través del Observatorio Nacional de Calidad en Salud y la estrategia nacional de movilización social en calidad.
      .col-12.mb-2 
        .tarjeta.color-primario.p-3
          h4 Fuentes de información
          p El seguimiento y evaluación del PNMCS se realizará teniendo en cuenta la línea base formulada a través del reporte realizado por las entidades objeto del ámbito de aplicación de la Resolución 256 de 2016 y por el Informe Nacional de Calidad, Colombia 2015.

    p.mb-5(data-aos="fade-down") La generación de los informes, requiere tener presente algunos aspectos que permiten comprender su finalidad y secuencialidad, así como la consistencia en la información, estos pasos son:

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down")
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center.col-ipad(titulo="Paso 1")
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Definición del objeto de análisis
            p #[b a) Objeto principal:] se describe o se visualiza los canales de atención del usuario en cuanto el servicio recibido en las diferentes dimensiones de salud, se verifica la calidad del servicio por donde se realizó la atención. 
            p #[b b) Población objeto:] son los usuarios de la información estadísticas las cuales arrojan los resultados de las encuestas.
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad(titulo="Paso 2")
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Aspectos a evaluar en la encuesta
            ul.lista-ul.ms-3
              li 
                i.fas.fa-check
                | Medios de accesos.  
              li 
                i.fas.fa-check
                | Productos estadísticos.
              li 
                i.fas.fa-check
                | Canales a evaluar.
              li 
                i.fas.fa-check
                | Eje presencial.
              li 
                i.fas.fa-check
                | Eje sala especializada.
              li 
                i.fas.fa-check
                | Eje telefónico.
              li 
                i.fas.fa-check
                | Eje correspondencia.
          .col-md-5.col-10
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad(titulo="Paso 3")
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Elaboración de la herramienta
            p #[b ●	Encuesta:]
            ul.lista-ul.ms-3
              li.mb-0
                i.fas.fa-check
                | Equipo de trabajo (estadísticas)
              li.mb-0 
                i.fas.fa-check
                | Elaboración de encuestas o cuestionarios.
              li.mb-0 
                i.fas.fa-check
                | Validación del cuestionario.
            p #[b ●	Secciones del cuestionario:]
            ul.lista-ul.ms-3
              li.mb-0 
                i.fas.fa-check
                | Descripción general del uso de las estadísticas. 
              li.mb-0 
                i.fas.fa-check
                | Medición de satisfacción en relación al servicio de atención al usuario y los productos. 
              li.mb-0 
                i.fas.fa-check
                | Caracterización de usuarios. 
              li.mb-0 
                i.fas.fa-check
                | Consulta ciudadana: ejemplo: “¿Cuáles son las estadísticas y/o iniciativas que requieren de nuestra institución para elevar su nivel de satisfacción?”.
          .col-md-5.col-10
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad(titulo="Paso 4")
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Proceso de recolección
            ul.lista-ul.ms-3
              li.mb-0 
                i.fas.fa-check
                | Censo de usuarios de la institución.
              li.mb-0 
                i.fas.fa-check
                | Testeo del formulario web.
              li.mb-0 
                i.fas.fa-check
                | Habilitación del cuestionario web.
              li.mb-0 
                i.fas.fa-check
                | Período de recolección.
              li.mb-0 
                i.fas.fa-check
                | Respuestas.
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad(titulo="Paso 5")
          .col-md-7.col-12.mb-4.mb-md-0
            h4 Aplicación y seguimiento
            p La adaptación de lineamientos, de diagramas y algoritmos, las IPS junto con los prestadores primarios de la red, ejecutan las actividades con calidad y oportunidad; socializan la ruta con la red de prestadores y hacen los ajustes necesarios en cuanto a contratación, flujo de información, monitoreo y seguimiento. Se hace visita a las IPS primarias dos veces al año, seguimiento a la entrega de informes mensuales y se revisa la ejecución de los programas de promoción y prevención. 
          .col-md-5.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')

    p.mb-5(data-aos="fade-down") En cuanto a los aspectos que debe tener la encuesta para llevar a cabo su evaluación, es necesario considerar los que se encuentran descritos en la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Aspectos a evaluar en la encuesta] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Aspecto
                th Consideraciones presentes en la evaluación
            tbody
              tr
                td Medios de accesos.
                td Accesibilidad, calidad del servicio, efectividad, claridad, orientación técnica, cordialidad, utilidad y tiempo de respuesta.
              tr
                td Productos estadísticos.
                td Disponibilidad, completitud, claridad, confiabilidad, actualización, precisión.
              tr
                td Canales a evaluar.
                td 
                  ul.lista-ul.ms-3
                    li.mb-0 
                      span ✔ 
                      | Presencial.
                    li.mb-0 
                      span ✔ 
                      | Sala especializada. 
                    li.mb-0 
                      span ✔ 
                      | Telefónico.
                    li.mb-0 
                      span ✔ 
                      | Correspondencia (comunicaciones escritas físicas / virtuales).
              tr
                td 
                  p #[b Eje presencial:]
                  ul.lista-ul.ms-3
                    li.mb-0 
                      span ✔ 
                      | Calidad del servicio.
                    li.mb-0 
                      span ✔ 
                      | ✔	Categorías evaluadas.
                td Efectividad, orientación técnica, cordialidad, utilidad y claridad.
              tr
                td 
                  p #[b Eje sala especializada:]
                  ul.lista-ul.ms-3
                    li.mb-0 
                      span ✔ 
                      | Calidad del servicio.
                    li.mb-0 
                      span ✔ 
                      | Categorías evaluadas.
                td Efectividad, orientación técnica, cordialidad, utilidad y claridad.
              tr
                td 
                  p #[b Eje telefónico:]
                  ul.lista-ul.ms-3
                    li.mb-0 
                      span ✔ 
                      | Calidad del servicio.
                    li.mb-0 
                      span ✔ 
                      | Categorías evaluadas.
                td Efectividad, orientación técnica, cordialidad, utilidad y claridad.
              tr
                td 
                  p #[b Eje correspondencia:]
                  ul.lista-ul.ms-3
                    li.mb-0 
                      span ✔ 
                      | Calidad del servicio.
                    li.mb-0 
                      span ✔ 
                      | Categorías evaluadas.
                td Efectividad, orientación técnica, cordialidad, utilidad y claridad.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Reporte oportuno de eventos adversos según sistema de notificación establecido
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Debe darse respuesta oportuna y a la mayor brevedad, teniendo en cuenta la información contenida en los reportes arrojados, de esta forma se procede al inicio de los trámites correspondientes, los cuales se enlistan a continuación: 

    ol.lista-ol--cuadro
      li.mb-3 
        .lista-ol--cuadro__vineta
          span #[b 1]
        | Una vez recibida la notificación el Instituto Nacional de Vigilancia de Medicamentos y Alimentos- INVIMA, deberá proceder de la siguiente manera:
        ol.lista-ol.ms-5.mt-3.mb-3
          li 
            span.text-bold a. 
            | Enviar al reportante la confirmación del pronóstico en menor tiempo posible.
          li 
            span.text-bold b. 
            | Realizar una evaluación de forma inmediata, la cual iniciará con la toma de acciones preventivas y correctivas, con el fin de disminuir el riesgo y evitar repeticiones. Se comunicará al Ministerio de Salud y Protección Social y demás trabajadores del sector público por medio de la página web indicada.  
          li 
            span.text-bold c. 
            | Informar al Instituto Nacional de Salud, y al INVIMA que se continuará con la investigación del caso y se solicitará la resolución por la cual se reglamenta el programa nacional de tecnovigilancia. Así como informar al fabricante o responsable del caso relacionado con el evento adverso, y que figure como tal en el registro sanitario, sobre la investigación respectiva, y se procederá a ser llevada al INVIMA bajo el término del caso.
      li.mb-3
        .lista-ol--cuadro__vineta
          span #[b 2]
        | El fabricante o responsable del caso evento adverso que figure como tal en el registro sanitario, hará una investigación sobre el asunto y se procederá a ser llevada al INVIMA bajo el término del caso.
      li.mb-3 
        .lista-ol--cuadro__vineta
          span #[b 3]
        | Una vez se concluya las investigaciones oportunas, el Instituto Nacional de Vigilancia de Medicamentos y Alimentos INVIMA procederá a:
        ol.lista-ol.ms-5.mt-3.mb-3
          li 
            span.text-bold a. 
            | Cerrar definitivamente la investigación del evento o incidente adverso.
          li 
            span.text-bold b. 
            | Cerrar la investigación del evento o incidente adverso con seguimiento durante un tiempo determinado.
          li 
            span.text-bold c. 
            | Realizar acciones de prevención y correctivas.
          li 
            span.text-bold d. 
            | Tomar medidas sanitarias del caso.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El sistema de gestión del evento adverso, se describe como el conjunto de herramientas, acciones y procedimientos que se utilizan para analizar e identificar una falla o un daño al individuo o paciente con el propósito de prevenir o atenuar sus consecuencias. 
          br
          br
          | Los sistemas de vigilancia nacional de acreditación de salud de las instituciones prestadoras, incluyen en el contorno de gestión clínica, unas especialidades que exige a los establecimientos disponer de un sistema de vigilancia de eventos adversos asociados a la atención, que identifique, cuáles serán los eventos adversos y eventos centinela a vigilar de acuerdo a realidad asistencial, como son: métodos de vigilancia, cual es el procedimiento de reporte y registro de eventos adversos.

    p.mb-5(data-aos="fade-down") Cuando se presenta un evento adverso, es necesario llevar a cabo la vigilancia de las condiciones de presentación, para su manejo, teniendo en cuenta:

    .row.mb-5(data-aos="fade-down-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
          p.text-small Intentar distinguir los eventos adversos propiamente dichos, de las complicaciones propias de la patología del paciente, no asociadas al proceso de atención. 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
          p.text-small Incluir solo eventos con daño o bien agregar todos los errores o incidentes.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
          p.text-small La vulnerabilidad de los eventos. Todos los prevenibles (posibles o no) y las dificultades prácticas que se deben investigar en el caso.
      .col-sm-6.col-lg-3.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
          p.text-small Áreas de la atención a los que se están asociados: uso de medicamentos, accidentes, infecciones, quirúrgicos, todas, etc.

    p.mb-4(data-aos="fade-down") Además, se deben tener presente las definiciones del caso o evento de acuerdo con la normatividad establecida:

    ul.lista-ul.ms-3.mb-5(data-aos="fade-down")
      li.mb-0 
        span ✔ 
        | Sean consensuadas con los clínicos.
      li.mb-0 
        span ✔ 
        | Sean estandarizadas y reconocidas por todos los involucrados.
      li.mb-0 
        span ✔ 
        | Sean de uso universal o habitual o las recomendadas por organismos regulatorios (por ejemplo, del Ministerio de Salud y Protección Social).

    .cajon.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-down")
      p.mb-0 En relación a los métodos diagnósticos, es importante tener en cuenta que hay diferentes formas de detección y diagnóstico de eventos, convirtiéndose así su elección en un factor decisivo. El diagnóstico de la Trombosis Venosa Profunda (TVP), es un claro ejemplo, pues los recursos e imágenes y otros, pueden limitar la comparación de tasas de detección entre diferentes períodos de tiempo, o entre diferentes centros de salud que los hayan llevado a cabo.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-21.svg', alt='')
      .col-md-8(data-aos="fade-down-right")
        p Por lo anterior, es necesario encaminar los esfuerzos en un solo sentido, para esto se sugiere como forma de aumentar la sensibilidad de las mediciones hechas, buscar los eventos adversos presentes en grupos poblacionales de pacientes, que hayan sido re intervenidos, que tengan mayor comorbilidad (ej. ASA ≥3) o aquellos que hayan sido sometidos a procedimientos más complejos en su tratamiento.
        p Las consideraciones a tener en cuenta en la vigilancia de los métodos escogidos para el diagnóstico, requiere especial cuidado en tener presentes los eventos adversos, evitando el sesgo en los resultados, por lo que se relacionan algunos aspectos como:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Pacientes con mayor potencial de EA")
        .col-md-6.mb-4.mb-md-0
          p Los grupos de pacientes con mayor potencial de haber presentado un evento y que pueden identificarse con alguna facilidad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
      .row(titulo="Confidencialidad y difusión de resultados")
        .col-md-6.mb-4.mb-md-0
          p La publicación de datos, también puede ser en forma anónima, con el mínimo nivel de análisis, para centrar el enfoque en el aprendizaje. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
      .row(titulo="Eventos adversos graves")
        .col-md-6.mb-4.mb-md-0
          p En caso de producirse eventos adversos graves, el paciente debiera ser informado. La captura de datos puede ser anónima, o con restricciones para el acceso (por ejemplo, mediante códigos).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')

    p.mb-5(data-aos="fade-down") En los casos de eventos adversos se debe tener presente algunos aspectos no resueltos, como los que se observan en el siguiente contenido:

    .titulo-segundo.color-primario(data-aos="fade-right")
      h3 Aspectos a tener en cuenta en eventos adversos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-lg-7.col-md-9.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3
            img(src='@/assets/curso/temas/tema1/tema1-25.png' alt='')
          .tarjeta.color-primario-c
            .p-4
              p La confiabilidad del auto-diagnóstico o auto-reporte de eventos por parte de los pacientes.

      .col-lg-7.col-md-9.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3
            img(src='@/assets/curso/temas/tema1/tema1-26.png' alt='')
          .tarjeta.color-primario-c
            .p-4
              p La confiabilidad de la verificación de casos por parte de distintos estamentos profesionales o del personal.

      .col-lg-7.col-md-9.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3
            img(src='@/assets/curso/temas/tema1/tema1-27.png' alt='')
          .tarjeta.color-primario-c
            .p-4
              p La efectividad de los sistemas basados en los datos de rutina hospitalarios en comparación con otras formas de recolección especiales o de notificación voluntaria.

    p.mb-5(data-aos="fade-down") Un buen sistema de notificación debe contener varios aspectos que aclaran el propósito del informe e involucrar todos los resúmenes, junto con las características de recomendación en su seguimiento; algunos de estos aspectos pueden ser observados a continuación:
    
    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="Análisis por expertos")
        p Los informes son evaluados por expertos que conocen las circunstancias clínicas y están entrenados para reconocer las causas de los eventos. 
      .tarjeta.color-primario.p-4(titulo="Análisis oportuno")
        p Los informes son analizados pronto y las recomendaciones rápidamente difundidas a las personas interesadas, especialmente cuando haya riesgos graves. 
      .tarjeta.color-primario.p-4(titulo="Orientación sistémica")
        p Las recomendaciones deben centrarse en mejoras hacia el sistema más que hacia la persona. 
      .tarjeta.color-primario.p-4(titulo="Capacidad de respuesta")
        p Quien recibe la información debe ser capaz de promover las mejoras que fuesen necesarias.
      .tarjeta.color-primario.p-4(titulo="No punitivo")
        p Las personas que notifican están libres del miedo a represalias o sanciones como resultado de la notificación. 
      .tarjeta.color-primario.p-4(titulo="Confidencial")
        p La identificación del paciente, notificador y la institución nunca deben ser reveladas a terceras personas. 
      .tarjeta.color-primario.p-4(titulo="Independiente")
        p El programa es independiente de cualquier autoridad con poder para sancionar a la organización o al notificante.
        
    p.mb-4(data-aos="fade-down") Uno de los aspectos más importantes al desarrollar un sistema de vigilancia el cual consiste en ofrecer mecanismo para la prevención y control de las enfermedades y factores de riesgo, así como la promoción de la salud, radica en satisfacer las expectativas de los usuarios, quienes en últimas serán los que medirán su confianza y efectividad, por esta razón este sistema, se convierte en una herramienta eficaz, posibilitando la detección de los eventos adversos. 
    p.mb-5(data-aos="fade-down") Los eventos adversos (EA) presentes en todo sistema de vigilancia, deben ser controlados y monitoreados, de esta forma se garantiza la eficiencia y efectividad de dicho sistema. Por esta razón se generan algunas pautas a tener en cuenta en la elaboración de resúmenes de estos EA, las cuales se explican a continuación:

    PasosA.color-primario.mb-5(tipo="n" data-aos="fade-down")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Defina el objetivo de la vigilancia
          p Establecer cuál es la meta propuesta para llevar a cabo la promoción de la salud y la prevención y control de las enfermedades y factores de riesgo asociados.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-28.png', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')
        .col-md-6
          h3 Defina el evento (definición operacional) 
          p Es decir, debe demostrarse el proceso - tal como una variable, un término o un objeto - en términos del paso a paso o sistema específico, de ser necesario que contenga las pruebas de validación, usadas para determinar su presencia y cantidad.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Defina y describa el sistema de detección de los casos
          p Debe hacerse una explicación detallada de cómo se ha realizado la detección de los casos en donde se han presentado eventos adversos, además de incluir:
          ol.lista-ol.ms-5.mt-3.mb-3
            li 
              span.text-bold a. 
              | Quién notifica.
            li 
              span.text-bold b. 
              | A quién notifica.
            li 
              span.text-bold c. 
              | Cómo notifica.
            li 
              span.text-bold d. 
              | Cómo detectar los casos. 
            li 
              span.text-bold e. 
              | Qué fuentes de información utiliza.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-30.png', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
        .col-md-6
          h3 Defina cómo se presentará y analizará la información obtenida
          p Se trata de establecer cómo se llevará a cabo la socialización de la información, cuáles registros serán utilizados, o anexos necesarios para la comprensión, además del formato para realizarlo.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Defina cómo y a quién se difundirá la información
          p Debe establecer con anterioridad quiénes serán las personas que tendrán acceso a la información del resumen de eventos adversos que se han encontrado, recordando el sigilo y la guarda de datos o de los resultados y conclusiones. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-32.png', alt='')
          


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

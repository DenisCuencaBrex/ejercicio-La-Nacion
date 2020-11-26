const articleItems = [
    {
      blueTitle: "Por decreto. ",
      title: "Las jubilaciones aumentarán un 5% en diciembre",
      subhead: "El impuesto a las grandes fortunas, impulsado por Máximo Kirchner, obtuvo el apoyo del oficialismo y de bloques provinciales tras una maratónica sesión",
      img: "/images/img-1.jpg",
      author: "Por Silvia Stang",
      note: "https://www.lanacion.com.ar/politica/la-oposicion-es-unanime-impuesto-riqueza-terminara-nid2513727"
    },
    {
      blueTitle: "Dalma Maradona: ",
      title: "los novios y otras anécdotas sobre Diego",
      subhead: "La entrevista con Dalma transcurrió hace ocho años en un bar de Palermo cerca del que sería su departamento de soltera. Acababa de ensayar para una obra de teatro que la tendría en esos meses sobre un escenario.",
      img: "/images/img-2.jpg",
      author: "Por Adriana Balaguer",
      note: "https://www.lanacion.com.ar/lifestyle/el-auto-novios-otras-anecdotas-dalma-maradona-nid2520768"
    },
    {
      blueTitle: "Coronavirus: ",
      title: "Reportaron 283 muertos y el total es de 37.714",
      subhead: "El Gobierno informó que en las últimas 24 horas se reportaron 8593 nuevos infectados de coronavirus Covid-19 y los afectados por el virus SARS-CoV-2 en el país son 1.390.388.",
      img: "/images/img-3.jpg",
      author: "Por José María Costa",
      note: "https://www.lanacion.com.ar/sociedad/coronavirus-argentina-nid2520802"
    },
    {
      blueTitle: "Sanción. ",
      title: "La suspensión de Rosenfeld por violar el secreto profesional",
      subhead: "La Justicia confirmó la suspensión de la matrícula de Ana Rosenfeld por 'falta a la ética y violación del secreto profesional' cuando fue la abogada de Juan Darthés en diciembre de 2018",
      img: "/images/img-4.jpg",
      author: "Por Matias Sandoval",
      note: "https://www.lanacion.com.ar/espectaculos/personajes/caso-juan-darthes-ana-rosenfeld-fue-suspendida-nid2520549"
    },
    {
      blueTitle: "Pena capital. ",
      title: "Trump quiere restablecer la silla eléctrica y el fusilamiento",
      subhead: "El magnate estaría buscando que vuelvan a aplicarse esos dos métodos arcaicos antes de abandonar la Casa Blanca el próximo 20 de enero",
      img: "/images/img-5.png",
      author: "Por Ivan Molina",
      note: "https://www.lanacion.com.ar/el-mundo/trump-quiere-restablecer-silla-electrica-fusilamientos-como-nid2520874"
    },
    {
      blueTitle: "Robo. ",
      title: "El chofer de un intendente mató a un ladrón dentro de una clínica",
      subhead: "Un policía retirado abatió a un delincuente en un centro médico ubicado en Lomas de Zamora",
      img: "/images/img-6.jpg",
      author: "Por Silvia Stang",
      note: "https://www.lanacion.com.ar/seguridad/robo-el-chofer-intendente-mato-ladron-dentro-nid2520875"
    },
    {
      blueTitle: "Juan Carlos De Pablo. ",
      title: "Qué estamos negociando realmente con el FMI",
      subhead: "Nuestra relación pasada y presente con el Fondo Monetario Internacional",
      img: "/images/img-7.jpg",
      author: "Por Juan Carlos De Pablo",
      note: "https://www.lanacion.com.ar/economia/nuestra-relacion-pasada-y-presente-con-el-fondo-monetario-nid2516148"
    },
    {
      blueTitle: "Autos. ",
      title: "Test drive del Peugeot 208.",
      subhead: "Sostenido en un diseño cautivante, ofrece un excepcional confort de marcha, un buen nivel de equipamiento y tecnología, y una mecánica probada y confiable.",
      img: "/images/img-8.jpg",
      author: "Por Diego Cúneo",
      note: "https://www.lanacion.com.ar/autos/test-drive-probamos-version-manual-del-peugeot-nid2515833"
    },
    {
      blueTitle: "Un plan postergado. ",
      title: "Fernández pone en marcha el Consejo Económico y Social",
      subhead: "El presidente Alberto Fernández pondrá en marcha en los próximos días el Consejo Económico y Social, en el que estarán representados, varios sectores.",
      img: "/images/img-1.jpg",
      author: "Por Santiago Dapelo",
      note: "https://www.lanacion.com.ar/politica/embargada-alberto-fernandez-pone-marcha-consejo-economico-nid2519792"
    },
    {
      blueTitle: "Murio Diego Maradona. ",
      title: "El llanto de un ángel, metáfora de un país pobre",
      subhead: "Cuentan que lloraba con frecuencia Diego Maradona en estos meses finales, y las lágrimas decían mucho más que tantas palabras innecesarias.",
      img: "/images/img-10.jpg",
      author: "Cristian Grosso",
      note: "https://www.lanacion.com.ar/deportes/futbol/se-murio-maradona-el-llanto-angel-metafora-nid2520670"
    },
    {
      blueTitle: "Misterio. ",
      title: "Adoptaron a dos chicos en África y los abandonaron: qué dijeron",
      subhead: "El documento indica que la familia residió en Bahía Blanca, donde los hermanos, de seis años, 'fueron escolarizados y hasta participaron de actividades extracurriculares, como básquet', pero en febrero pasado se mudaron a San Martín de Los Andes.",
      img: "/images/img-11.jpg",
      author: "Por Paula Rossi",
      note: "https://www.lanacion.com.ar/sociedad/bahia-blanca-adoptaron-africa-hermanos-mellizos-abandonaron-nid2519759"
    },
    {
      blueTitle: "Historia médica. ",
      title: "Las constantes en la salud de Diego",
      subhead: "Diego Maradona murió hoy, a los 60 años, mientras atravesaba un proceso de recuperación. Su estado general de salud no era bueno.",
      img: "/images/img-12.jpg",
      author: "Por Fabiola Czubaj",
      note: "https://www.lanacion.com.ar/sociedad/murio-diego-maradona-internaciones-sobrepeso-adicciones-constantes-nid2520910"
    },
    {
      blueTitle: "Un abrazo al capitán. ",
      title: "Adiós a Diego y adiós a Maradona",
      subhead: "Aquellos que arrugan el rostro pensando en el último Maradona, con dificultades para caminar, abrazará al genio y absolverá al hombre.",
      img: "/images/img-13.jpg",
      author: "Por Jorge Valdano",
      note: "https://www.lanacion.com.ar/deportes/adios-diego-adios-maradona-nid2520809"
    },
    {
      blueTitle: "Desde adentro. ",
      title: "El llanto de Napolés, la ciudad que vibró con la magia del Diez",
      subhead: "NÁPOLES.- Es una noche triste, la más triste. Nápoles llora, Nápoles está de luto, bajo shock. Estamos en 'zona roja'.",
      img: "/images/img-14.jpg",
      author: "Por Elisabetta Pique",
      note: "https://www.lanacion.com.ar/el-mundo/diego-maradona-napoles-te-ama-noche-mas-nid2520778"
    },
    {
      blueTitle: "Mirada. ",
      title: "Diego Maradona nunca morirá",
      subhead: "Nadie amó al fútbol como Diego. Nadie. Era sagrado para él. No importaba si afuera vivía un infierno. Entraba en una cancha y se olvidaba. 'Se va la vida', cuenta en esa obra maestra de Asif Kapadia.",
      img: "/images/img-15.jpg",
      author: "Por Juan Pablo Varksy",
      note: "https://www.lanacion.com.ar/deportes/diego-maradona-nunca-morira-nid2520868"
    }
  ];

export default articleItems;


const contacts = [

{
    id:1,
    name: 'Hermioni',
    ultima_conexión: 'hace 2 horas',
    imagen_perfil: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*obDCz57X7D2Kd1XvcdI0Iw.jpeg',
    mensajes: [
        {
                id:1,
                text: 'Hola Hermioni! como estas? ',
                send_by_me:true,
                is_read:true,

        },
        {
              id:2,
                text: 'Roooo! tanto tiempo! Bien y vos? Cuando nos venis a visitar por Hogwarts? Te estamos esperando!! ',
                send_by_me:false,
                is_read:false,



        }
    ]


},
{
    id:2,
    name: 'Harry Potter',
    ultima_conexión: 'hace 20 minutos',
    imagen_perfil: 'https://cdn.shopify.com/s/files/1/1943/7257/files/Harry-Potter_large_0dad831f-4b4a-4db5-b0eb-f96e70436102_large.jpg?v=1514443105',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! ¿Cuando venis?, con los chicos te estamos esperando',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: ' Mañana salgo para allá, debemos practicar el expecto Patronum',
                send_by_me:true,
                is_read:true,

        }
    ]


},
{
    id:3,
    name: 'Toretto',
    ultima_conexión: 'hace 3 horas',
    imagen_perfil: 'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/07/dominic-toretto.jpg',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! En cinco minutos te paso a buscar',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Dommm, dale ¿En que venis?',
                send_by_me:true,
                is_read:true,

        },
        {
              id:3,
                text: 'Tengo el Dogde! ',
                send_by_me:false,
                is_read:false,

        }
    ]


},
{
    id:4,
    name: 'Shakira',
    ultima_conexión: 'hace 1 hora',
    imagen_perfil: 'https://cdn-3.expansion.mx/dims4/default/34975fc/2147483647/strip/true/crop/1200x630+0+0/resize/1200x630!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fda%2F59%2F678467414e2da15b1195d85bbb93%2Fplantilla-nueva-2.jpg',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! Me pasarías la receta de tus alfajorcitos de maicena? Son muy ricos!! ♥',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Hola Shakiiii!! siii,  aguantamente cinco que te mando un audio',
                send_by_me:true,
                is_read:true,

        },
        {
              id:3,
                text: 'dale daleeee, te espero! ',
                send_by_me:false,
                is_read:false,

        }
    ]


},
{
    id:5,
    name: 'Wanda',
    ultima_conexión: 'hace 45 minutos',
    imagen_perfil: 'https://fotos.perfil.com/2026/02/27/trim/950/534/wanda-nara-2193559.jpg?webp',
    mensajes: [
        {
                id:1,
                text: 'Hola Wan!, te mande por correo las fotos que sacamos en la costa',
                send_by_me:true,
                is_read:true,

        },
        {
              id:2,
                text: 'RO!, sii recien me llegó. ¿El proximo finde vamos de nuevo?',
                send_by_me:false,
                is_read:false,

        },
        {
              id:3,
                text: 'siii, aprovechamos a tomar sol! ',
                send_by_me:true,
                is_read:true,

        }
    ]


},
{
    id:6,
    name: 'Seguro Auto',
    ultima_conexión: 'hace 2 horas',
    imagen_perfil: 'https://www.argentina.gob.ar/sites/default/files/seguro-automotor-landing_400.png',
    mensajes: [
        {
                id:1,
                text: 'Hola Rocío, soy Pedro. El jueves 12/03 tenemos turno para realizar la inspección en el taller. Te espero a las 15hrs. ',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Hola Pedro, ok muchas gracias',
                send_by_me:true,
                is_read:true,

        }
       
    ]


},
{
    id:7,
    name: 'Directora',
    ultima_conexión: 'hace 2 hora',
    imagen_perfil: "/imagenes/directora.png",
    mensajes: [
        {
                id:1,
                text: 'Hola Rocío. Enviamos por correo los horarios del primer cuatrimestre',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Hola Samanta! OK. Ya lo veo. ¿Cuantos estudiantes tenemos en primer año?',
                send_by_me:true,
                is_read:true,

        },
        {
              id:3,
                text: '23 en 1°2° y 26 en 1°2°',
                send_by_me:false,
                is_read:false,

        },
         {
              id:4,
                text: 'ok listo, ahora armo las listas',
                send_by_me:true,
                is_read:true,

        }
    ]


},
{
    id:8,
    name: 'Rotiseria',
    ultima_conexión: 'hace 30min',
    imagen_perfil: "/imagenes/rotiseria.png",
    mensajes: [
        {
                id:1,
                text: 'Buenas noches',
                send_by_me:true,
                is_read:true,

        },
        {
              id:2,
                text: 'Hola! buenas noches',
                send_by_me:false,
                is_read:false,

        },
        {
              id:3,
                text: 'Te encargo una pizza explosiva, puede ser? ',
                send_by_me:true,
                is_read:true,

        },
          {
              id:4,
                text: 'si! para retirar o llevar? ',
                send_by_me:false,
                is_read:false,

        },
          {
              id:5,
                text: 'Para retirar, en cuanto esta?',
                send_by_me:true,
                is_read:true,

        },
          {
              id:6,
                text: 'dale, en 25 minutos esta lista',
                send_by_me:false,
                is_read:false,

        },
         {
              id:7,
                text: 'dale, gracias',
                send_by_me:false,
                is_read:false,

        }
        
    ]


}
]

export default contacts
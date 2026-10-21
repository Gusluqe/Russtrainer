// Tipos y textos por defecto del contenido editable desde /admin.
// Este archivo NO importa nada de servidor: se usa también en componentes cliente.

export type PasoProceso = { titulo: string; descripcion: string };
export type Testimonio = { handle: string; texto: string };

export type PlanContenido = {
  nombre: string;
  tagline: string;
  features: string[];
  nota: string;
  cta: string;
  foto: string;
};

export type Contenido = {
  hero: {
    badge: string;
    titulo: string;
    tituloAccent: string;
    frase: string;
    subtitulo: string;
    nota: string;
    foto: string;
  };
  dolores: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    preguntas: string[];
    cita: string;
    lema: string;
  };
  sobre: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    parrafos: string[];
    foto: string;
  };
  proceso: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    subtitulo: string;
    pasos: PasoProceso[];
    frase: string;
  };
  testimonios: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    subtitulo: string;
    lista: Testimonio[];
  };
  guia: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    subtitulo: string;
  };
  planes: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    subtitulo: string;
    frase: string;
    videollamada: PlanContenido;
    online: PlanContenido;
    mixto: PlanContenido;
  };
  comoEmpezar: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    subtitulo: string;
    pasos: PasoProceso[];
    nota: string;
  };
  novedades: {
    kicker: string;
    titulo: string;
    tituloAccent: string;
    frase: string;
    subtitulo: string;
    nota: string;
    boton: string;
  };
  footer: {
    descripcion: string;
    frase: string;
  };
};

export const CONTENIDO_DEFAULT: Contenido = {
  hero: {
    badge: 'No te adaptás al plan, el plan se adapta a vos',
    titulo: 'Entrenadora personal online',
    tituloAccent: 'con un plan hecho para vos',
    frase: 'Entrenamos desde el amor, no desde la exigencia.',
    subtitulo:
      'Dejá de seguir rutinas genéricas. Tu cuerpo, tu tiempo, tu vida — un plan personalizado que se adapta a vos, no al revés.',
    nota: 'Planes personalizados + acompañamiento constante',
    foto: '/foto1.png',
  },
  dolores: {
    kicker: '¿Te identificás?',
    titulo: 'Sabemos cómo',
    tituloAccent: 'te sentís',
    preguntas: [
      '¿No te sentís cómoda con tu cuerpo?',
      '¿Te frustrás al no ver resultados?',
      '¿No sabés qué hacer en el gimnasio?',
      '¿Te exigís demasiado y terminás abandonando?',
      '¿Empezás motivada pero no lográs sostener el hábito?',
    ],
    cita: 'No buscan solo cambiar su cuerpo. Buscan sentirse mejor con ellas mismas y dejar de vivir el entrenamiento como una obligación.',
    lema: 'Entrenar desde el amor, no desde la exigencia',
  },
  sobre: {
    kicker: 'Sobre Russ',
    titulo: 'Tu entrenadora personal',
    tituloAccent: 'de confianza',
    parrafos: [
      'Soy Russ, y mi misión es ayudarte a lograr la transformación que venís buscando hace tiempo. No prometo milagros, prometo **disciplina, seguimiento real y resultados comprobables.**',
      'Con años de experiencia en entrenamiento personalizado, entendí que cada cuerpo es diferente. Por eso no trabajo con planes genéricos. Cada programa que diseño es único, pensado para vos y tus objetivos específicos.',
      'Mi método combina entrenamiento efectivo, nutrición orientada a tus metas y el acompañamiento que necesitás para no rendirte. **Estoy con vos en cada paso del camino.**',
    ],
    foto: '/foto7.png',
  },
  proceso: {
    kicker: 'Proceso',
    titulo: 'Entrenar puede ser',
    tituloAccent: 'distinto',
    subtitulo:
      'No se trata de seguir una rutina más. Se trata de tener un plan pensado para tu cuerpo, tu momento y tu vida. Acá no vas a estar sola.',
    pasos: [
      {
        titulo: 'Empezamos con vos',
        descripcion:
          'Videollamada inicial + encuesta personalizada previa. Entiendo tu historia, tus objetivos y tu punto de partida.',
      },
      {
        titulo: 'Tu plan 100% personalizado',
        descripcion:
          'Te doy acceso a la app con tu rutina, con videos explicativos, movilidad articular y estiramientos. Adaptada a tu nivel, disponibilidad y si entrenás en casa o gimnasio.',
      },
      {
        titulo: 'Acompañamiento constante',
        descripcion:
          'Seguimiento diario por WhatsApp. Respuesta rápida, dudas resueltas, ajustes en tiempo real. No vas a estar sola en el proceso.',
      },
      {
        titulo: 'Ajustes reales',
        descripcion:
          'El plan no es fijo. Evoluciona con vos según tu progreso y tu día a día. Si algo no funciona, lo cambiamos.',
      },
      {
        titulo: 'Mucho más que entrenamiento',
        descripcion:
          'Guía de hábitos saludables y enfoque integral: cuerpo, mente y bienestar. Porque el objetivo es que te sientas bien, no solo que te veas bien.',
      },
    ],
    frase: 'No es solo entrenar. Es aprender a sostener un proceso que te haga bien.',
  },
  testimonios: {
    kicker: 'Testimonios',
    titulo: 'Ellas ya empezaron',
    tituloAccent: 'su proceso',
    subtitulo: 'Historias reales de mujeres que decidieron entrenar distinto.',
    lista: [
      {
        handle: '@rocio.romano.581',
        texto:
          'Gracias por ayudarme a salir de mi lugar de confort y empezar a moverme por mí para sentirme mejor, no solo físicamente sino también mentalmente. No sos solo entrenadora, sos un sostén para no caer.',
      },
      {
        handle: '@martuservin',
        texto:
          'Se nota el amor que le ponés a lo que hacés, desde el listado que enviás los domingos hasta cómo adaptás cada ejercicio. Gracias por no ser solo una coach de gimnasio, sino alguien que me escucha y me motiva a mejorar cada día.',
      },
      {
        handle: '@kaleidoscopioarte',
        texto:
          'Lo que destaco es su energía y la forma en que te impulsa a superarte. Gracias a su acompañamiento mejoré mi confianza y constancia. Se nota tu compromiso y dedicación.',
      },
      {
        handle: '@claudiagutierrezx',
        texto:
          'Entrenar con Russ es sentirme acompañada y motivada. Resuelve todas mis dudas con claridad y corrige mis ejercicios al momento cuando le envío videos. Se nota su dedicación y la pasión que tiene por lo que hace, y eso marca totalmente la diferencia.',
      },
      {
        handle: '@_dkatherine',
        texto:
          'Entrenar contigo no se siente como solo cumplir con los entrenamientos, se siente como una amiga que me ayuda a ser mi mejor versión. No había disfrutado tanto los cambios hasta que comencé a entrenar contigo. ¡Gracias por ser mi coach e inspirarme todos los días!',
      },
      {
        handle: '@elizabethsoto',
        texto:
          'Eres la magia detrás de mi progreso. Más que una entrenadora, es mi mayor motivación. Me enseñas que la fuerza no está solo en los músculos, sino en la mente.',
      },
      {
        handle: '@iarilandriel',
        texto:
          'Desde que entreno contigo mejoró mi autoestima interna, mi fuerza. Ojalá puedas dimensionar la llegada que tenés en cada una de nosotras. Me cambiaste por completo. Agradezco tenerte como entrenadora, y tenerte por muchos años más. Ahora sí, GRACIAS.',
      },
    ],
  },
  guia: {
    kicker: 'Un regalo para vos',
    titulo: 'Tu guía, con tu',
    tituloAccent: 'código',
    subtitulo:
      'Si Russ te compartió un código, ingresalo acá y descargá tu guía en PDF. Es tuya, para siempre.',
  },
  planes: {
    kicker: 'Planes',
    titulo: 'Elegí cómo querés',
    tituloAccent: 'empezar',
    subtitulo:
      'Tres formas de entrenar conmigo, todas pensadas para vos. Elegí la que mejor se adapte a tu vida.',
    frase:
      'Todos los planes se adaptan a tu objetivo, a tu nivel y a tu rutina. No importa por dónde empieces, lo importante es que sea un proceso que puedas sostener.',
    videollamada: {
      nombre: 'Plan por Videollamada',
      tagline: 'Entrenamos juntas en vivo. Ideal si entrenás en casa.',
      features: [
        'Entrenamos en vivo conmigo por videollamada, 2 sesiones por semana',
        'Plan personalizado según tu objetivo y tu nivel',
        'Corrección de técnica y acompañamiento en cada ejercicio',
        'Horarios disponibles por ahora: lunes 7:00 a. m., miércoles 7:00 a. m., miércoles 20:00 hs y viernes 7:00 a. m.',
        'Si querés entrenar una tercera vez por semana, esa sesión es online, con la rutina que yo te preparo y te envío',
      ],
      nota: '',
      cta: 'Quiero este plan',
      foto: '/plan-online-personalizado.webp',
    },
    online: {
      nombre: 'Plan Online',
      tagline: 'Entrená a tu ritmo, con mi guía y mi seguimiento.',
      features: [
        'Rutina 100% personalizada según tu objetivo, tu nivel y el equipo que tengas (en casa o en el gym)',
        'Entrenás a tu ritmo y sin horarios fijos',
        'Seguimiento conmigo para resolver tus dudas y ajustar el plan',
        'Te explico cada ejercicio para que lo hagas con buena técnica',
        'Accedés a tu rutina en mi app con tu nombre y registrás lo que hacés en cada ejercicio',
      ],
      nota: '',
      cta: 'Quiero empezar',
      foto: '/plan-online-basico.webp',
    },
    mixto: {
      nombre: 'Plan Mixto',
      tagline: 'Presencial + online: lo mejor de los dos mundos.',
      features: [
        '1 sesión presencial por semana conmigo',
        'Las demás sesiones son online, con rutina personalizada',
        'Seguimiento durante toda la semana',
        'Disponibilidad limitada: depende de la ubicación, los horarios y el gym',
      ],
      nota: '',
      cta: 'Consultar disponibilidad',
      foto: '/plan-presencial-online.webp',
    },
  },
  comoEmpezar: {
    kicker: 'Cómo empezar',
    titulo: 'Empezar es',
    tituloAccent: 'más simple de lo que pensás',
    subtitulo: 'Es igual para los tres planes.',
    pasos: [
      {
        titulo: 'Realizás el pago',
        descripcion: 'Elegís tu plan y confirmás tu lugar con el pago.',
      },
      {
        titulo: 'Te envío un formulario',
        descripcion: 'Para conocerte mejor: tu objetivo, tu nivel, tu rutina y el equipo que tenés.',
      },
      {
        titulo: 'Videollamada corta (opcional)',
        descripcion: 'Si querés, agendamos una videollamada corta para conocernos y resolver dudas.',
      },
      {
        titulo: 'Recibís tu planificación',
        descripcion: 'En 24 a 48 horas te entrego tu planificación personalizada.',
      },
    ],
    nota: 'Mi contacto principal es WhatsApp. También me encontrás en Instagram: @russ.trainer',
  },
  novedades: {
    kicker: 'Novedades',
    titulo: 'Un espacio para',
    tituloAccent: 'Mujeres Reales',
    frase: 'Entrenar no tiene por qué ser complicado.',
    subtitulo:
      'Cada semana comparto consejos prácticos, herramientas y motivación para ayudarte a disfrutar el entrenamiento, crear hábitos duraderos y sentirte cada vez más fuerte.',
    nota: 'Sin spam. Solo contenido que realmente te aporte valor.',
    boton: 'Quiero ser parte',
  },
  footer: {
    descripcion:
      'Transformá tu cuerpo y tu vida con entrenamiento personalizado. Resultados reales, seguimiento constante.',
    frase: 'Entrenamos desde el amor, no desde la exigencia.',
  },
};

// Renderiza **negrita** dentro de los párrafos editables sin permitir HTML.
export function partesNegrita(texto: string): { texto: string; negrita: boolean }[] {
  return texto
    .split('**')
    .map((parte, i) => ({ texto: parte, negrita: i % 2 === 1 }))
    .filter((p) => p.texto.length > 0);
}

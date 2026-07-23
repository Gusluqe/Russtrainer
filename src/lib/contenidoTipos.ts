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
    basico: PlanContenido;
    personalizado: PlanContenido;
    presencial: PlanContenido;
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
          'Rutina en Notion, 4 semanas, con videos explicativos, movilidad articular y estiramientos. Adaptado a tu nivel, disponibilidad y si entrenás en casa o gimnasio.',
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
    subtitulo: 'Resultados reales que podés sostener. Sin importar por dónde empieces.',
    frase:
      'No importa por dónde empieces. Lo importante es que sea un proceso que puedas sostener.',
    basico: {
      nombre: 'Plan Online Básico',
      tagline: 'Ideal si querés una guía clara y entrenar sola.',
      features: [
        'Rutina mensual Casa o Gym según tu objetivo (bajar de peso, definir o aumentar masa)',
        'Videos cortos explicativos de cada ejercicio',
        'Guía general de pesos según tu nivel',
        'Movilidad articular y estiramientos básicos',
        'Acceso al plan por 30 días',
      ],
      nota: 'Sin seguimiento ni ajustes durante el mes. Yo te doy la estructura y vos la ejecutás.',
      cta: 'Quiero este plan',
      foto: '/plan-online-basico.webp',
    },
    personalizado: {
      nombre: 'Plan Online Personalizado',
      tagline: 'Todo lo que necesitás para transformarte desde donde estés.',
      features: [
        'Planificación mensual 100% personalizada según tu objetivo',
        'Videos cortos explicativos de cada ejercicio',
        'Guía de pesos según tu nivel y progreso',
        'Guía de hábitos saludables: alimentación consciente y amor propio',
        'Apoyo y seguimiento vía WhatsApp en todo el proceso',
        'Movilidad articular y estiramientos para prevenir lesiones',
      ],
      nota: '',
      cta: 'Quiero empezar',
      foto: '/plan-online-personalizado.webp',
    },
    presencial: {
      nombre: 'Plan Presencial + Online',
      tagline: 'Acompañamiento cercano: lo mejor de ambos mundos.',
      features: [
        'Evaluación inicial presencial',
        'Rutina personalizada (online)',
        '4 clases presenciales al mes (1 por semana, 60–75 min)',
        'Videos explicativos de los ejercicios',
        'Guía de pesos y progresiones',
        'Movilidad articular y estiramientos',
        'Guía de hábitos saludables',
        'Seguimiento vía WhatsApp',
      ],
      nota: '',
      cta: 'Consultar disponibilidad',
      foto: '/plan-presencial-online.webp',
    },
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

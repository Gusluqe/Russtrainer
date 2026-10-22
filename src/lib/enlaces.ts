// Links de WhatsApp y redes, en un solo lugar.
const NUM = '5491168124464';
export const wa = (texto: string) => `https://wa.me/${NUM}?text=${encodeURIComponent(texto)}`;
export const WA_EMPEZAR = wa('Hola! Quiero empezar');
export const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';
export const APP_URL = 'https://russtrainer01-cpu.github.io/RussTrainer-rutina/';

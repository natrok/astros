function test({texto}) {
  // if (typeof currentItems !== 'object' || currentItems === null) {
  if (typeof texto !== 'string' || texto === null) {
    throw new TypeError('Expected an string');
  }
  return {
    texto, // Esto sí devuelve un objeto válido
    mensaje: `Mensaje: ${texto}`,
  }
}

function carousel(parametros) {
  if (parametros === null) {
     throw new TypeError('Expected an object');
  }

  return {     
    currentSlide: 0,
    totalSlides: 4,
    index: 0, 
    items: [],
    init() {
      this.items = parametros;
    },
   
    next() { this.index = (this.index + 1) % this.totalSlides },      
    prev() { this.index = (this.index - 1 + this.totalSlides) % this.totalSlides },

    startAutoplay() {
       //setInterval(() => this.next(), 3000);
      }
    };
}
// Hacerlo global para que Alpine pueda acceder
window.carousel = carousel;
window.test = test;
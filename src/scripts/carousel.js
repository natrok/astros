function carousel() {
    return {
      currentSlide: 0,
        totalSlides: 4,
        index: 0, 
      items: ['Carta 88', 'Carta 2', 'Carta 3', 'Carta 4', 'Carta 5', 'Carta 6'],
      init() {
        //this.totalSlides = document.querySelectorAll('.carousel-card').length;
        console.log(this.totalSlides);
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

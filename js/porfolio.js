// DESCRIPCION PROYECTO TAREAS
let btnDescTareas = document.getElementById('btn-desc-tareas');
btnDescTareas.addEventListener('click',mostrarDescripcionTareas);

let btnOcultarDescTareas = document.getElementById('btn-ocultar-desc-tareas');
btnOcultarDescTareas.addEventListener('click',ocultarDescripcionTareas);

let textDescTareas = document.getElementById('text-desc-tareas'); 

function mostrarDescripcionTareas() {
    textDescTareas.style.height='190vw'
    btnDescTareas.style.display='none'
}

function ocultarDescripcionTareas() {
    textDescTareas.style.height='0'
    btnDescTareas.style.display='block'
}



// DESCRIPCION PROYECTO CARRERA
let btnDescCarrera = document.getElementById('btn-desc-carrera');
btnDescCarrera.addEventListener('click',mostrarDescripcionCarrera);

let btnOcultarDescCarrera = document.getElementById('btn-ocultar-desc-carrera');
btnOcultarDescCarrera.addEventListener('click',ocultarDescripcionCarrera);

let textDescCarrera = document.getElementById('text-desc-carrera'); 

function mostrarDescripcionCarrera() {
    textDescCarrera.style.height='260vw'
    btnDescCarrera.style.display='none'
}

function ocultarDescripcionCarrera() {
    textDescCarrera.style.height='0'
    btnDescCarrera.style.display='block'
}



// ----------------------------------- Carrusel


const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carrrousel-item');

// Contadores
let counter = 0;
let size = images[0].clientWidth; // El tamaño de la primera imagen

// Función para mover el carrusel
function updateCarouselPosition() {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Mover al siguiente
document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= images.length - 1) return; // Evitar avanzar más allá de la última imagen
    counter++;
    updateCarouselPosition();
});

// Mover al anterior
document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) return; // Evitar retroceder más allá de la primera imagen
    counter--;
    updateCarouselPosition();
});

// Recalcular el tamaño cuando la ventana cambie de tamaño
window.addEventListener('resize', () => {
    size = images[0].clientWidth; // Recalcula el tamaño de la imagen
    updateCarouselPosition(); // Ajusta la posición del carrusel
});





//------------------------ Animacion elevar

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-element");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.9) {
          // Si el 90% o más del elemento está visible, añadimos la clase
          entry.target.classList.add('animated');
        } else {
          // Si el elemento ya no está visible en al menos un 90%, quitamos la clase
          entry.target.classList.remove('animated');
        }
      });
    }, {
      threshold: 0.9 // El 90% del elemento debe estar visible para disparar la animación
    });
  
    // Observamos cada uno de los elementos seleccionados
    elements.forEach(element => observer.observe(element));
  });
  
// DESCRIPCION PROYECTO TAREAS
let btnDescTareas = document.getElementById('btn-desc-tareas');
btnDescTareas.addEventListener('click',mostrarDescripcionTareas);

let btnOcultarDescTareas = document.getElementById('btn-ocultar-desc-tareas');
btnOcultarDescTareas.addEventListener('click',ocultarDescripcionTareas);

let textDescTareas = document.getElementById('text-desc-tareas'); 

function mostrarDescripcionTareas() {
    textDescTareas.style.height='28em'
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
    textDescCarrera.style.height='42em'
    btnDescCarrera.style.display='none'
}

function ocultarDescripcionCarrera() {
    textDescCarrera.style.height='0'
    btnDescCarrera.style.display='block'
}
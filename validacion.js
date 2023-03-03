function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
}
  
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    ];
  
const mensajesDeError = {
    nombre: {
      valueMissing: "Este campo no puede quedar vacío",
    },
    email: {
      valueMissing: "Este campo no puede quedar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
      valueMissing: "Este campo no puede quedar vacío",
    },
    mensaje: {
      valueMissing: "Este campo no puede quedar vacío",
    },
};
  
const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};
  
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}


const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

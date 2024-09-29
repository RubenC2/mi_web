// Formulario y validación //

const formulario = document.querySelector('.contactForm');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 

// alert('Mensaje enviado, muchas gracias.');

console.log(event.target.elements);
//Texto
console.log(event.target.nombre.value);
console.log(event.target.apellidos.value);
console.log(event.target.email.value);
console.log(event.target.mensaje.value);
console.log(event.target.privacidad.checked);

const nombre = event.target.nombre.value;
const apellidos = event.target.apellidos.value;
const email = event.target.email.value;
const mensaje = event.target.mensaje.value;
const privacidad = event.target.privacidad.checked;

let msj = "";

if (nombre.length < 2 || nombre.length > 40 ) {
    console.log("El nombre tiene que tener entre 2 y 40 caracteres");
    msj += "El nombre tiene que tener entre 2 y 40 caracteres\n";

}

if (apellidos.length < 2 || apellidos.length > 40) {
    console.log("Los apellidos tienen que tener entre 2 y 40 caracteres");
    msj += "Los apellidos tienen que tener entre 2 y 40 caracteres\n";
}

if ((!email.endsWith(".com") && !email.endsWith(".es")) || !email.includes("@"))
    {
    console.log("Error, email no válido:" + email);
    msj += "Error, email no válido: " + email + "\n";
}

if (mensaje.length < 2 || mensaje.length > 250 ) {
    console.log("El mensaje tiene que tener entre 2 y 250 caracteres");
    msj += "El mensaje tiene que tener entre 2 y 250 caracteres\n";
}

if (privacidad === false) {
    console.log("Por favor acepta la política de privacidad");
    msj += "Por favor acepta la política de privacidad\n";
}

if (msj.length !=0) {
    document.getElementById("mensajeError").innerHTML= "";
    alert(msj);

    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "10px";
    p.appendChild(mensaje);

    document.getElementById("mensajeError").appendChild(p);
} 

else {
    alert("Gracias por contactar conmigo.");
    event.target.submit();
}
})




//  // Comprobar si hay errores
//  if (msj.length != 0) {
//    alert(msj); //imprime mensaje final de error
//    //document.body.innerHTML += msj;
//    let p = document.createElement("pre");
//    let mensaje = document.createTextNode(msj);
//    p.style.color = "#DD1C1A";
//    p.style.fontSize = "16px";
//    p.appendChild(mensaje);
//
//    document.getElementById("contact").appendChild(p); // dibuja resultado
//  }
//  else{
//    //Enviar formulario
//    //document.querySelector("form").submit();
//    alert("Formulario enviado con éxito");
//    event.target.submit();
//  }
//});
//
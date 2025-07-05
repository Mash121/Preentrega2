/*En este archivo vamos a definir el comportamiento del formulario*/
/*extraer los valores de los campos*/

//Declaramos el boton y le asignamos el evento//

let btn = document.getElementById('enviar');
btn.addEventListener('click', mostrarMensaje);

function mostrarMensaje(evt) {
  evt.preventDefault(); // Evita que el formulario se envíe realmente

  // Obtener valores del formulario
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let edad = parseInt(document.getElementById('edad').value);
  let mensajeUsuario = document.getElementById('msj').value;

  // Crear mensaje
  let mensajeFinal = `Bienvenido/a ${nombre} ${apellido}, usted `;
  mensajeFinal += (edad > 17)
    ? `es mayor, mensaje: ${mensajeUsuario}`
    : `es menor, mensaje: ${mensajeUsuario}`;

  // Mostrar el mensaje (en consola o podés mostrarlo en la página)
  console.log(mensajeFinal);
  
  // Para mostrarlo en el HTML podés agregar este div en tu HTML:
  // <div id="resultado"></div>
  let resultado = document.getElementById('resultado');
  if (!resultado) {
    resultado = document.createElement('div');
    resultado.id = 'resultado';
    document.getElementById('Formulario').appendChild(resultado);
  }
  resultado.innerText = mensajeFinal;
 /*/
 let contenedor = document.getElementById("mensaje");
    contenedor.innerText = `Hola ${txtNombre} ${txtApellido}, tenés ${edad} años.`;
/*/
    
}



///*global window */
///*global alert */
/*jslint browser: true, for:true */

//JavaScript Document

/**Curso: HMTL5 - Pildoras Informáticas - API Communication
 * Origin: Capitulo63.html ==> AJAX
 */

// "use strict";

//1. Definición de Objetos y Variables
var zonaDatos;
var botonLeerFichero;
var zonaProgreso;
var zonaPorcentaje;

//1.1 Extracción de elementos desde HTML
zonaDatos = document.getElementById("zona-datos");
botonLeerFichero = document.getElementById("boton-leer-fichero");
zonaProgreso = document.getElementById("zona-progreso");
zonaPorcentaje = document.getElementById("zona-porcentaje");

//2. Definición de Funciones


// Hacemos que aparezca la barra cuando se inicia la descarga
function comenzarBarra() {
    "use strict";

    zonaProgreso.innerHTML = "<progress value = '0' max = '100'></progress>";
}


// Hacemos que la barra vaya creciendo según se produce la descarga
function estadoBarra(e) {
    "use strict";

    var porcentaje;
    var barraProgreso;

    porcentaje = parseInt(e.loaded/e.total*100);
    barraProgreso = zonaDatos.querySelector("progress");

    barraProgreso.value = porcentaje;

    zonaPorcentaje.innerHTML = porcentaje + " %";
}



function mostrarContenido() {
    "use strict";

//Publicamos en zonaDatos el contenido del evento generado
// por el objeto creado con el constructor y que se
// ha abierto con open y le pedimos que lo haga en
// formato texto con responseText
    zonaProgreso.innerHTML = "Archivo leido.";
}



function leerFichero() {
    "use strict";

    var url;
    var solicitud;
// Si el fichero está alojado en la misma ubicación que el documento HTML, no es necesario especificar la ruta, por ejemplo cuando está en el root
    url = "video/video_pruebas.mp4";

// Creamos un objeto "solicitud" con el constructor "new" de XMLHttpRequest();
    solicitud = new XMLHttpRequest();

//Ponemos el objeto a la escucha para cuando empiece a cargar
    solicitud.addEventListener("loadstart", comenzarBarra, false);

//Ponemos el objeto a la escucha para cuando empiece a avanzar
//Progress se ejecuta una vez cada 50ms
    solicitud.addEventListener("progress", estadoBarra , false);

//Ponemos el objeto a la escucha y esperamos que cargue
    solicitud.addEventListener("load", mostrarContenido, false);

//Abrimos la conexión con un método GET a la dirección url
    solicitud.open("GET", url, true);

//Especificamos la información que vamos a enviar que en este caso es ninguna (null)
    solicitud.send(null);
}



function comenzar() {
    "use strict";

    botonLeerFichero.addEventListener("click", leerFichero, false);
}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);

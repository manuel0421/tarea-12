window.onload = cargarImagen;

var i = 0; //VARIABLE

var misImagenes = new Array(10); //Los datos que queremos ingresar

function cargarImagen() { //Cargar las Imagenes de los carros

misImagenes[0] = "img/1.webp";

misImagenes[1] = "img/2.jfif";

misImagenes[2] = "img/3.webp";

misImagenes[3] = "img/4.jfif";

misImagenes[4] = "img/5.jfif";

misImagenes[5] = "img/6.jpg";

misImagenes[6] = "img/7.jfif";

misImagenes[7] = "img/8.webp";

misImagenes[8] = "img/9.jfif";

misImagenes[9] = "img/10.jpg";

document.imgSrc.src = misImagenes[i]; //Integrar las imagenes 

}
function siguiente() { // Cuando estemos en la ultima imagen e intentemos seguir avanzando nos saldra un mensaje
    if (i >= 9) {
    i = misImagenes.length - 1;
    window.alert("Última Imagen en la galería"); //Alerta de la ultima imagen
    } else {
    i++; // Avanzar 1 en 1
    }
    document.imgSrc.src = misImagenes[i]; // Imprimir imagenes 
    }  
    function anterior() { // Cuando intentemos retroseder de la primera imagen sale un mensaje 
    if (i < 1) {
    i = 0;
    window.alert("Primera Imagen en la galería"); //Alerta si quieres retroceder de la primera imagen 
    } else {
    i--; // Retroceder 1 a 1
    }
    document.imgSrc.src = misImagenes[i];// Imprimir las imagenes 
    }
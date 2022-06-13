window.addEventListener("load", function(){

    /*Acceder al elemento html que vamos a modificar */

    var carrusel = document.getElementById("foto"); 

    // carrusel.src="images/foto2.jpg";//

    /*Crear un arreglo de imÃ¡genes */

    var imagenes = ["Tanjiro.jpg","Tanjiro2.jpg","Tanjiro3.jpg","Tanjiro4.jpg"]

    console.log(imagenes[1]);

    /*Crear un contador */

    var contador = 1;

    function cambioImagen(){
        /*Muestra la imagen en el navegador */
        carrusel.src = "img/"+imagenes[contador];

        if(contador<3){
            contador++;
        }else{
            contador=0;
        }

    }


    //Llamar a la funciÃ³n cada 3 segundos

    this.setInterval(cambioImagen,2500);

});
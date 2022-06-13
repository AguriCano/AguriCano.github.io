const imagenes = document.querySelectorAll('.imagen-port')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight= document.querySelector('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=> {
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImagen')
        
    }
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src= imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImagen')
}
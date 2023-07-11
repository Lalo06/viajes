import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function () {
            //remover activo
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active');
            });
            //Agregar la clase "active" al enlnce actual
            this.classList.add('active')
            
            //Obtener el contenido correspondiente segun el enlace
            let  contenido = obtenerContenido(this.textContent)
            
            // mostrar el contenido del DOM
            tituloElemento.innerHTML = contenido.titulo
            subtituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
            precioElemento.innerHTML = contenido.precio
            
        });
    }
    );
    //Funcion para traer la informacon correcta desde ciudades.js
    function obtenerContenido(enlace){
        let contenido = {
            'Barcelona' : barcelona,
            'Roma': roma,
            'París': paris,
            'Londres': londres
        };
return contenido[enlace];
    }

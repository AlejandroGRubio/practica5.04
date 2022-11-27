"use strict";

//Saca los datos de la url y los devuelve.
export function devolverDatos(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos.results;
         
     }));
 
 
}



//Otro formato para sacar los datos de la url para devolverlo.
export function devolverDatosOtro(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos;
         
     }));
 
 
}




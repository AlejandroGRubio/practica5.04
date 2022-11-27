"use strict";


export function devolverDatos(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos.results;
         
     }));
 
 
}




export function devolverDatosOtro(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos;
         
     }));
 
 
}




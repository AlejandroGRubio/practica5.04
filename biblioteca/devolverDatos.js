"use strict";
import { devolverDatos, devolverDatosOtro } from "./datosAPI.js";
import * as imprimir from "./imprimirDatos.js";

//Genera una id aleatoria.
export function generarId(numLetras){


    var letras = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    let codId = ``;

    for (let i = 0; i < numLetras; i++) {
        
        codId = `${codId}${letras[Math.floor(Math.random() * letras.length)]}`;
    }

    return codId;


}



//Devuelve las películas.
export const devolverListaPelis = async (url, idUbi) => {
    let datosLista = await devolverDatos(url);

    imprimir.imprimirListaPelis(datosLista, idUbi);

    
}
//Devuelve los datos de las pelis.
export const devolverDatosPelis = async (nomPeli, url, idUbi) => {

    let datosPelis = await devolverDatos(url);

    imprimir.imprimirDatosPelis(nomPeli, datosPelis, idUbi);


}
//Devuelve los datos de los personajes.
export const devolverDatoPersonaje = async (urlObj) => {

    let contar = 0;


    while (contar < 10) {

        var url = urlObj[contar];
        
        let datosPersonaje = await devolverDatosOtro(url);

        imprimir.imprimirInfoPersonaje(datosPersonaje);

        contar++;

        

    }


    


}
//Devuelve los datos de las naves.
export const devolverDatoNave = async (arrUrl, idUbi) => {

    var contar = 0;

    while (contar < arrUrl.length) {
        

        var url = arrUrl[contar];

        let datosNave = await devolverDatosOtro(url);

        imprimir.imprimirDatosNave(datosNave, idUbi);


        contar++;

    }


}


//Devuelve los datos de los vehículos.
export const devolverDatoVehi = async (arrUrl, idUbi) => {

    var contar = 0;

    while (contar < arrUrl.length) {
        

        var url = arrUrl[contar];

        let datosNave = await devolverDatosOtro(url);

        imprimir.imprimirDatosVehi(datosNave, idUbi);


        contar++;

    }


}
    
   






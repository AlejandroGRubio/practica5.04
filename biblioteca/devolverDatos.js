"use strict";
import { devolverDatos, devolverDatosOtro } from "./datosAPI.js";
import * as imprimir from "./imprimirDatos.js";


export function generarId(numLetras){


    var letras = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    let codId = ``;

    for (let i = 0; i < numLetras; i++) {
        
        codId = `${codId}${letras[Math.floor(Math.random() * letras.length)]}`;
    }

    return codId;


}




export const devolverListaPelis = async (url, idUbi) => {
    let datosLista = await devolverDatos(url);
    console.log(datosLista);

    imprimir.imprimirListaPelis(datosLista, idUbi);

    
}

export const devolverDatosPelis = async (nomPeli, url, idUbi) => {

    let datosPelis = await devolverDatos(url);

    imprimir.imprimirDatosPelis(nomPeli, datosPelis, idUbi);


}

export const devolverDatoPersonaje = async (urlObj) => {

    let contar = 0;


    while (contar < 10) {

        var url = urlObj[contar];
        
        let datosPersonaje = await devolverDatosOtro(url);

        imprimir.imprimirInfoPersonaje(datosPersonaje);

        contar++;

        

    }


    


}

export const devolverDatoNave = async (arrUrl, idUbi) => {

    var contar = 0;

    while (contar < arrUrl.length) {
        

        var url = arrUrl[contar];

        console.log(url);
        let datosNave = await devolverDatosOtro(url);

        imprimir.imprimirDatosNave(datosNave, idUbi);


        contar++;

    }


}



export const devolverDatoVehi = async (arrUrl) => {




}
    
   






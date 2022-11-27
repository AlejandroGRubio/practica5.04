"use strict";
import { devolverDatoPersonaje, devolverDatoNave, devolverDatoVehi, generarId } from "./devolverDatos.js";



//Imprime por pantalla una lista con las películas.
export function imprimirListaPelis(lista, idUbi) {
    
    var doc = window.document;

    var ul = doc.createElement(`ul`);

    lista.map((nombrePelis)=> {

        var li = doc.createElement(`li`);

        li.innerHTML = `${nombrePelis.episode_id} - ${nombrePelis.title}`;

        li.setAttribute(`class`, `noClicked`);

        ul.appendChild(li);

    });

    doc.getElementById(idUbi).appendChild(ul);

}
//Imprime por pantalla los datos de las pelis.
export function imprimirDatosPelis(nombrePeli, lista, idUbi) {
     
    var doc = window.document;

    var cuerpo = doc.createElement(`div`);

    cuerpo.setAttribute(`class`, `mostrarInfo`);

    var codId = nombrePeli.charAt(0);



    lista.map((datosPelis) => {

        if (datosPelis.episode_id == codId) {

            var titulo = doc.createElement(`h1`);

            titulo.innerHTML = `${datosPelis.episode_id} - ${datosPelis.title}`;

            var sinopsis = doc.createElement(`p`);

            sinopsis.innerHTML = datosPelis.opening_crawl;

            var director = doc.createElement(`p`);

            director.innerHTML = `Director: ${datosPelis.director}`;

            var productor = doc.createElement(`p`);

            productor.innerHTML = `Productor: ${datosPelis.producer}`;

            var numerosFechaMal = datosPelis.release_date;

            var numerosFechaBien = `${numerosFechaMal.charAt(8)}${numerosFechaMal.charAt(9)}-${numerosFechaMal.charAt(5)}${numerosFechaMal.charAt(6)}-${numerosFechaMal.charAt(0)}${numerosFechaMal.charAt(1)}${numerosFechaMal.charAt(2)}${numerosFechaMal.charAt(3)}`;

            var fecha = doc.createElement(`p`);

            fecha.innerHTML = `Fecha de lanzamiento: ${numerosFechaBien}`;

            var personajes = doc.createElement(`p`);

            personajes.setAttribute(`id`, `personajes`);

            personajes.setAttribute(`class`, `personajeNoClick`);

            cuerpo.appendChild(titulo);
            cuerpo.appendChild(sinopsis);
            cuerpo.appendChild(director);
            cuerpo.appendChild(productor);
            cuerpo.appendChild(fecha);
            cuerpo.appendChild(personajes);

            doc.getElementById(idUbi).appendChild(cuerpo);

            devolverDatoPersonaje(datosPelis.characters);

            doc.getElementById(`personajes`).addEventListener(`click`, (e) => {



                if (e.target.className == `personajeNoClicked`) {
                    e.target.className = `personajeClicked`;
                }
                else if (e.target.className == `personajeClicked`) {
                    e.target.className = `personajeNoClicked`;
                    e.target.firstElementChild.className = `noDatosPersonaje`;
                }
        
                if (e.target.className == `personajeClicked` && e.target.firstElementChild.className == `noDatosPersonaje`) {
                    e.target.firstElementChild.className = `datosPersonaje`;
                }
        
        
        
            })
            
            

        }
        
    
       

    });

}



//Imprime por pantalla la información de un personaje.
export function imprimirInfoPersonaje(datos){

    var doc = window.document;

    var cuerpo = doc.createElement(`div`);

    var nombre = doc.createElement(`p`);
    nombre.innerHTML = `${datos.name}`;

    nombre.className = `personajeNoClicked`;

    var cuerpoDatos = doc.createElement(`div`);

    cuerpoDatos.setAttribute(`class`, `noDatosPersonaje`);

    var genero = doc.createElement(`p`);
    genero.innerHTML = `Género: ${datos.gender}`;

    var altura = doc.createElement(`p`);
    altura.innerHTML = `Altura: ${datos.height}`;

    var peso = doc.createElement(`p`);
    peso.innerHTML = `Peso: ${datos.mass}`;

    var colorPelo = doc.createElement(`p`);
    colorPelo.innerHTML = `Color de pelo: ${datos.hair_color}`;

    var colorOjos = doc.createElement(`p`);
    colorOjos.innerHTML = `Color de ojos: ${datos.eye_color}`;

    var naves = doc.createElement(`p`);
    naves.innerHTML = `Naves`;
    var idUbiNaves = generarId(5);
    naves.setAttribute(`id`, idUbiNaves);
    naves.setAttribute(`class`, `navesNoClicked`);

    var datosNaves = doc.createElement(`div`);
    var idNaves = generarId(4);
    datosNaves.setAttribute(`id`, idNaves);
    datosNaves.setAttribute(`class`, `noDatosNave`);

    var vehiculos = doc.createElement(`p`);
    vehiculos.innerHTML = `Vehiculos`;
    var idUbiVehi = generarId(5);
    vehiculos.setAttribute(`id`, idUbiVehi);
    vehiculos.setAttribute(`class`, `vehiculosNoClicked`);

    var datosVehi = doc.createElement(`div`);
    var idVehi = generarId(4);
    datosVehi.setAttribute(`id`, idVehi);
    datosVehi.setAttribute(`class`, `noDatosVehi`);


        
    cuerpoDatos.appendChild(genero);
    cuerpoDatos.appendChild(altura);
    cuerpoDatos.appendChild(peso);
    cuerpoDatos.appendChild(colorPelo);
    cuerpoDatos.appendChild(colorOjos);
    naves.appendChild(datosNaves);
    vehiculos.appendChild(datosVehi);
    cuerpoDatos.appendChild(naves);
    cuerpoDatos.appendChild(vehiculos);

    nombre.appendChild(cuerpoDatos);
    cuerpo.appendChild(nombre);


    doc.getElementById(`personajes`).appendChild(cuerpo);


    devolverDatoNave(datos.starships, idNaves);

    devolverDatoVehi(datos.vehicles, idVehi);

    doc.getElementById(idUbiNaves).addEventListener(`click`, (e) => {

        if (e.target.className == `navesNoClicked`) {
            e.target.className = `navesClicked`;
        }
        else if (e.target.className == `navesClicked`) {
            e.target.className = `navesNoClicked`;
            e.target.firstElementChild.className = `noDatosNave`;
        }

        if (e.target.className == `navesClicked` && e.target.firstElementChild.className == `noDatosNave`) {
            e.target.firstElementChild.className = `datosNave`;
        }



    })

    doc.getElementById(idUbiVehi).addEventListener(`click`, (e) => {

        if (e.target.className == `vehiculosNoClicked`) {
            e.target.className = `vehiculosClicked`;
        }
        else if (e.target.className == `vehiculosClicked`) {
            e.target.className = `vehiculosNoClicked`;
            e.target.firstElementChild.className = `noDatosNave`;
        }

        if (e.target.className == `vehiculosClicked` && e.target.firstElementChild.className == `noDatosVehi`) {
            e.target.firstElementChild.className = `datosVehi`;
        }



    })




}


//Imprime por pantalla la información de una nave. 
export function imprimirDatosNave(datos, idUbi) {
    
    var doc = window.document;


    var cuerpo = doc.createElement(`div`);

    var nombre = doc.createElement(`p`);
    nombre.innerHTML = `Nombre: ${datos.name}`;

    var modelo = doc.createElement(`p`);
    modelo.innerHTML = `Modelo: ${datos.model}`;

    var coste = doc.createElement(`p`);
    coste.innerHTML = `Coste: ${datos.cost_in_credits} creditos`;

    var largo = doc.createElement(`p`);
    largo.innerHTML = `Largo: ${datos.length}`;

    var capacidad = doc.createElement(`p`);
    capacidad.innerHTML = `Capacidad de carga: ${datos.cargo_capacity}`;

    cuerpo.appendChild(nombre);
    cuerpo.appendChild(modelo);
    cuerpo.appendChild(coste);
    cuerpo.appendChild(largo);
    cuerpo.appendChild(capacidad);


    doc.getElementById(idUbi).appendChild(cuerpo);

    



}
//Imprime por pantalla la información de un vehículo.
export function imprimirDatosVehi(datos, idUbi) {
    var doc = window.document;


    var cuerpo = doc.createElement(`div`);

    var nombre = doc.createElement(`p`);
    nombre.innerHTML = `Nombre: ${datos.name}`;

    var modelo = doc.createElement(`p`);
    modelo.innerHTML = `Modelo: ${datos.model}`;

    var coste = doc.createElement(`p`);
    coste.innerHTML = `Coste: ${datos.cost_in_credits} creditos`;

    var largo = doc.createElement(`p`);
    largo.innerHTML = `Largo: ${datos.length}`;

    var capacidad = doc.createElement(`p`);
    capacidad.innerHTML = `Capacidad de carga: ${datos.cargo_capacity}`;

    cuerpo.appendChild(nombre);
    cuerpo.appendChild(modelo);
    cuerpo.appendChild(coste);
    cuerpo.appendChild(largo);
    cuerpo.appendChild(capacidad);


    doc.getElementById(idUbi).appendChild(cuerpo);
}
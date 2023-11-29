// Challenge 03 - Codember 2023
/*
1. Analiza la lista de políticas y claves de cifrado que encontrarás en este archivo:
https://codember.dev/data/encryption_policies.txt

2. Crea un programa que devuelva la clave inválida número 42 (de todas las claves inválidas,
la 42ª en orden de aparición). Por ejemplo:
submit bqamidgewtbuz
*/

import {contrasenias} from "./resources/variables_residuales.js";




const desestructurar_contrasenia = (contrasenias) => {
    const lista_contrasenias = contrasenias.split('\n')
    let lista_desestructurada = []
    for (const contrasenia of lista_contrasenias) {
        const objeto_contrasenia = {
            min: 0,
            max: 0,
            letra: '',
            cadena: ''
        }
        let min = contrasenia.split('-')[0]
        let max = (contrasenia.split('-')[1]).split(' ')[0]
        let letra = (contrasenia.split(':')[0]).split(' ')[1]
        let cadena = (contrasenia.split(':')[1]).trim()
        objeto_contrasenia.min = min
        objeto_contrasenia.max = max
        objeto_contrasenia.letra = letra
        objeto_contrasenia.cadena = cadena
        lista_desestructurada = [...lista_desestructurada, objeto_contrasenia]

    }
    return lista_desestructurada
}

const contar_letras = (contrasenia) => {
    let contador = 0
    for (let i=0; i<contrasenia.cadena.length; i++) {
        if (contrasenia.letra === contrasenia.cadena[i]) {
            contador++
        }
    }
    return contador
}


const comprobar_contrasenia = (lista) => {
    let contrasenias_no_validas = []
    for (const contrasenia of lista) {
        const repeticiones = contar_letras(contrasenia)
        if (repeticiones < contrasenia.min || repeticiones >= contrasenia.max) {
            if (contrasenias_no_validas.length<42){
                contrasenias_no_validas.push(contrasenia)
            }
            else {
                break
            }
        }

    }
    return contrasenias_no_validas[41]
}

const lista_desestructurada = desestructurar_contrasenia(contrasenias)

console.log(comprobar_contrasenia(lista_desestructurada).cadena)


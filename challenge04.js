// Codember 2023 Challenge 04

import {nombres_archivo} from "./resources/variables_residuales.js";

let verdaderos = []
let nombres_desestructurados = []

const desestructurar = (nombres_archivo) => {
    const nombres_almacen = nombres_archivo.split('\n')
    nombres_almacen.forEach((nombre) => {
        const elementos_nombre = {
            alfanumerico: '',
            checksum:''
        }
        elementos_nombre.alfanumerico = nombre.split('-')[0]
        elementos_nombre.checksum = nombre.split('-')[1]
        nombres_desestructurados.push(elementos_nombre)
    })
    return nombres_desestructurados
}

const comprobar = (nombres_desestructurados) => {
    nombres_desestructurados.forEach((nombre) => {
        const caracteres = nombre.alfanumerico.split('')
        const copia = nombre.alfanumerico.split('')
        let caracteres_filtrados = ''
        for (const caracter of caracteres) {
            let contador = 0
            for (const letra of copia) {
                if (letra===caracter) {
                    contador++
                }
            }
            if (contador<2) {
                caracteres_filtrados = caracteres_filtrados+caracter
                }
        }
        console.log(caracteres_filtrados)
        caracteres_filtrados === nombre.checksum ? verdaderos.push(nombre) : console.log('no')
        })

    return verdaderos

}

const des = desestructurar(nombres_archivo)
comprobar(des)
console.log(verdaderos[32])


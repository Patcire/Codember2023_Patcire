// Codember - Challenge_02

const cadena="&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
let contador = 0
let almacen = ""
for (let i= 0; i<cadena.length; i++){
    if (cadena[i]=== "&"){
        almacen+=contador
    }
    else if(cadena[i]==="#"){
        contador++
    }
    else if (cadena[i]==="@"){
        contador--
    }
    else{
        contador*=contador
    }
}
console.log(almacen)

const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const txEncriptado = encriptar(inputTexto.value)
    mensaje.value = txEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function btnDesencriptar(){
    const txDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = txDesencriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(textoEncriptado){
 let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ifat"]];
 textoEncriptado = textoEncriptado.toLowerCase();
 
 for(let i = 0; i < matrizCodigo.length; i++){
    if(textoEncriptado.includes(matrizCodigo[i][0])){
        textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ifat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
       if(textoDesencriptado.includes(matrizCodigo[i][1])){
           textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
       }
     }
     return textoDesencriptado;
   }

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
}
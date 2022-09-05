const texto = document.querySelector(".mensaje1");

const mensaje = document.querySelector(".mensaje2");

const parrafo = document.querySelector(".desenTitulo");

const bCopiar = document.querySelector("#boton-copiar")




function btnEncrp(){
    const textoEncriptado =  encriptar(texto.value);
    mensaje.value= textoEncriptado;
    mensaje.style.backgroundImage = "none";
    bCopiar.style.visibility= "visible";
    texto.value="";
    

 }

 function btoDescrip(){
    const textoEncriptado =  desencriptar(texto.value);
    mensaje.value= textoEncriptado;
    bCopiar.style.visibility= "visible";
    texto.value="";
    
 }

 function btoCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Se ha copidado el mensaje!!");
}

function encriptar(stringEncrptar){

    let matrizEnc =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    
    stringEncrptar = stringEncrptar.toLowerCase();

    for(let i=0; i<matrizEnc.length; i++){
        if (stringEncrptar.includes(matrizEnc[i][0])){

            stringEncrptar=stringEncrptar.replaceAll(matrizEnc[i][0],matrizEnc[i][1]);
        }
     }
     return stringEncrptar;
}

function desencriptar(stringEncrptar){

    let matrizEnc =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    
    stringEncrptar = stringEncrptar.toLowerCase();

    for(let i=0; i<matrizEnc.length; i++){
        if (stringEncrptar.includes(matrizEnc[i][1])){

            stringEncrptar=stringEncrptar.replaceAll(matrizEnc[i][1],matrizEnc[i][0]);
        }
     }
     return stringEncrptar;
}



 
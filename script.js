const text_area = document.querySelector('.text_area');
const mensagem = document.querySelector('.mensagem');


function btnEncriptar() {
    const textoEncriptado = encriptar(text_area.value);
    mensagem.value = textoEncriptado;
    textArea.value="";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat'] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++)
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

        return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(text_area.value);
    mensagem.value = textoDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat'] ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++)
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

        return stringDesencriptada;
}

document.querySelector('.btn-copiar').addEventListener('click', function(event) {
    btnCopiar();
});

function btnCopiar() {
    const mensagem = document.querySelector('.mensagem');
    
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            const textArea = document.querySelector('.text_area');
            textArea.value = mensagem.value;
            console.log('Texto copiado e colado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}


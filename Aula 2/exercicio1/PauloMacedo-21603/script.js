function atualizaTexto(){
    var texto = document.getElementById( "InputTexto").value;
    if(!texto.length) alert("Escreve algo no input");
    document.getElementById( "texto").innerText = texto;
}
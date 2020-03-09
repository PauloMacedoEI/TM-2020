var arrayNumbers=[];

function adicionarNumero() {
    var number = document.getElementById( "newNumers").value;
    document.getElementById( "newNumers").value = null;
    arrayNumbers.push(parseInt(number));
    console.log(arrayNumbers);
}

function calcular() {
    alert(Math.max.apply(Math, arrayNumbers));

}
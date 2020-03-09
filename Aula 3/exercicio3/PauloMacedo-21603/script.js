function changeColors() {
    var titulosVar = document.getElementsByClassName( "titulo");
    for (let titulo of titulosVar){
        titulo.style.color="red";
    }
}

function getInfo() {
    var link = document.getElementById("idLink");
    var lista = document.getElementById("info");

    lista.innerHTML = "ID:" + link.id + "<br>" +
    "Target:" + link.target + "<br>" +
    "Type:" + link.type + "<br>" +
    "Href:" + link.href + "<br>";

    function setClick(){
        var cells = document.getElementsByTagName("td");
        console.log(cells)
        for (var i=0; i<cells.length; i++){
            cells[i].onclick = function () {
                this.innerText= clickTd();
                this.style.backgroundColor ="green";
            }
        }
    }

    function clickTd(){
        return prompt("novo valor")
    }

    setClick();
    //setTimeout(() => setClick(), 0);



}
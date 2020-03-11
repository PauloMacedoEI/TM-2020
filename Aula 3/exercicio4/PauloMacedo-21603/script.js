var counterImages = 1;

function addImage() {
    var image = document.createElement("img");
    var list = document.getElementById("imagesList");

    image.src = "https://placeimg.com/250/150/" + counterImages;

    list.appendChild(image);

    var counter = document.getElementById("imageCounter");

    counter.innerText = counterImages.toString();

    counterImages++;
}

function removeImage() {
    counterImages--;
    var zero = 0;
    var r = document.getElementById("imagesList").childElementCount;
    if(r==zero){
        alert("Nãoo existe nehuma imagem para eliminar!!!");
    }
    else {
        // Decremento do número

        var counterr = document.getElementById("imageCounter").innerText;
        counterr--;

        var a = document.getElementById("imageCounter");
        a.innerText = counterr;
// ----------------------------------------------


        var ola = Math.floor(Math.random() * r - 1) + 0;


        if (ola < zero) {
            ola++;
        }

        var list = document.getElementById("imagesList");
        list.removeChild(list.children[ola]);

    }
}
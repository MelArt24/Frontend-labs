let item5 = document.getElementById("item5");
let item6 = document.querySelector("#item6");

let toggle5 = false;
let toggle6 = false;

item5.addEventListener("click", function () {
    toggle5 = !toggle5;
    if (toggle5) {
        item5.style.backgroundColor = "black";
        item5.style.color = "lightgreen";
    } else {
        item5.style.backgroundColor = "lightgreen";
        item5.style.color = "black";
    }
});

item6.addEventListener("click", function () {
    toggle6 = !toggle6;
    if (toggle6) {
        item6.style.backgroundColor = "blue";
        item6.style.color = "yellow";
    } else {
        item6.style.backgroundColor = "yellow";
        item6.style.color = "blue";
    }
});

let selectedImage = null;

function addImage() {
    let img = document.createElement("img");
    img.src = "https://tvoemisto.tv/media/gallery/full/u/n/untitled-1_34659.jpg";
    img.alt = "Фото Києва";
    img.width = 400;

    img.addEventListener("click", function () {
        if (selectedImage) {
            selectedImage.style.border = "";
        }
        selectedImage = img;
        selectedImage.style.border = "2px solid red";
    });

    document.body.appendChild(img);
}

function increaseImage() {
    if (selectedImage) {
        selectedImage.width += 50;
    }
}

function decreaseImage() {
    if (selectedImage && selectedImage.width > 50) {
        selectedImage.width -= 50;
    }
}

function removeImage() {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
}
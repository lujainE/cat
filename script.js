var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(element){
    animalImg.src="cat.jpg";
}

function pickDog(element){
    element.innerText = "ninja cat";
    animalImg.src = "ninjaCat.jpg";
}
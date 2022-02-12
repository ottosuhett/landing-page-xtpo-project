const images = document.querySelectorAll(".banner");
const forwardArrow = document.getElementById("btn-forward");
const backArrow= document.getElementById("btn-back")

let actualImage = 0

function hideImage(){
    images.forEach(image=>{
        image.classList.remove("show");
    })
};

function showImage(){
    images[actualImage].classList.add("show");
}

forwardArrow.addEventListener("click", function() {
    const totalImages = images.length - 1;
    if(actualImage === totalImages){
        forwardArrow.classList.add("hide-arrow");
        return;
    }
    backArrow.classList.remove("hide-arrow");
    actualImage++; 
    hideImage();
    showImage();
});

backArrow.addEventListener("click",function(){ 
    if(actualImage === 0){
        backArrow.classList.add("hide-arrow");
        return;
    }
    forwardArrow.classList.remove("hide-arrow");
    actualImage --;
    hideImage();
    showImage();
});
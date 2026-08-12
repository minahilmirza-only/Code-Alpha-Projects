const galleryImags=document.querySelectorAll('.gallery-container img');
const box=document.getElementById('#box');
const boxImg=document.getElementById('box-img');

let currentImgindex=0;
 
// functions calling

function openbox(index){
    currentImgindex=index;
    boxImg.src=galleryImages[currentImgindex].src;
    box.style.display='flex';
}

function closebox() {
    box.style.display='none';
}

function changeboxslide(step){
    currrentImgindex += step;
}

if(currentImgindex >= galleryImages.length){
    currentImgindex=0;
}
if(currentImgindex <0){
    currentImgindex=galleryImageslength-1;
}
boxImg.src=galleryImages[currentImgindex].src;


// 1. Corrected Variable Names & Selection
const galleryImages = document.querySelectorAll('.gallery-container img');
const box = document.getElementById('box'); // '#' remove kar diya
const boxImg = document.getElementById('box-img');

let currentImgIndex = 0;

// 2. Open Box Function
function openbox(index) {
  currentImgIndex = index;
  boxImg.src = galleryImages[currentImgIndex].src;
  box.style.display = 'flex';
}

// 3. Close Box Function
function closebox() {
  box.style.display = 'none';
}

// 4. Slide Change Function (If conditions inside the function)
function changeboxSlide(step) {
  currentImgIndex += step;

  // Infinite Loop Logic
  if (currentImgIndex >= galleryImages.length) {
    currentImgIndex = 0;
  }
  if (currentImgIndex < 0) {
    currentImgIndex = galleryImages.length - 1;
  }

  // Update Image Source
  boxImg.src = galleryImages[currentImgIndex].src;
}

// Extra Alias: HTML ke changebox(1) buttons ke liye
function changebox(step) {
  changeboxSlide(step);
}

// 5. Keyboard Navigation
document.addEventListener('keydown', function (e) {
  // Sirf tab chalay jab popup open ho
  if (box && box.style.display === 'flex') {
    if (e.key === 'ArrowRight') {
      changeboxSlide(1);
    } else if (e.key === 'ArrowLeft') {
      changeboxSlide(-1);
    } else if (e.key === 'Escape') {
      closebox();
    }
  }
});
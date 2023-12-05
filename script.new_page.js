let currentIndex = 0;
let check = false;
const imageGallery = document.getElementById("imageGallery");
const totalImages = document.querySelectorAll("#imageGallery img").length;
const imageSize = document.querySelector("#imageGallery img").offsetWidth + 7; // 10px là khoảng cách giữa các hình ảnh
const visibleImages = 5; // Số lượng ảnh hiển thị trên giao diện

let count = 0;
function scrollImages(direction) {
  if (direction === "left") {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  } else if (direction === "right") {
    currentIndex = (currentIndex + 1) % totalImages;
  }
  if (currentIndex == 11) check = true;
  if (currentIndex > 11) {
    currentIndex = 11;
    count++;
  }

  if (count == 2) {
    currentIndex = 0;
    count = 0;
  }

  const startIndex = currentIndex;
  const endIndex = (startIndex + visibleImages) % totalImages;

  const translateValue = -startIndex * imageSize;
  imageGallery.style.transform = `translateX(${translateValue}px)`;

  // Ẩn các ảnh không hiển thị
  const images = document.querySelectorAll("#imageGallery img");
  images.forEach((image, index) => {
    if (index >= startIndex && index < endIndex) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
}

function checkEndGame() {
  if (check) {
    alert("Hết rồi nha !!!");
  } else {
    alert("Coi cho hết đi !!!");
  }
}

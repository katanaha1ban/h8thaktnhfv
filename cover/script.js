// app.js
// JavaScriptで画像に動きを追加
const images = document.querySelectorAll(".animated-image");

function animateImages() {
  images.forEach((image) => {
    let isAnimating = true;
    let opacityValue = 1;

    function animate() {
      if (isAnimating) {
        opacityValue -= 0.01;
        if (opacityValue <= 0.5) {
          isAnimating = false;
        }
      } else {
        opacityValue += 0.01;
        if (opacityValue >= 1) {
          isAnimating = true;
        }
      }

      image.style.opacity = opacityValue;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  });
}

animateImages();

function goToYouTube() {
  window.location.href = "https://www.youtube.com/";
}
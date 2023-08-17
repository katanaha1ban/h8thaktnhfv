const treasureBox = document.querySelector(".treasure-box");
const inputNumber = document.getElementById("input-number");
const openButton = document.getElementById("open-button");

openButton.addEventListener("click", () => {
  const correctNumber = 42; // 正解の数字
  const enteredNumber = parseInt(inputNumber.value);

  if (enteredNumber === correctNumber) {
    treasureBox.classList.add("open");
    setTimeout(() => {
      window.location.href = "../final/index.html"; // 宝箱が開いた後のページへ遷移
    }, 1500);
  }
});

// opened.htmlへの遷移のためのダミー関数
function redirectToOpenedPage() {
  window.location.href = "opened.html";
}
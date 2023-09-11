document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".transition-button");

  button.addEventListener("click", function () {
    // ボタンにアニメーション用のクラスを追加
    button.classList.add("clicked");

    // 一定の遅延後にダミーHTMLページに遷移
    setTimeout(function () {
      window.location.href = "setnumber/index.html"; 
    }, 500); // 遷移前の遅延（ミリ秒単位）
  });
});
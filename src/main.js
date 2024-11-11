const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "/smth/nav-close.svg";
  } else {
    navBtnImg.src = "/smth/nav-open.svg";
  }
};

const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const addBtn = document.getElementById("add");
const dialog = document.getElementsByClassName("dialog")[0];

const input = document.getElementById("inp");
if (input.value) {
  addBtn.addEventListener("click", () => {
    dialog.close();
  });
}

openBtn.addEventListener("click", () => {
  dialog.showModal();
  input.value = null;
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

window.onclick = function (event) {
  if (event.target == dialog) {
    dialog.close();
    //overlay.style.display = "none";
  }
};









const checkboxButton = document.getElementById("checkbox-button");
const checkboxImage = document.getElementById("checkbox-image");

checkboxButton.addEventListener("click", () => {
  if (checkboxImage.style.display === "none") {
    checkboxImage.style.display = "block";
    checkboxButton.style.display = "none"; // Скрываем кнопку после нажатия
  } else {
    checkboxImage.style.display = "none";
    checkboxButton.style.display = "block"; // Отображаем кнопку
  }
});


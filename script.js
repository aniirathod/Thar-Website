function arrow() {
  var leftArrow = document.querySelector(".ri-arrow-left-line");
  var rightArrow = document.querySelector(".ri-arrow-right-line");
  var container = document.querySelector("#container");

  rightArrow.addEventListener("click", function () {
    container.style.transform = "translatex(-750px)";
    container.style.gridTemplateColumns = "23vw 23vw 23vw 23vw 23vw 23vw";
    container.style.marginLeft = "30px";
  });

  leftArrow.addEventListener("click", function () {
    container.style.transform = "translatex(0px)";
    container.style.gridTemplateColumns = "23vw 23vw 23vw 25vw 23vw 23vw";
    container.style.marginLeft = "0";
  });
}
arrow();

function SaleScroll() {
  let lArrow = document.querySelector(".ri-arrow-left-s-line");
  let RArrow = document.querySelector(".ri-arrow-right-s-line");
  let image = document.querySelectorAll("#pics");
  let counter = 0;
  lArrow.addEventListener("click", function () {
    if (counter <= image.length && counter > 0) {
      --counter;
      imageslide();
      carinfo();
    }
  });
  RArrow.addEventListener("click", function () {
    if (counter < image.length - 1) {
      counter++;
      imageslide();
      carinfo();
      console.log(counter);
    }
  });
  function imageslide() {
    image.forEach((pics) => {
      pics.style.transform = `translateX(${counter * -305}px)`;
    });
  }
  function carinfo() {
    let infos = document.querySelectorAll(".info");
    infos.forEach((info) => {
      info.style.transform = `translateY(${counter * -440}px)`;
    });
  }
}
SaleScroll();

function disableScroll() {
  let number = document.querySelector("#phone");
  number.addEventListener("wheel.disableScroll", function (e) {
    e.preventDefault();
  });
}
disableScroll();

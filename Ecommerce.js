const plus = document.querySelector(".plus");
const minus = document.getElementById("minus");

console.log(plus);
console.log(minus);

// let val = document.getElementById("val");
// val = Number(val.innerText);
// val2 = parseInt(val.textContentext);

// console.log(val);
// console.log(val2);

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);

function increase(e) {
  let val = document.getElementById("val");
  let result = Number(val.textContent) + 1;
  val.innerText = result;

  e.preventDefault();
}
function decrease(e) {
  let val = document.getElementById("val");
  let result = Number(val.textContent);
  if (result === 0) {
    result = 0;
  } else {
    result--;
  }
  e.preventDefault();
  val.innerText = result;
}

const nav = document.querySelector(".mobile-nav");
const toggle = document.querySelector(".hamburger");
const close = document.querySelector(".close-bar");

console.log(nav);
console.log(toggle);
console.log(close);

toggle.onclick = function () {
  nav.classList.toggle("active");
};

close.onclick = function () {
  return nav.classList.toggle("active");
};

const cart = document.querySelector(".cart-icon");
console.log(cart);
const cartMobile = document.querySelector(".cart-top");
console.log(cartMobile);
const cartItem = document.getElementById("cartbox");
console.log(cartItem);
// const windows = document.querySelector(".windows");

cart.onclick = function () {
  cartItem.classList.toggle("active");
};

cartMobile.onclick = function () {
  cartItem.classList.toggle("active");
};

let sliderImages = document.querySelectorAll(".slide");
let arrowRight = document.querySelector(".btn-next"),
  arrowLeft = document.querySelector(".btn-prev"),
  current = 0;

function reset() {
  // for (let i = 0; i < sliderImages.lenght; i++) {
  //   sliderImages[i].style.display = "none";
  // }
  sliderImages.forEach((item) => {
    item.style.display = "none";
  });
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

arrowLeft.addEventListener("click", function (e) {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
  e.preventDefault();
});
arrowRight.addEventListener("click", function (e) {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
  e.preventDefault();
});
startSlide();

// windows.onscroll = () => {
//   cartItem.classList.remove("active");
// };

// (function () {
//   const mainImage = document.querySelectorAll(".img-thumbnail");
//   const btn = document.querySelectorAll(".btns");
//   console.log(mainImage);

//   let index = 0;
//   const images = [];

//   function productImage(image) {
//     this.image = image;
//   }

//   function createImage(image) {
//     image = `./image/${image}.jpg`;
//     image = new Image(image);

//     images.push(image);
//   }
//   createImage(0);
//   createImage(1);
//   createImage(2);
//   createImage(3);

//   btn.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//       if (e.target.parentElement.contains("btn-prev")) {
//         if (index === 0) {
//           index = images.length;
//         }
//         index--;
//         productImage.src = mainImage[index].image;
//       }
//       if (e.target.parentElement.contains("btn-next")) {
//         index++;
//         if (index === images.length) {
//           index = 0;
//         }

//         productImage.src = mainImage[index].image;
//       }
//     });
//   });
// })();

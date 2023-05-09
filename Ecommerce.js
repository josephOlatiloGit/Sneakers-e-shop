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
const windows = document.querySelector(".windows");

cart.onclick = function () {
  cartItem.classList.toggle("active");
};

cartMobile.onclick = function () {
  cartItem.classList.toggle("active");
};

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

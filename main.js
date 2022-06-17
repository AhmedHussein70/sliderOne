let images = Array.from(document.querySelectorAll(".img-item"));
let PoBap = document.querySelector(".lightbox-item ");
let lightboxContaner = document.querySelector(".lightbox-contaner");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let closee = document.getElementById("close");

let currentIndex;

images.forEach((item) => {
  item.addEventListener("click", (eo) => {
    currentIndex = images.indexOf(eo.target);
    console.log(currentIndex);
    let imgSrc = eo.target.getAttribute("src");
    lightboxContaner.classList.replace("d-none", "d-flex");
    PoBap.style.backgroundImage = `url(${imgSrc})`;
  });
});

currentIndex;

next.addEventListener("click", () => {
  slid(1);
});
prev.addEventListener("click", () => {
  slid(-1);
});

function slid(i) {
  currentIndex = currentIndex + i;

  if (currentIndex == images.length ) {
    currentIndex = 0;
  }else if (currentIndex == -1) {
    currentIndex = images.length -1;
  }

  let imgSrc = images[currentIndex].getAttribute("src");
  console.log(images[currentIndex]);
  PoBap.style.backgroundImage = `url(${imgSrc})`;
  console.log(currentIndex);
}
function cloose(){
  lightboxContaner.classList.replace("d-flex", "d-none");
  console.log("none");
}
closee.addEventListener("click",()=>{
  cloose()
})

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    slid(1)
  }else if(e.key =="ArrowLeft"){
    slid(-1)
  }else if(e.key == "Escape"){
    cloose()
  }
});

// lightboxContaner.addEventListener("click", () => {
//   cloose()
// });

// next.addEventListener("click", () => {
//   currentIndex++;

//   if (currentIndex == 6) {
//     currentIndex = 0;
//   }

//   let newsrc = images[currentIndex].getAttribute("src");
//   console.log(images[currentIndex]);
//   PoBap.style.backgroundImage = `url(${newsrc})`;
//   console.log(currentIndex);
// });

// prev.addEventListener("click", () => {
//   if (currentIndex == 0) {
//     currentIndex = 6;
//   }
//   currentIndex--;

//   let newsrx = images[currentIndex].getAttribute("src");
//   console.log(images[currentIndex]);
//   PoBap.style.backgroundImage = `url(${newsrx})`;
//   console.log(currentIndex);
// });

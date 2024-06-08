let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header__list");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})

let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
 
setInterval(()=>{
  let currentTime = new Date();

  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
},1000)



//Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

alert("Selamat Datang\nIni Merupakan Website Uji Coba\n\nTerima Kasih");

// //klik di luar side bar untuk close navigator humberger

// const humberger = document.querySelector("#humberger-menu");

// document.addEventListener("click", function (e) {
//   if (!humberger.contains(e.target) && !narbarNav.contains(e.Target)) {
//     navbarNav.classList.remove("active");
//   }
// });

let mainSection = document.querySelector(".mainSection");
let sidebar = document.querySelector(".sidebar");
let topbar = document.querySelector(".topbar");
let menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("active1");
  topbar.classList.toggle("active2");
  menu.classList.toggle("active3");
  mainSection.classList.toggle("active4");
});

const navlinkelem = document.querySelectorAll(".navlink");

navlinkelem.forEach(navlinkel => {
    navlinkel.addEventListener('click' , () =>{
        document.querySelector('.active')?.classList.remove('active')
        navlinkel.classList.add('active')
    })
})


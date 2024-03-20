const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function(event) {
    sideMenu.classList.add('active');
    event.stopPropagation();
})

hideMenuIcon.addEventListener('click', function(event) {
    sideMenu.classList.remove('active');
    event.stopPropagation();
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.right2')) {
      var dropdowns = document.getElementsByClassName("dark-mode");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function toggleDarkMode() {
    const darkModeEnabled = document.body.classList.contains('dark-modes');

    if (darkModeEnabled) {
        window.location.href = 'youtube.html'; 
    } else {
        window.location.href = 'dark-index.html'; 
    } 
}

function toggleLightMode() {
    const lightModeEnabled = document.body.classList.contains('light-mode');

    if (lightModeEnabled) {
        window.location.href = 'dark-index.html'; 
    } else {
        window.location.href = 'youtube.html';
    } 
}

function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
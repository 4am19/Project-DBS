//    navbar 
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

navbarMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    }
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbarMenu.contains(event.target);
    const isClickOnToggle = navbarToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    }
});

//    scroll shadow
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

//    text typed 
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "UI/UX Design",
      "Web Development",
      "Mobile Apps",
      "Graphic Designer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  };

  var typed = new Typed(".typed", options);
});

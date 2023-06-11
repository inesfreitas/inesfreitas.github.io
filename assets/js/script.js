

//----CHANGE MENU CLASS WHEN SELECTED----


var anchor = document.querySelector("#main-navigation").querySelectorAll("a");

for( var i = 0; i < anchor.length; i++){
    if(window.location.href == anchor[i].href || (anchor[i].pathname == "/work.html" && window.location.pathname.substring(1,8) == "project")) {
        anchor[i].classList.add("active");
    }
}



//----MENU HAMBURGER TOGGLE----

var btnToggleMenu = document.querySelector(".btn--toggle-menu");

function toggleMenu(){
    var mainNav = document.querySelector("#main-navigation");
    mainNav.classList.toggle("menu-is-open");
}

btnToggleMenu.addEventListener("click", toggleMenu);



//----HOMEPAGE WORK AND CONTACT LINKS SHOWING ON SCROLL----

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const links = entry.target.querySelector('.links');
  
      if (entry.isIntersecting) {
        links.classList.add('linkanimation');
        return; 
      }
  
      links.classList.remove('linkanimation');
    });
  });
  
  observer.observe(document.querySelector('.linkscontainer'));
  




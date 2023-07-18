 
  

  // window Scroll and show header 
  window.onscroll = () => {
    let headerShow = document.querySelector(".header");
    headerShow.classList.toggle('sticky', window.scrollY > 0);
    
  }
   

  // hamvargar menu desing javascritp functional
  var mysideVar= document.querySelector("#mySidenav");
  var mobileIcon = document.querySelector("#mobile-icon");

  mobileIcon.addEventListener('click',() =>{
      mysideVar.classList.toggle('left-set');
  })

  


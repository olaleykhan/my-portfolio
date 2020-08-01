const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-ul');
  const navLinks = document.querySelectorAll('.nav-ul li');
  // console.log(navLinks);

  burger.addEventListener('click', ()=>{
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // animate nav links
    navLinks.forEach((link,index)=>{
      if (link.style.animation){
        link.style.animation='';
      }else{
        link.style.animation=`navLinkFade 500ms ease forwards ${index/5}s`
      }
      console.log(index);
    });
      // animate burger
  
      burger.classList.toggle('toggle');
  });


}

navSlide();


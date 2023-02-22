const open = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const menu = document.querySelector('.slider-menu')

open.addEventListener("click", function(){
      if ( menu.style.display === "block" ){
         menu.style.display = "none" ;
      } else {
        menu.style.display = "block" ;
      }
})

close.addEventListener("click", function(){
    if ( menu.style.display === "block" ){
       menu.style.display = "none" ;
    } else {
      menu.style.display = "block" ;
    }
})
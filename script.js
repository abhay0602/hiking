

let menu=document.querySelector("#menu")
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#btn-1").addEventListener("click", function(){
        
        if(menu.style.display==="block"){
            menu.style.display="none"
        }else if(menu.style.display="none"){
            menu.style.display="block"
        }
    })   
  });

  
const ul = document.querySelector("ul");
var preSelection = 1;

function seleccion(item){
    //si se hace click sobre la seleccion activa sale
    if(preSelection==item){
        return;
    }

  //obtiene las referencias a los elementos de la seleccion anterior  
    const anteriorLi = ul.children[preSelection];
    const preH2 = anteriorLi.querySelector("h2");
    const preArrow = anteriorLi.querySelector(".imgActive");
    const preP = anteriorLi.querySelector("p"); 
    
    //obtiene las referencias a los elementos de la seleccion actual
    const selectedLi = ul.children[item];
    const h2 = selectedLi.querySelector("h2");
    const arrow = selectedLi.querySelector(".arrow");
    const p = selectedLi.querySelector("p");
   
    // oculta la seleccion anterior
    preH2.classList.remove("active");
    preArrow.classList.add("arrow");
    preArrow.classList.remove("imgActive");    
    preP.classList.remove("active");
    preP.classList.add("hidden");

    //muestra la nueva seleccion
    h2.classList.add("active");
    arrow.classList.add("imgActive");
    arrow.classList.remove("arrow");
    p.classList.add("active");
    p.classList.remove("hidden");
    
    //actualiza el valor de la seleccion acterior con el actual
    preSelection = item;
}
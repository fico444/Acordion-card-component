const ul = document.querySelector("ul");
console.log(ul);

function selection(item){
    const selectedLi = ul.children[item];
        
    const h2 = selectedLi.querySelector("h2");
    const arrow = selectedLi.querySelector(".arrow");
    const p = selectedLi.querySelector("p");

    console.log(item);
    console.log(h2);
    console.log(p);

}
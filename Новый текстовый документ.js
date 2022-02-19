let beatae = document.querySelectorAll(".market .col-sm-3");
let accusamus = document.querySelectorAll(".unpur");
let ratione = document.querySelectorAll(".pur");
let facilis = document.querySelectorAll(".market .col-sm-3 h5");
beatae.forEach(function(item, index){
    item.addEventListener("mouseover", function(event){
        item.classList.add("bcc7");
        accusamus[index].classList.add("hid");
        ratione[index].classList.remove("hid");
        facilis[index].classList.add("cc7");
    });
    item.addEventListener("mouseout", function(event){
        item.classList.remove("bcc7");
        accusamus[index].classList.remove("hid");
        ratione[index].classList.add("hid");
        facilis[index].classList.remove("cc7");
    });
});
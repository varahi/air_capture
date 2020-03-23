let burger_menu = document.getElementsByTagName("header")[0];
let bandOne = document.getElementById("bandOne");
let bandTwo = document.getElementById("bandTwo");
let bandThree = document.getElementById("bandThree");
let band = document.getElementById("band")
let counter = 1;

function openBurger() {
    console.log("dfwgfehgr")
    if(counter === 1) {
        burger_menu.classList.remove("nonactive_burger");
        band.style.marginTop = "25px";
        burger_menu.classList.add("active_burger");
        bandTwo.classList.add("bandTwo");
        bandOne.classList.add("bandOne");
        bandThree.classList.add("bandThree");
        counter = 0
    }else{
        burger_menu.classList.add("nonactive_burger");
        burger_menu.classList.remove("active_burger");
        bandTwo.classList.remove("bandTwo");
        bandOne.classList.remove("bandOne");
        bandThree.classList.remove("bandThree");
        band.style.marginTop = "20px";
        counter = 1
    }

}
document.getElementById("band").addEventListener("click", openBurger);

const menuitem = document.querySelectorAll('.list');

function selectlink() {
    menuitem.forEach((item) => {
        item.classList.remove('ativo'); 
    });
    this.classList.add('ativo'); 
}

menuitem.forEach((item) => 
    item.addEventListener('click', selectlink)
);


// Expandir menu //
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.sidebar'); 

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir'); 
});

function filterElements(category){
const elements = document.querySelectorAll("box");

elements.forEach((element) => {
    element.classList.remove("filtro")
    if(category == "todos" ) element.classList.category
        element.classList.add("filtro")
})

} 

const nav = document.getElementById("q1");

const div = document.querySelectorAll("#q1 div ");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > div.length - 1){
        idx = 0;
    }

    nav.style.transform = 'translateX(${-idx = 500}px)';

}


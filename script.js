const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous');
const arrayPerPage = 10;
const parentElement = document.querySelector('.body-el');
const pageElement = document.querySelector('.page');


//slicing array list
const ArraySlicer = function(page) {
    const start = (page - 1) *arrayPerPage;
    const end = page *arrayPerPage;
    return list.slice(start , end)
}

// work on markup:

let page = 1;
const generateAndInsertHtml = function(){
let currentList = ArraySlicer(page);
let markup = currentList.map(e => {
    return `<div class="list">
     <p>this is a sample item : ${e}</p>
</div>`
}).join("")

// do NOT insert the markup when the parent is empty!

if(currentList.length) {
    parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML('beforeend' , markup);
}

pageElement.innerHTML = page
//button ui : 
if(currentList.at(-1) === list.at(-1)) btnNext.style.display = "none";
else {
    btnNext.style.display = "block"
}

if(currentList.at(1) === list.at(1)) btnPrevious.style.display = "none";
else {
    btnPrevious.style.display = "block"
}
}

//Event listener :
window.addEventListener('load' , function(){
    generateAndInsertHtml()
})
btnNext.addEventListener('click' , function(){
    page++;
    generateAndInsertHtml();
})
btnPrevious.addEventListener('click' , function(){
    page--;
    generateAndInsertHtml()
})
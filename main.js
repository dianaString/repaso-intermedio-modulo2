'use strict';

// 1.- ELementos que necesito del HTML (Variables)
const btn = document.querySelector('.js-btn');
const textFace = document.querySelector('.js-face');
const main = document.querySelector('.js-main');
const select = document.querySelector('.js-select');

// 2.- Crear funciones y eventos

// funciones
function getRandomNumber(max) {
    const randomNumber = Math.round(Math.random() * max);
    return randomNumber;
}

function changeFace() {
    const valueFace = select.value;
    textFace.innerHTML = valueFace; // más descriptivo
	//textFace.innerHTML = select.value;
}

function changeClassList(classToAdd, classToRemove){
    main.classList.add(classToAdd);
    main.classList.remove(classToRemove);
}

function changeColor() {
    const randomNumber = getRandomNumber(100);
    console.log(`random number is ${randomNumber}`);
    if (randomNumber % 2 === 0){ // es par
        changeClassList('yellow', 'orange')
    } else { // (randomNumber %2 !== 0) // es impar
        changeClassList('orange', 'yellow')
    }
}

//handle
function handleClick(event) {
    event.preventDefault();
    changeFace();
    changeColor();
}

// eventos/listeners
btn.addEventListener('click', handleClick);

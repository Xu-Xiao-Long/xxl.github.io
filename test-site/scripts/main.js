let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
        myImage.setAttribute('src', 'images/apple.webp');
    } else {
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入您的名字');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Apple 真不错！' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Apple 真不错！' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
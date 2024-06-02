// Challenge: Change last document text to my name.
const predefinedString = "Hello, World!";
const liElements = document.querySelectorAll('ul li');
const lastLi = liElements[liElements.length - 1];
const caret = document.createElement('span');
caret.classList.add('caret');
lastLi.appendChild(caret);

function typeText(element, text, index = 0, callback) {
    if (index < text.length) {
        element.textContent = text.substring(0, index + 1);
        element.appendChild(caret); // Append caret after the text
        setTimeout(() => typeText(element, text, index + 1, callback), 100);
    } else {
        setTimeout(() => callback(element, text), 1000);
    }
}

function eraseText(element, text, index = text.length) {
    if (index >= 0) {
        element.textContent = text.substring(0, index);
        element.appendChild(caret); // Append caret after the text
        setTimeout(() => eraseText(element, text, index - 1), 100);
    } else {
        setTimeout(() => typeText(element, predefinedString, 0, eraseText), 1000);
    }
}

typeText(lastLi, predefinedString, 0, eraseText);
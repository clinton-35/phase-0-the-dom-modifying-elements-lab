// Write your code here!
// get a reference to the main element
const main = document.querySelector('main');

// remove the main element from the DOM
main.remove();

// create a new header element
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "YOUR-NAME is the champion";

// append the new header element to the body element
document.querySelector('body').appendChild(newHeader);



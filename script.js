// Create the center box container
const centerBox = document.createElement('div');
centerBox.classList.add('center-box');

// Create the h1 element
const h1 = document.createElement('h1');
h1.textContent = 'Creativity !!';

// Create the h2 element
const h2 = document.createElement('h2');
h2.textContent = 'Takes time and effort.';

// Append h1 and h2 to the center box
centerBox.appendChild(h1);
centerBox.appendChild(h2);

// Append the center box to the body
document.body.appendChild(centerBox);

// Selecting elements of DOM to get the toggling of first query
const button1 = document.getElementById('bt1');
const ele_ans = document.querySelector('.answer');
const ele_ques = document.querySelector('.question');

// Creating addEventListener
button1.addEventListener('click', function() {
    ele_ans.classList.toggle('button-clicked');
    ele_ques.classList.toggle('button-clicked1');
});

// Toggling the second query of the Accordion
const q1 = document.getElementById('q1');
const a1 = document.getElementById('a1');
const button2 = document.getElementById('bt2');

// Creating the addEventListener
button2.addEventListener('click', function() {
    a1.classList.toggle('button-clicked');
    q1.classList.toggle('button-clicked1');
});

// Toggling the third query of the Accordion
const q2 = document.getElementById('q2');
const a2 = document.getElementById('a2');
const button3 = document.getElementById('bt3');

// Creating the addEventListener
button3.addEventListener('click', function() {
    a2.classList.toggle('button-clicked');
    q2.classList.toggle('button-clicked1');
});

// Toggling the fourth query of the Accordion
const q3 = document.getElementById('q3');
const a3 = document.getElementById('a3');
const button4 = document.getElementById('bt4');

// Creating the addEventListener
button4.addEventListener('click', function() {
    a3.classList.toggle('button-clicked');
    q3.classList.toggle('button-clicked1');
});
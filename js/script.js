let stepBlockOne = document.querySelector('#stepbl1');
let stepBorderOne = document.querySelector('#stepbrdr1');

let stepBlockTwo = document.querySelector('#stepbl2');
let stepBorderTwo = document.querySelector('#stepbrdr2');

let stepBlockThree = document.querySelector('#stepbl3');
let stepBorderThree = document.querySelector('#stepbrdr3');

stepBlockOne.onmouseover = function() {
  stepBorderOne.style.borderBottom = '3px solid white';
}

stepBlockOne.onmouseout= function() {
  stepBorderOne.style.borderBottom = '3px solid black';
}

stepBlockTwo.onmouseover = function() {
  stepBorderTwo.style.borderBottom = '3px solid white';
}

stepBlockTwo.onmouseout= function() {
  stepBorderTwo.style.borderBottom = '3px solid black';
}

stepBlockThree.onmouseover = function() {
  stepBorderThree.style.borderBottom = '3px solid white';
}

stepBlockThree.onmouseout= function() {
  stepBorderThree.style.borderBottom = '3px solid black';
}
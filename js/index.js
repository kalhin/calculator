document.querySelectorAll('.calc .digits-oper')
    .forEach(el => el.addEventListener('click', pressedDigitOrOperation));
function pressedDigitOrOperation(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval')
    .addEventListener('click', evaluate);
function evaluate() {
    const displ = document.querySelector('.calc .displ');
    displ.value = eval(displ.value);
}

document.querySelector('.calc .square')
    .addEventListener('click', squareRootCount);
function squareRootCount() {
    const displ = document.querySelector('.calc .displ');
    displ.value = Math.sqrt(displ.value);
}

document.querySelector('.calc .degree-two')
    .addEventListener('click', degreeTwo);
function degreeTwo() {
    const displ = document.querySelector('.calc .displ');
    displ.value = Math.pow(displ.value, 2);
}

document.querySelector('.calc .delete-all')
    .addEventListener('click', delAll);
function delAll() {
    const displ = document.querySelector('.calc .displ');
    displ.value = '';
}

document.querySelector('.calc .delete-last-element')
    .addEventListener('click', delLastElement);
function delLastElement() {
    let displ = document.querySelector('.calc .displ');
    displ.value = displ.value.substring(0, displ.value.length - 1);;
}

document.querySelector('.calc .plus-minus')
    .addEventListener('click', plusMinus);
function plusMinus() {
    let displ = document.querySelector('.calc .displ');
    displ.value = displ.value * - 1;;
}
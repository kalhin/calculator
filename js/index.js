document.querySelectorAll('.calc .digits-oper')
    .forEach(el => el.addEventListener('click', pressedDigitOrOperation));
    
function pressedDigitOrOperation(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval')
    addEventListener('click', evaluate);

function evaluate() {
    const displ = document.querySelector('.calc .displ');
    displ.value = eval(displ.value);
}

//document.querySelector('.calc .square')
//    addEventListener('click', squareRootCount);
//
//function squareRootCount() {
//    const displ = document.querySelector('.calc .displ');
//    displ.value = eval(displ.Math.sqrt(displ));
//}
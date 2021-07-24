const resultButton = document.querySelector('.result-button');
const vision = document.querySelector('.vision');

let calculate = {
    caracterAction: '/',
    firstNum: 30,
    secondNum: 2,
}

function calcSub(n1, n2) {
    return n1 + n2;
}

function calcSum(n1, n2) {
    return n1 - n2;
}

function calcMul(n1, n2) {
    return n1 * n2;
}

function calcSub(n1, n2) {
    return n1 / n2;
}

// Click do botão de resultado na calculadora.
function resultCalc () {
    let result = 0;
    if (calculate.caracterAction == "+") {
        result = calcSum(calculate.firstNum, calculate.secondNum);
    } else if ( calculate.caracterAction == "-") {
        result = calcSub(calculate.firstNum, calculate.secondNum);
    } else if (calculate.caracterAction == "*") {
        result = calcMul(calculate.firstNum, calculate.secondNum);
    } else if (calculate.caracterAction == "/") {
        result = calcSub(calculate.firstNum, calculate.secondNum);
    } else {
        return;
    }
    vision.innerText = result;
};

document.querySelector('.calc').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        // Pega a ultima class da propriedade Class
        let classNameButton = event.target.className;
        let index = event.target.className.lastIndexOf(" ")+1;
        if(classNameButton.substring(index) === 'number-button') {
            alert("number")
        } else if (classNameButton.substring(index) === 'operation-button'){
            alert("operação")
        } else if (classNameButton.substring(index) === 'result-button') {
            resultCalc();
        } else if (classNameButton.substring(index) === 'correct-button') {
            alert("correção")
        } else if (classNameButton.substring(index) === 'del-button') {
            alert("delete")
        }
    }
    
    event.stopPropagation();
});
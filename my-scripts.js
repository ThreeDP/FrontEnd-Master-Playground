const resultButton = document.querySelector('.result-button');
const visionCalc = document.querySelector('.vision-calc');
const visionResult = document.querySelector('.vision-result');

let calculate = {
    caracterAction: " ",
    firstNum: 0,
    secondNum: 0,
}

function calcSub(n1, n2) {
    return n1 - n2;
}

function calcSum(n1, n2) {
    return n1 + n2;
}

function calcMul(n1, n2) {
    return n1 * n2;
}

function calcDiv(n1, n2) {
    return n1 / n2;
}

// Click do botão de resultado na calculadora.
function resultCalc () {
    let result = 0;
    calculate.secondNum = parseInt(visionCalc.innerText)
    if (calculate.caracterAction == "+") {
        result = calcSum(calculate.firstNum, calculate.secondNum);
    } else if ( calculate.caracterAction == "-") {
        result = calcSub(calculate.firstNum, calculate.secondNum);
    } else if (calculate.caracterAction == "*") {
        result = calcMul(calculate.firstNum, calculate.secondNum);
    } else if (calculate.caracterAction == "/") {
        result = calcDiv(calculate.firstNum, calculate.secondNum);
    } else {
        return;
    }
    visionResult.innerText = result;
    calculate.firstNum = parseInt(result);
    calculate.caracterAction = " ";
    visionCalc.innerText = 0;
};

// Inserção dos numeros na Vision
function enterNum (num) {
    if (visionCalc.innerText.substring(0, 1) === '0') {
        visionCalc.innerText = num;
    } else {
        visionCalc.innerText += num;
    }
}

// Função para funções matematica
function operationAction (operator) {

    if (visionResult.innerText.substring(0, 1) === "0" ) {
        calculate.caracterAction = operator;
        calculate.firstNum = parseInt(visionCalc.innerText)
        visionResult.innerText = visionCalc.innerText + " " + operator + " ";
    } else if (calculate.firstNum != 0) {
        resultCalc();
        calculate.caracterAction = operator;
        visionResult.innerText = calculate.firstNum + " " + operator + " ";
    }
    visionCalc.innerText = 0;
}

// Limpa todo o log de operações
function deleteAll() {
    calculate.firstNum = 0;
    calculate.secondNum = 0;
    calculate.caracterAction = " ";
    visionCalc.innerText = 0;
    visionResult.innerText = 0;
}


// Função para apagar o ultimo caracter de visionCalc
function correctCaracter() {
    visionCalc.innerText = visionCalc.innerText.substring(0, visionCalc.innerText.length - 1)
    if (visionCalc.innerText === "") {
        visionCalc.innerText = 0;
    }
}

// defiine qual o tipo de button de entrada.
document.querySelector('.calc').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        // Pega a ultima class da propriedade Class
        let classNameButton = event.target.className;
        let index = event.target.className.lastIndexOf(" ")+1;

        if(classNameButton.substring(index) === 'number-button') {
            enterNum(event.target.innerText);

        } else if (classNameButton.substring(index) === 'operation-button'){
            operationAction(event.target.innerText);

        } else if (classNameButton.substring(index) === 'result-button') {
            resultCalc();

        } else if (classNameButton.substring(index) === 'correct-button') {
            correctCaracter();

        } else if (classNameButton.substring(index) === 'del-button') {
            deleteAll();
        }
    }
    
    event.stopPropagation();
});
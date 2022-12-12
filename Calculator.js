/* Variables*/
const calc = document.querySelector(".calc")
var num1 = '';
var num2 = '';
var oper = '';
var equation = '';

/*Event listner for when page is loaded to make sure js sees all objects*/
window.addEventListener("load", (event) => {
    /*reads the id of button with click event*/
    let numberButtons = document.getElementsByClassName("numberButton");
    for (let button of numberButtons){
        button.addEventListener("click",() => printNum(button.id))
    }
});

/* Functions*/
function testError(){/*Tests if the value is Error then clears the variables*/
    if (num1 == "ERROR")
    butClear();
}

function printNum(value){/*Used to test if which variable to add the next number and print the values */ 
    if (oper == ''){
    num1 = num1 + value;
    equation = equation + value;
    document.getElementById("Textarea").innerHTML = num1;
    } 
    if (oper != ''){
        num2 = num2 + value
        equation = equation + value;
        document.getElementById("Textarea").innerHTML = num2;
        }
    document.getElementById("equation") .innerHTML = equation;
}

function ifNum2exists(){/*Checks for second value and calculates. Resets num2*/
    if (num2 != ''){
        num1 = calculate(num1,oper,num2);
        num2 = '';
    }
}

function calculate(n1,operator,n2){/*gets the two numbers and operator then does the calculation*/
    if (operator === 'plus') {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === 'minus') {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === 'times') {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === 'divide') {
        if (n2 == 0 ){
            result = "ERROR"
        }
        else{
            result = parseFloat(n1) / parseFloat(n2);
        }
      }
      num1 = result;
      return result;
}
/*Buttons*/

function buttonComma() {
    testError();
    printNum(".");
    equation = equation + value;
    document.getElementById("equation") .innerHTML = equation;
}

function buttonClear() {
    num1 = '';
    num2 = '';
    oper = '';
    equation = '';
    document.getElementById("equation") .innerHTML = equation;
    document.getElementById("Textarea").innerHTML= '';
}

function buttonPlus() {
    testError();
    ifNum2exists();
    oper = 'plus';
    equation = equation + '+';
    document.getElementById("Textarea").innerHTML = num1;
    equation = equation + value;
    document.getElementById("equation") .innerHTML = equation;
}

function buttonMinus() {
    testError();
    ifNum2exists();
    oper = 'minus';
    equation = equation + '-';
    document.getElementById("Textarea").innerHTML = num1;
    equation = equation + value;
    document.getElementById("equation") .innerHTML = equation;
}

function buttonTimes(){
    testError();
    ifNum2exists();
    oper='times';
    equation = equation + '*';
    document.getElementById("Textarea").innerHTML = num1;
    equation = equation + value;
    document.getElementById("equation") .innerHTML = equation;
}

function buttonDivide() {
    testError();
    ifNum2exists();
    oper = 'divide'
    equation = equation + '/';
    document.getElementById("Textarea").innerHTML = num1;
    equation = equation + value;
    document.getElementById("equation") .innerHTML = equation;
}

function buttonEquals() {
    testError();
    if (num1 == ''){
        num1 = '0';
    }
    if(num2 == ''){
        num2 = '0';
    }
    if (oper == ''){
        document.getElementById("Textarea").innerHTML = 0;
    }
    else{
        document.getElementById("Textarea").innerHTML = calculate(num1,oper,num2);
    }
    num2 = '';
    oper = '';
    equation = equation + '=';
    document.getElementById("equation") .innerHTML = equation;
    equation = num1;   
}


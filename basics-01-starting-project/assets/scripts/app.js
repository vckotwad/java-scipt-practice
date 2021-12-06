const constant =100;
let currentresult=constant;
function add(){
currentresult=currentresult+ +userInput.value;
outputResult(currentresult,"");
}
function sub(){
    currentresult=currentresult- +userInput.value;
    outputResult(currentresult,"");
}

function mul(){
        currentresult=currentresult* +userInput.value;
        outputResult(currentresult,"");}
        
function div(){
            currentresult=currentresult/ +userInput.value;
            outputResult(currentresult,"");
}

addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',sub)
multiplyBtn.addEventListener('click',mul)
divideBtn.addEventListener('click',div)

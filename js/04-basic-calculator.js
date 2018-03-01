
function calculate(number1,number2,operation) {
var result;
var number1 = parseInt(window.prompt("Type a Number"), 10);
var number2 = parseInt(window.prompt("Type a Number"), 10);
var operation = window.prompt("Would you like to add, subtract, multiply or divide the the numbers?");
    
switch (operation) {
    case "add":
            var result; 
    result = number1 + number2;
    window.alert(result)
    break;
    
    case "subtract":
        var result;
    result = number1 - number2;
    window.alert(result);
    break;
        
    case "multiply":
        var result;
    result = number1 * number2;
    window.alert(result);    
    break;
        
    case "divide": 
        var result;
    result = number1 / number2; 
    window.alert(result);
    break;
} 
    
}

calculate();
    
    


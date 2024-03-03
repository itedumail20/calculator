var num1 = parseInt(prompt("enternum1"))
var num2 = parseInt(prompt("enternum2"))
var operator = prompt("enteroperator")

if(operator == "+"){
alert(num1 + num2)
} else if(operator == "-"){
    alert(num1 - num2)
} else if(operator == "*"){
    alert(num1 * num2)
} else if(operator == "/"){
    alert(num1 / num2)
} else {
    alert("you enter invalid operator")
}

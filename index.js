// data types => char(characters for single alphabet(character) )
// string => "Anthonia"
// integers (numbers) => 20
// boolean => true or false

// var(variable:to initialize or declare)
// alert (alert:to show an alert message on a browser)
// prompt (the prompt method is used to get informaton from a user)
// confirm(to get confirmation response from the user)

var myName = "Hi I am Anthonia,11 years old talking to Hanifat while learning Javascript"
var age = 11
var meanHanifat = true

// alert(myName)
// alert(age)
// alert(meanHanifat)
// alert("var")

// var yourAnswer= prompt("What are you buiding?")
// alert("you are building " + "" + yourAnswer)

// var response = confirm("Do you want to quit?")
// if(response == true) {
//     alert("you are done using the calculator")
// }
// else{
//     alert("you can continue using the calculator")


// var yourAnswer= prompt("What is your age?")

// if(yourAnswer < 10){
//     alert("you are a small child,sorry you re not allowed to use my calculator")

// }
// else{
//     alert("you are a big person you can use my calculator")
// }
// var yourAnswer = confirm("Are you sure you are above the age of 10?")     
// if(yourAnswer == true){
//     alert( "you can continue using my calculator")
// }
// else{
//     alert("you may not proceed to use my calculator")
// }

// console.log("your answer is", yourAnswer)

// addition
// subtraction
// multiplication
// division

// var evaluate = 12 + 15 - 6 * 10 / 2
// alert("the result is " + evaluate)

// functions => are blocks of code that perform a specific function and can be used in multiple places
// function functionName (a, b ,c ,d ,e ,f ,g ,h ,i){
//     "what you want it to do "
// // }

// function first (a ,b ,c ,d ,e){
//     return a + b + c + d + e
// }
// var result =  first(1 , 2 , 36 , 78 , 90)
// alert(first(1 , 2 , 36 , 78 , 90))
// alert(result)

var changeDisplay = document.getElementById("display")
changeDisplay.style.backgroundColor = "gray"

var changeDisplay2 = document.getElementById("num4").value
alert (changeDisplay2)

 // function 1 => to display values on the screen 
function handleClick(value){  
    var display = document.getElementById("display")
    display.value += value
}

// function handleClick2(){
    
//     var display = document.getElementById("display")
//     display.value += number4
// }




// function 2 => to clear values from the screen
function clearScreen(){
    var display = document.getElementById("display")
    display.value = ""
}

// function 3 => to evaluate
function calculate() {
    var evaluate = document.getElementById("display").value;
      var result = eval(evaluate) 
    document.getElementById("display").value = result;    
}


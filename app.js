
// Question 1: Personal Information
var userName1 = prompt("Enter your name.");
var userAge = Number(prompt("Enter your Age."));
var userCity = prompt("Enter your City name.");


// Question 2: Sum of Two Numbers
var a1 = Number(prompt("Enter first number for sum."));
var a2 = Number(prompt("Enter second number for sum."));
var sum = a1 + a2;


// Question 3: Basic Calculator (Beginner)
var b1 = Number(prompt("Enter first number:"));
var b2 = Number(prompt("Enter second number:"));


// Question 4: Rectangle Area
var length = Number(prompt("Enter the length."));
var width = Number(prompt("Enter the width."));
var area = length * width;


// Question 5: Circle Circumference
var radius = Number(prompt("Enter the radius number."));
var circumference = 2 * Math.PI * radius;


// Question 6: Student Marks
var studentName = prompt("Enter student name.");
var eng = Number(prompt("Enter English marks."));
var math = Number(prompt("Enter Math marks."));
var sci = Number(prompt("Enter Science marks."));
var obtained = eng + math + sci;
var totalMarks = 300;


// Question 7: Age After 10 Years
var currentAge = Number(prompt("Enter your current age."));
var after10 = currentAge + 10;


// Question 8: Currency Conversion
var usd = Number(prompt("Enter the amount of USD."));
var pkr = usd * 285;


// Question 9: Favorite Programming Language
var userName2 = prompt("Enter your name.");
var favLang = prompt("Enter your favorite programming language.");


// Question 10: Simple Receipt
var product = prompt("Enter product name.");
var price = Number(prompt("Enter product price in numbers."));
var quantity = Number(prompt("Enter product quantity in numbers."));
var total = price * quantity;


//consoles-----------------------------------------------
console.log("Hello " + userName1 + "!");
console.log("");
console.log("You are " + userAge + " years old.");
console.log("");
console.log("You live in " + userCity + ".");
console.log("");
console.log("Sum: " + sum);
console.log("");
console.log("Addition: " + (b1 + b2));
console.log("Subtraction: " + (b1 - b2));
console.log("Multiplication: " + (b1 * b2));
console.log("Division: " + (b1 / b2));
console.log("");
console.log("Area = " + area);
console.log("");
console.log("Circumference = " + circumference);
console.log("");
console.log("Student: " + studentName);
console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtained);
console.log("");
console.log("Your age after 10 years will be " + after10 + ".");
console.log("");
console.log("You have total " + pkr + " PKR.");
console.log("");
console.log("Hello " + userName2 + "!");
console.log("Your favorite programming language is " + favLang + ".");
console.log("Keep practicing!");
console.log("");
console.log("Product: " + product);
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Total: " + total);

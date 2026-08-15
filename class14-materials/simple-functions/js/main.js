let num1 = document.querySelector('#fnum').value;
let num2 = document.querySelector('#snum').value;
let num3 = document.querySelector('#tnum').value;

//create a function that adds two numbers and alerts the sum
function add(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    alert(result);
}
//create a function that multiplys three numbers and console logs the product
function mult(num1, num2, num3) {
    let result = num1 * num2 * num3;
    console.log(result);
    alert(result);
}
//create a function that divides two numbers and returns the ???
function quo(num1, num2) {
    let result = num1 / num2;
    console.log(result);
    alert(result);
}

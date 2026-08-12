document.querySelector('#run').addEventListener('click', run);
function sayHi() {
    alert("Hello"); // shows "Hello"
    alert(sayHi); //shows the function code
}

let func = sayHi;

function run() {
    func();
    sayHi();
};
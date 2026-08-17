document.querySelector('#submit').addEventListener('click', function() {
    let num = document.querySelector('#input').value;
    if (num > 100) {
        alert("Please enter a value that is less than or equal to 100.")
    }else if (num < 50) {
        alert("Please enter a value that is bigger than or equal to 50.")
    }else{
        alert("Thank you, your input was submitted.")
    }
});
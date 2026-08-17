document.querySelector('#submit').addEventListener('click', function() {
    let num = document.querySelector('#input').value;
    if(num%2 !== 0) {
        console.log(`${num} is an odd number.`);
    }else{
        console.log('${num} is an even number.');
    }
});

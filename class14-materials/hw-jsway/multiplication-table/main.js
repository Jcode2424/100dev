document.querySelector('#input').addEventListener('focus', function() {
    document.querySelector("#multi").innerText = '';
});
document.querySelector('#submit').addEventListener('click', function() {
    document.querySelector("#multi").innerText = '';
    let num = document.querySelector('#input').value;

    if(num===''){
        alert("Please enter a value.")
    }else if(isNaN(Number(num))){
        alert("Please enter a number.")
    }else if(num>9 || num<1){
        alert("Please enter a value from 1 to 9.")
    }else{
        for(let i=1; i<=9; i++) {
            let prod = num * i;
            document.querySelector('#multi').innerText += `${num} * ${i} = ${prod}\n`
        }
    }
    document.querySelector("#input").value = '';
});


document.querySelector('#fizzbuzz').addEventListener('click', function() {
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5!=0){
            document.querySelector('#output').innerText += 'fizz ';
        }else if(i%3!=0 && i%5==0){
            document.querySelector('#output').innerText += 'buzz ';
        }else if(i%3==0 && i%5==0){
            document.querySelector('#output').innerText += 'fizzbuzz\n';
        }else{
            document.querySelector('#output').innerText += `${i} `;
        }
    }
});
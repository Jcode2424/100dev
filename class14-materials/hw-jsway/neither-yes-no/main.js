document.querySelector('#submit').addEventListener('click', function() {
    let itxt = document.querySelector('#input').value;
    let txt = itxt.toLowerCase();
    if(txt !== 'yes' && txt !== 'no') {
        alert('Please enter something else.');
    }else{
        alert('Great!');
    }
    document.querySelector('#input').value = '';
});
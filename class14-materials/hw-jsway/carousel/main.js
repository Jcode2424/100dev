let i = 1;

document.querySelector('#turn').addEventListener('click', function() {
    if (i>10) {
        document.querySelector('#carousel').innerText = '';
        i=1;
    }
    document.querySelector('#carousel').innerText +=`${i}`
    i++;
});
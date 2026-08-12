
// Task 1: Is else required?

document.querySelector('#button1').addEventListener('click', elseRequired)

function elseRequired() {
    let age = document.querySelector('#age').value;
    let a;
    if (elseRequired1(age) === elseRequired2(age)) {
        a = "not needed!"
    }else {
        a = "needed!"
    }        

    document.querySelector('#print').innerText = 'Else is ' + `${a}.`;
}

function elseRequired1(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function elseRequired2(age) {
    if (age > 18) {
        return true;
    }

    return confirm('Did parents allow you?');
}


//Task 2: Rewrite the function using '?' or '||'

document.querySelector('#qmark-or').addEventListener('click', isSame);

function isSame() {
    let age = document.querySelector('#age').value;
    if (qmark(age) === or(age)){
        a = "are the same!";
    }else{
        a = "are not the same!";
    }

    document.querySelector('#print2').innerText = 'The functions '+ `${a}.`;
}

function qmark(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// function twobars(age) {
//     if (age > 18 || age <= 18)
//         return true;
//     return confirm('Did parents allow you?');
// }

function or(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Task 3: Function min(a, b)

document.querySelector('#comp').addEventListener('click', comp);

function comp() {
    // alert('comp is running');
    let min;
    const fvalue = document.querySelector('#first-value').value;
    const svalue = document.querySelector('#second-value').value;

    if (fvalue === "" && svalue === "") {
        alert('please submit the first and second values.')
    }
    else if (fvalue === "" && svalue !== "") {
        alert('please submit the first value.')
    }
    else if (svalue === "" && fvalue !== "") {
        alert('please submit the second value.')
    }
    else {
        const fnum = Number(fvalue);
        const snum = Number(svalue);
        if (fnum >= snum) {
            min = snum;
        }
        else {
            min = fnum;
        }
    }

    document.querySelector('#print3').innerText = 'The min of ' + `${fvalue}` + ' and ' + `${svalue}` + ' is ' + `${min}.`;
}

// Task 4: Function pow(x, n)

document.querySelector('#power').addEventListener('click', pow);

function pow() {
    const xvalue = Number(document.querySelector('#xvalue').value);
    const nvalue = Number(document.querySelector('#nvalue').value);
    let pow = 1;

    for (let n=1; n<=nvalue; n++) {
        pow = pow * xvalue;
    }

    document.querySelector('#print4').innerText = 'The power is ' + `${pow}.`;
}

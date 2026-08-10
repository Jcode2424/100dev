// Task 1: Working with Variables
document.querySelector('#check').addEventListener('click', result);

function result() {
    // let admin;
    // let name;

    let admin, name;

    name = "John";
    admin = name;

    alert(admin);
}


// Task 2: Giving the Right Name

// let ourPlanet;
// let currVisitor;
document.querySelector('#rightname1').addEventListener('click', rightname1);

function rightname1() {
    let ourPlanetName = "Earth";
    alert(ourPlanetName);
}

document.querySelector('#rightname2').addEventListener('click', rightname2);

function rightname2() {
    let currentUserName = "John";
    alert(currentUserName);
}


// Task 3: Uppercase Const?

const BIRTHDAY = '18.04.1982';
const AGE = someCode(BIRTHDAY);


document.addEventListener('DOMContentLoaded', function() {
    ask(
        "Do you agree?",
        function() {
            alert("You agreed.");
        },
        function(){
            alert("You canceled execution");
        }
    )
});

// ask(
//     "Do you agree?",
//     function() {alert("You agreed.");},
//     function() {alert("You canceled the execution.");}
// );

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
} 

// let ask = (question, yes, no) ?
//     () => yes():
//     () => no();  --> wrong because ? doesn't ask the user anything.
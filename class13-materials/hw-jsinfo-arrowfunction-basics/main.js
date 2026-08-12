
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

document.addEventListener('DOMContentLoaded', ask (
    "Do you agree?",
    () => alert("You agree."),
    () => alert("You cancelled execution")
    )
)

// document.addEventListener("DOMContentLoaded", function() {

//     function ask(question, yes, no) {
//         if (confirm(question)) {
//             yes();
//         } else {
//             no();
//         }
//     }

//     ask(
//         "Do you agree?",
//         () => alert("You agree."),
//         () => alert("You cancelled execution")
//     );

// });
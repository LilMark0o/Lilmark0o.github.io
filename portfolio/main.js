let textLength = 0;
let text = "Python and Web Developer - Systems Engineering Student";

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if (textLength < text.length + 1) {
        setTimeout('type()', 50);
    } else {
        text = 'Python and Web Developer - Systems Engineering Student';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    type()
});

function download() {
    window.open("./CV_English.pdf", '_self');
}

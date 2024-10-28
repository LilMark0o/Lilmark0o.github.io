let textLength = 0;
let text = "Data Analyst and Web Developer";

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if (textLength < text.length + 1) {
        setTimeout('type()', 50);
    } else {
        text = 'Data Analyst and Web Developer';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    type()
});

function download() {
    window.open("./CV_English.pdf", '_self');
}


function makeBigger() {
    document.getElementById("ftext").style.fontSize = "24pt";


}

function makeBold() {
    var textarea = document.getElementById("ftext");
    if (document.getElementById("bold").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.textDecoration = "none";
        textarea.style.color = "green";
    }
}
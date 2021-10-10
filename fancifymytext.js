
function makeBigger() {
    document.getElementById("ftext").style.fontSize = "24pt";

}

function makeBold() {
    var textarea = document.getElementById("ftext");
    if (document.getElementById("bold").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.textDecoration = "none";
        textarea.style.color = "blue";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
        textarea.style.color = "black";

    }
}

function makeNormal() {
    var textarea = document.getElementById("ftext");
    document.getElementById("ftext").style.fontSize = "12pt";
    
}
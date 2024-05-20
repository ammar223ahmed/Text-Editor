var text_screen = document.getElementById("text_screen");
var input = document.getElementById("inputt");
function bold(){
    //    alert("Bold Chal raha hain");
    text_screen.style.fontWeight = "bold";
}
function italic(){
    text_screen.style.fontStyle = "italic";
}
function underline(){
    text_screen.style.textDecoration = "underline";
    // text_screen.style.color = "red";

}
var inputfield = input.value;
console.log(inputfield);
function fontsize(){
 var text_screen_value = text_screen.value;
 var inputstyle = text_screen.style.fontSize = inputfield + "px";
}

// var size = prompt("Enter font size");
// text_screen.style.fontSize = size + "px";   

function textcolor(){
    var inputfields = color.value;
  console.log(inputfields);
  var inputstyle = text_screen.style.color = inputfields;
    // var inputstyle = text_screen.style.color 
}
function fontfamily1(){
    // alert("chal raha hoon bahi >>> ")
    text_screen.style.fontFamily = "'Courier New', Courier, monospace";

}
function fontfamily2(){
    // alert("chal raha hoon bahi >>> ")
    text_screen.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

}
function fontfamily3(){
    // alert("chal raha hoon bahi >>> ")
    text_screen.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

}function fontfamily4(){
    // alert("chal raha hoon bahi >>> ")
    text_screen.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";

}function fontfamily5(){
    // alert("chal raha hoon bahi >>> ")
    text_screen.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

}

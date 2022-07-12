var number1 = 0;
var number2 = 0;
var actualanswer

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualanswer = parseInt(number1)*parseInt(number2);
    questionnumber="<h4>"+number1+"x"+number2+"</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_check_box'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
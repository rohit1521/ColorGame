var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 78, 0)",
    "rgb(255, 0, 84)",
    "rgb(215, 0, 140)",
    "rgb(100, 100, 100)",
    "rgb(25, 24, 80)"
]

winningColor = colors[3];

var colorShow = document.querySelector("#colorShow");

colorShow.textContent = winningColor;
var squreColors = document.querySelectorAll(".square");
for(var i =0 ;i < colors.length ; i++){
    squreColors[i].style.backgroundColor = colors[i];
    squreColors[i].addEventListener("click",function(){
        if(this.style.backgroundColor === winningColor){
            alert("Correct!");
        }else{
            alert(this.style.backgroundColor);
        }
    })
}
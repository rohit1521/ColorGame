var colors = []
var h1 = document.querySelector("h1");
for(var i = 0;i < 6;i++){
colors[i] = "rgb("+Math.floor((Math.random() * 255) + 1)+ ", "+Math.floor((Math.random() * 255) + 1)+", "+Math.floor((Math.random() * 255) + 1)+")";
}
var winningColor = colors[Math.floor((Math.random() * 6) + 1)];
var colorShow = document.querySelector("#colorShow");
var barText = document.querySelector("#topBar");

colorShow.textContent = winningColor;
var squreColors = document.querySelectorAll(".square");
for(var i =0 ;i < colors.length ; i++){
    squreColors[i].style.backgroundColor = colors[i];
    squreColors[i].addEventListener("click",function(){
        if(this.style.backgroundColor === winningColor){
            changeColor(winningColor);
            topBar.textContent = "Correct!";
            h1.style.backgroundColor = winningColor;
        }else{
            this.style.backgroundColor = "#232323";
        }
    })
}

function changeColor(color){
    for(var i=0;i<squreColors.length;i++){
        squreColors[i].style.backgroundColor = color;
    }
}
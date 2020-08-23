 var numSquares=6;
 var colors=generateRandomColor(numSquares);
 var squares=document.querySelectorAll(".square");
 var pickedColor=pickColor();
 var colorDisplay=document.querySelector("#colorDisplay");
 var messageDisplay=document.querySelector("#message");
 var h1Display=document.querySelector("h1");
 var resetButton=document.querySelector("#reset");
 var easyButton=document.querySelector("#easyBtn");
 var hardButton=document.querySelector("#hardBtn");
 var modeButton=document.querySelectorAll(".mode");
 for(i=0;i<modeButton.length;i++){
     modeButton[i].addEventListener("click",function(){
         modeButton[0].classList.remove("selected");
         modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy"){
            numSquares=3;
        }else{
            numSquares=6;
        }
        reset();
     });
 }
 function reset(){
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
        
    }
    h1Display.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
 }
//  easyButton.addEventListener("click",function(){
//     hardButton.classList.remove("selected");
//       easyButton.classList.add("selected");
//       numSquares=3;
//       colors=generateRandomColor(numSquares);
//       pickedColor=pickColor();
//       for(var i=0;i<squares.length;i++){
//           if(colors[i]){
//               squares[i].style.backgroundColor=colors[i];
//           }else{
//              squares[i].style.display="none"; 
//           }
//       }
//  });
//  hardButton.addEventListener("click",function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//      numSquares=6;
//      colors=generateRandomColor(numSquares);
//      pickedColor=pickColor();
//      for(var i=0;i<squares.length;i++){
//             squares[i].style.backgroundColor=colors[i];
//             squares[i].style.display="block"; 
//     }
//  })
 colorDisplay.textContent=pickedColor;
 resetButton.addEventListener("click",function(){
     reset();
 });
 for(var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];
    
     squares[i].addEventListener("click",function(){
         var clickedColor = this.style.backgroundColor;
       if(clickedColor===pickedColor) {
           messageDisplay.textContent="Correct!";
           changeColor(clickedColor);
           h1Display.style.backgroundColor=clickedColor;
           resetButton.textContent="Try Again?";
       }
       else{
          this.style.backgroundColor= "#242424" ;
          messageDisplay.textContent="Try Again!";
       }
   });
}
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColor(num){
    var arr=[];
     for(i=0;i<num;i++){
         arr.push(randomColor());
     }
    return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
/*slide show*/
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("cimage");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

/*video*/
function videoChoise() {
    var drpVideoChoices = document.getElementById("drpVideoChoices");
    var vplayer = document. getElementById("player") 
    var yourChoise = drpVideoChoices.value;
    var available = [
        "assets/images/Satang_Jabang_Agriculture_video_1.mp4",
        "assets/images/Satang_Jabang_Textile _video_2.mp4"
    ];
    player.src = available[yourChoise];
    player.play();
}

/*alert*/
function myFunction() {
  alert("Bedankt");
}
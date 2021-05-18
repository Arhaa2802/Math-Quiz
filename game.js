player1=localStorage.getItem("login1");
player2=localStorage.getItem("login2");
document.getElementById("player1").innerHTML=player1+":";
document.getElementById("player2").innerHTML=player2+":";
Qturn="player1";
Aturn="player2";
player1Score=0;
player2Score=0;
document.getElementById("score1").innerHTML=player1Score;
document.getElementById("score2").innerHTML=player2Score;
document.getElementById("turn_question").innerHTML="Question Turn-"+player1;
document.getElementById("turn_answer").innerHTML="Answer Turn-"+player2;


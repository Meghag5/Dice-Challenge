var randomNumber1 = Math.floor(Math.random()*6)+1;  // 1 to 6
var randomImage1 = "dice" + randomNumber1 + ".png";  // dice1.png to dice2.png
var randomImageSrc1 = "images/" + randomImage1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSrc1);
//alert(randomImageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;  // 1 to 6
var randomImage2 = "dice" + randomNumber2 + ".png";  // dice1.png to dice2.png
var randomImageSrc2 = "images/" + randomImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
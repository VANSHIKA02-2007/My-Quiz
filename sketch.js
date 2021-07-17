var canvas;
var database;
var contestant, contestantCount;
var question;
var quiz;
var gameState = 0;

function setup()
{
  canvas = createCanvas(850,400);
  datbase = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("pink"); 
}
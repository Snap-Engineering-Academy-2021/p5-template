let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let backgroundimg;
let words;
let phraselist = [];

function preload() {
  words = loadStrings('./doge-words.txt');
  backgroundimg = loadImage('https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/mpx/2704722219/2021_06/1623153630902_ott_now_am_dogecoin_210608_1920x1080.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  words.forEach((phrase) => { 
    phraselist.push(phrase)});
  image(backgroundimg,0,0);
  console.log(phraselist);
  noStroke();
}

function draw() {
  let rate = 20;
  const dogeX = 410;
  const dogeY = 200;
  let distanceX, distanceY, distance;
  distanceX = mouseX - dogeX;
  distanceY = mouseY - dogeY;
  distance = Math.pow(Math.pow(distanceX,2) + Math.pow(distanceY,2),0.5);
  textSize(10+6*Math.log(distance/50));
  if(frameCount%rate == 0) {
  fill(random(colorlist));
    let currWord = random(phraselist);
    text(currWord,mouseX,mouseY);
  }
}

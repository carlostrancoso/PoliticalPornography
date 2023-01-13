let esq;
let dir;
let w = 200;
let h = 260;
var wW = window.innerWidth;
var wH = window.innerHeight;

function preload() {
  esq = loadImage('assets/ESQ.JPG');
  dir = loadImage('assets/DIR.JPG');
  
}

function setup() {
  canvas = createCanvas(wW, wH);
  esq.resize(wW -40, wH - 40);
  dir.resize(wW + 80  , wH + 80);
  
}

function draw() {

  let sx = mouseX;
  let sy = mouseY;
  let sw = w;
  let sh = h;

  let dx = mouseX-w/2;
  let dy = mouseY-h/2;
  let dw = w;
  let dh = h;

    background(254);
  noCursor();
 // image(dir, 0, 0);
    image(esq, 20, 20);
    
    fill(254,0);
    stroke(255, 221, 0);
    strokeWeight(8);

    copy(dir, sx, sy, sw, sh, dx, dy, dw, dh);
    //copy(dir, mouseX-w/2, mouseY-h/2, w, h, mouseX+480 - w/2, mouseY - h/2, w*2.5, h*2.5);
    //copy(dir, mouseX-w/2, mouseY-h/2, w, h, mouseX+offsetW+500 - w/2, mouseY+offsetH - h/2, w*2.5, h*2.5);

    rect(mouseX-w/2,mouseY-h/2, w, h);
}

window.onresize = function() {
  // assigns new values for width and height variables
  wW = window.innerWidth;
  wH = window.innerHeight;  
  canvas.size(wW,wH);
}
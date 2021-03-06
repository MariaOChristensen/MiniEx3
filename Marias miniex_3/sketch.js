var img1, img2, img3, img4, img5, img6, img7, img8;
var targetFPS = 60;
 
function preload() { 
    img1 = loadImage("images/1 Halo of the sun outer symbols.png");    
    img2 = loadImage("images/2 Halo of the sun circle.png");
    img3 = loadImage("images/3 Halo of the sun inner symbols.png");
    img4 = loadImage("images/4 Halo of the sun inner circles.png");
    img5 = loadImage("images/5 Halo of the sun fixed symbol left.png");
    img6 = loadImage("images/6 Halo of the sun fixed symbol right.png");
    img7 = loadImage("images/7 Halo of the sun fixed symbol bottom.png");
    img8 = loadImage("images/8 Halo of the sun middle symbol.png");
}
   
function setup() {
   createCanvas(1000, 1000);
   frameRate(targetFPS);
}
 
function draw () {
 
    var torque = 40.0;
    var t = frameCount / targetFPS;
 
    background(0);
    image(img1, 195.0, 197.0);
    doAnimsAndPivotAndSuch(img2, 464.0, 464.0, torque*(-t));
    doAnimsAndPivotAndSuch(img3, 464.0, 464.0, torque*(t));
    image(img4, 331.0, 318.0);
    image(img5, 350.0, 393.0);
    image(img6, 518.0, 395.0);
    image(img7, 433.0, 545.0);
    image(img8, 435.0, 435.0);
}
 
function doAnimsAndPivotAndSuch(img, x, y, ang) {
   
    var w = img.width;
    var h = img.height;
 
 
    translate(x, y);
    rotate(ang * Math.PI / 180.0); // deg2radians
    translate(-w, -h);
    image(img, w/2.0, h/2.0);
   
    resetMatrix();
 
}
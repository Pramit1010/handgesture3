function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,139,92,220,200);

    stroke(168, 10, 10);
    fill(150, 1, 1);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(5, 190, 10);
    fill(50, 168, 82);

    rect(63, 29, 375, 15);
    rect(63, 351, 375, 15);
    rect(34, 63, 15, 275);
    rect(453, 63, 15, 275);
}

function take_snapshot(){
    save("your_pic.png");
}
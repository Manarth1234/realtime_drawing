noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(70,70);
    canvas = createCanvas(550,400);
    canvas.position(620,120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);


    }
}
    

function modelLoaded() {
    console.log("PoseNet is initialized!");
}
function draw() {
    background("#969A97");
    document.getElementById("square_side").innerHTML = "Width and Height of the square = " + difference + "px!";
    fill("#e85702");
    stroke("#0011fc");
    square(noseX, noseY, difference);
}

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet model loaded');
}

function gotPoses(poses) {
  if (poses.length > 0) {
    console.log(poses);
  }
}

function draw() {
  background(220);
  textSize(32);
  fill(0);
  text('Tu nombre', 10, 30);

  if (poses.length > 0) {
    let leftWristX = poses[0].pose.leftWrist.x;
    let rightWristX = poses[0].pose.rightWrist.x;
    let diff = Math.floor(Math.abs(leftWristX - rightWristX));
    textSize(diff);
    text('Diferencia: ', diff, 10, 60);
  }
}
noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(500,150);
    posenet=ml5.poseNet(video,modelLoaded);
}
function modelLoaded()
    {
      console.log("PoseNet Initialized");
    }
    function draw()
    {
       background('#FFFFFF');
    }
    



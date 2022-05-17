props=" ";


function preload()
{
    goggles_1_img=loadImage("https://i.postimg.cc/x1c2VSpP/goggles-1.png")
}

function setup()
{
    canvas= createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
     posenet = ml5.poseNet(video,modelLoaded)
     posenet.on('pose',gotPoses)
     
} 


function modelLoaded()
{
    console.log("modelLoaded!")
}

function gotPoses(results)
{   if (results.length > 0)
    {
        console.log(results)
        right_eye_x=results[0].pose.rightEye.x;
        right_eye_y=results[0].pose.rightEye.y;
        console.log("right_eye_x"+results[0].pose.rightEye.x);
        console.log("right_eye_y"+results[0].pose.rightEye.y);

    }
}

function draw()
{
    image(video,0,0,500,500)
    if(props=="goggles_1")
    {
        image(goggles_1_img,right_eye_x,right_eye_y,50,50);
    }
}

function goggles_1()
{
    props="goggles_1";
}


 

function preload(){

}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600,600);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex= results[0].pose.nose.x
        nosey= results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    
    }
    
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function draw(){
    image(video,0,0,600,600)
}

function take_snapshot(){
    save('myFilterImage.png');
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
}

function preload(){
    img=loadimage('istockphoto-693757588')
    objects=[];
    }

    function modelLoaded(){
    console.log("Model Loaded!!!!!!!!!!!!!!!!!")
    status=true;
    objectDetector.detect(video,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw(){
    image(video,0,0,380,380);
    if(status !="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
objectDetector.detect(video,gotResult)
    for(i=0; i< objects.length; i++){
        document.getElementById('number_of_objects').innerHTML = "Number of objects detected are :"+objects.length;
        
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%" , objects[i].x+15, objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y, objects[i].width,objects[i].height);
    }
    }
}
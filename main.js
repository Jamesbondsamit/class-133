img="";
object=[];
status="";

function preload(){
    img=loadImage('market.jpg');
}

function setup(){
    canvas=createCanvas(640,450);
    canvas.center();
   objectDetector=ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="Status: detecting object";
}
function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results);
        object=results;
    }
}
function draw(){
image(img,0,0,640,450);
if(status !=""){
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="status: object detected";
    fill("#00a8ad");
 percent=floor(object[i].confidence*100);
 text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
 stroke("#00a8ad");
noFill();
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
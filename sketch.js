var gameState=1
function preload(){
    q1=loadImage("q1.jpg")
    q2=loadImage("q2.jpg")
    q3=loadImage("q3.jpg")
}
function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
 
}
function draw() {
    background(200);
    if(gameState===1){
        var q1Text=createElement("h3");
        q1Text.position(650,85);
        q1Text.html("How many Ducks");

        
        imageMode(CENTER)
        image(q1,width/2,height/3,width/4,height/2)

        var A1=createRadio();
        A1.style('font-size','30px');
        A1.option("8");
        A1.option("9");
        A1.option("10");
        A1.option("11");
        A1.position(600,500);
        
    }
    
}
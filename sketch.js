var canvas;
var music;
var box1, box2, box3, box4;
var ball
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(106,560,186,20);
    box1.shapeColor = rgb(255,204,204)//pink
    box2 = createSprite(302,560,186,20);
    box2.shapeColor = rgb(204,255,204);//green
    box3 = createSprite(498,560,186,20);
    box3.shapeColor = rgb(229,204,255)//purple
    box4 = createSprite(694,560,186,20);
    box4.shapeColor = rgb(255,255,204);//yellow


    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,30,30)
    ball.shapeColor = rgb(255,255,255);//white
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    ball.bounceOff(createEdgeSprites);

    if(keyDown("space")){
        ball.velocityX = 6;
        ball.velocityY = 6;
    }
    //add condition to check if box touching surface and make it box

    /*if(box1.isTouching(ball)){
        ball.bounceOff(box1)
        ball.shapecolor = rgb(255,204,204);
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.velocity = 0
        ball.shapecolor = rgb(255,204,204);
        music.stop();
    }

    if(box3.isTouching(ball)){
        ball.bounceOff(box3)
        ball.shapecolor = rgb(255,204,204);
        music.play();
    }

    if(box4.isTouching(ball)){
        ball.bounceOff(box4)
        ball.shapecolor = rgb(255,204,204);
        music.play();
    }*/


    drawSprites();
}

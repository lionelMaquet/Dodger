let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let bgColor = [255,255,255]
let birdColor = [0,0,0];
let birdWidth = 20;
let gravity = 5;


let bird = {
  x : canvasWidth / 4 ,
  y : canvasHeight / 2 ,
  width: birdWidth,
  flyLevel: 100,
  display : function() {
    fill(birdColor[0],birdColor[1],birdColor[2]);
    ellipse(this.x,this.y,this.width,this.width);
  },

  move : function(){
    console.log(bird.flyLevel)

    bird.y += gravity;

    if (bird.flyLevel >= 0) {

      if (mouseIsPressed == true) {

        if (!bird.hitsTopLimit()) {
          bird.flyLevel-=1.5
          bird.y-= gravity * 3
        }


      }

    }

  },

  hitsTopLimit : function() {
    return (bird.y < 0 )
  },

  increaseFlyLevel: function() {

    if (mouseIsPressed == false) {

      if (bird.flyLevel < 100) {
        bird.flyLevel+=1
      }

    }

  },


}






function setup() {
  angleMode(DEGREES);
  createCanvas(canvasWidth,canvasHeight);
  background(bgColor[0],bgColor[1],bgColor[2]);
}

function draw() {
  background(bgColor[0],bgColor[1],bgColor[2]);
  bird.display()
  bird.move()
  bird.increaseFlyLevel()

}

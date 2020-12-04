class Box extends BaseClass {

    constructor(x, y){

      super(x, y,30,40);
      this.visibility = 255;

    }

    score(){

      if(this.visibility < 0 && this.visibility > -100){

          score++;

      }

    }

    display(){

        super.display();

    }
  
  }
  
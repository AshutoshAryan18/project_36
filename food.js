class Food{
    constructor(){
        this.foodStock =15
        this.lastfed
        this.image = loadImage("Milk.png")

    }
    getFoodStock(){
       return this.foodStock
    }
    updateFoodStock(foodStock){
      this.foodStock = this.foodStock
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1
        }
        return this.foodStock;
        
    }
    getfedTime(lastfed){
        this.lastfed = lastfed
    }
    display(){
        var x=80,y=100;

        imageMode(CENTER)
        image(this.image,720,220,70,70)

        if(this.foodstock!=0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }

    }

}
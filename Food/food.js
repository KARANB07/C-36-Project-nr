class Food{
    constructor(){
        this.foodStock
        this.lastFed
        milk=loadImage("images/Milk.png")
        
    }
   
        getStock(){
        var stockRef= database.ref('food');
        stockRef.on("value",function(data){
           foodStock=data.val();
        })
    }


   writeStock (x){
    database.ref('food').set({
        food:x-1
    })
     
        //deductFood(){
       //  //stockRef= await database.ref('food')
       //// database.ref('/').update({
        //    food: database.ref('food')-1
        //})
    //}
   }
}
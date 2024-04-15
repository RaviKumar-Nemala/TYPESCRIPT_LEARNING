class User
{
    
     constructor( private userid : number )
     {
         this.userid = userid;
     }

     get userId():number{
        return this.userid;
     }

     //we should not declare any return type at here 
     //even if we declare the void type it throws error in typescript
   
     //  set userId( userid : number):void 
    //  {
    //     this.userid = userid;
    //  }


     set userId( userid : number)
     {
         this.userid = userid;
     }

}
let user = new User(1);
console.log( user.userId) //internally calls the getter method 

//accessing the setter
user.userId =  11;
console.log( user.userId)
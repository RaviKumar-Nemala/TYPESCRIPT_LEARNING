class Person 
{
    name : string  
    id : number 
    constructor( name:string , id : number )
    {
         this.name = name;
         this.id = id ;
    }
}

let p = new Person ( 'ravi' , 1 );

console.log( p );

//RECOMMENDED BETTER SYNTAX
class New_Person
{
    readonly db_id :string = '123'
    constructor( public  name :string , public id :number)
    {
    }
}

//ADDING THE PRIVATE VARIABLES;

class Person_2 
{
    private readonly  db_id:string = 'SECRET';
    temp : number = 11; //we must initialize either at the constructor or at declartion otherwise we get the compile time error
     constructor( private name : string , private id : number )
     {
        this.name = name ;
        this.id= id ;
     }
     public getName():string
     {
        return this.name;
     }
     public getId():number
     {
        return this.id;
     }
     public getDbId():string{
        return this.db_id;
     }
}

let p2 = new Person_2 ( 'ravi' , 1 );
console.log( p2.getName() , p2.getId() , p2.getDbId() );


let np = new New_Person('kumar' , 33);
console.log( np  );
// console.log( p2.db_id);//error cannot access private variable from outside
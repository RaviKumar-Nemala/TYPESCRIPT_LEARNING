//it we don't declare any initializers then it follows the sequence of values from 0
enum Vals { 
    First ,
    Second,
    Third,
    Fourth
}

console.log ( Vals.First + ' ' + Vals.Second )


//since first member has the value 1 so next two members having the values like ( 2 , 3 )
enum Vals2 
{
     First = 1,
     Second ,
     Third
}
//ERROR CANNOT CHANGE THE VALUES OF THE ENUMS SINCE THEY ARE CONSTANTS
// Vals2.First = 44;
console.log( Vals2.First + ' ' + Vals2.Second );


//DECLARING THE STRING TYPE ENUMS
// AUTOMATIC SEQUENCE FORMED ONLY FOR THE NUMBER 
enum Vals3 
{
    First = 'FIRST',
    Second = 'SECOND' ,
    Third  ='THIRD'
}

console.log( Vals3.First  ,  Vals3.Second )


//DECLARING THE MULTIPLE DATA TYPES WITH THE ENUMS

 enum Vals4 {
     First = 'FIRST',
     //auto sequece is formed since third and fourth are not declared
     Second = 2,
    Third ,
    Fourth ,
    //now autosequence is stopped
    Fifth = 'true'
}
console.log( Vals4.First ,Vals4.Second , Vals4.Third , Vals4.Fourth)


type t = {
    name : string,
    heaven ():string,
}

function solve(  vals : t )
{
    console.log( vals.heaven());
}

solve( { name : 'hello' , heaven :()=>'hello'  });
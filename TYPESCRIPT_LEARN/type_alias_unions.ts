type  obj = {
    x : number | string,
    y : boolean | null
}

function myobj ( obj : obj)
{
    console.log( obj);
}
myobj({x : 1 , y :true});
myobj({x:"Ravi" , y : null})

type dd =  number | string ;

function solve( dd : dd)
{
    console.log( dd);
}
solve( 1);
solve( "1");

let  combo : ( number | string)[] =  [1 , 2 ,"1","2"];
console.log( combo)


// In TypeScript, a tuple is a data structure that allows you to store 
// a fixed-size collection of elements of different types.

let mytuple : [ string , number , boolean] ;
mytuple = [ "1" , 2 , true];

//  mytuple = [ 1 ,2, false]; due to type mismatch

console.log(mytuple);
//tuple  is rerely used ds we can add the elements into the tuple after the block size ( here = 3 )
mytuple.push( 1);
// mytuple[0] = 1 //cannot assign the number to the string
console.log( mytuple)
let a : number = 1
mytuple.unshift(a); //now the sequence is distrubed
console.log( mytuple)
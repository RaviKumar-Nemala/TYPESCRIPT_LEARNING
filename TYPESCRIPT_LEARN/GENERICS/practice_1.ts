interface Stack<T>
{
    push(ele: T) : T,
    pop():T,
    peek():T,
    isEmpty():boolean,
}

class StackImpl<T> implements Stack<T>
{
    private arr: T[] ;
    private size : number;
    constructor()
     {
        this.arr = [];
        this.size = 0 ;
     }

     public push( ele: T ) : T
     {
            this.arr.push( ele );
            this.size++;
            return ele;
     }
     public pop( ): T 
     {
         if ( this.isEmpty())
         {
            throw new Error( 'STACK IS EMPTY CANNOT POP ELEMENTS');
         }
         else
         {
            const del_idx = this.size -1;
            const del_val = this.arr [ del_idx];
            this.arr.splice( del_idx , 1);
            this.size--;
            return del_val;
         }
     }
     public peek():T{
         if ( this.isEmpty())
         {
            throw new Error( 'STACK IS EMPTY CANNOT PEEK ELEMENTS');
         }
         else
         {
            return this.arr [ this.size -1];
         }
     }
    public isEmpty(): boolean {
       return this.size == 0 ;
     }
     
     public print_elements( )
     {
        console.log( this.arr );
     }

}


let mystack = new StackImpl();
mystack.push( 1 );
mystack.push( 2);
mystack.push( 3);
mystack.print_elements();
interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}

class QueueImpl<T> implements Queue<T> {

    private arr : T []; 
    private size : number;
    private curr_idx : number;
    constructor()
    {
         this.arr = [] ;
         this.size= 0 ;
         this.curr_idx = -1;
    }
    enqueue(item: T): void {
        if( this.curr_idx == -1 )
        {
            this.curr_idx = 0 ;
        }

        this.arr.push( item );
        this.size ++;
    }

    dequeue(): T | undefined {
        if ( this.size <=0 )
        {
             return undefined;
        }
        else 
        {
            let del_idx  = this.curr_idx;
            let del_val = this.arr [ del_idx ];
            this.arr.splice( del_idx , 1 );
            this.size -- ;

            if ( this.size  <= 0 )
            {
                this.curr_idx  = -1;
            }
            else 
            {
                this.curr_idx = 0;
            }

            return del_val;
        }
    }
    peek() : T | undefined { 
        if ( this.isEmpty())
            return undefined;
        return this.arr[ this.curr_idx];
    }
    
    isEmpty(): boolean {
        return this.size  <= 0 
    }

}


let myQueue  = new QueueImpl<number>();

myQueue.enqueue(1);
myQueue.enqueue(2);

while ( myQueue.isEmpty() ==false )
{
    console.log( myQueue.dequeue() );
}

console.log( );

export let obj =  { a: 1 , b : 2 };

//does not working   but works in javascript;

// for ( let key in obj )
// {
//     console.log( key , obj[ key ] );
// }

//another use case of the in operator 
if ( 'a' in obj)
{
     console.log( 'property a  is available ')
}

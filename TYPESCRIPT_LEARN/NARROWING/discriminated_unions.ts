interface Circle
{ 
    kind : "circle",
    radius : number
}
interface Square
{
    kind : "square",
    side : number 
}

type  Shape =  Circle | Square;

//this is not working
// interface Temp extends Square , Circle
// {
//     kind : "circle"| "square"
// }

function area ( shape :Shape)
{
    if ( shape.kind == "circle" )
    {
        return Math.PI * shape.radius * shape.radius;
    }
    else if( shape.kind =="square")
    {
        return Math.pow( shape.side ,2 );
    }
}
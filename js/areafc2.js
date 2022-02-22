// area of a rectangle, square, triangle

let type =prompt('Type');
let length =parseInt(prompt('Length'));
let width =parseInt(prompt('Width'));

function area(type,length,width){
    if(type == 'square'){
        return length * length;
    }else if(type == 'rectangular'){
        return length * width;
    }else if( type == 'triangle'){
        return .5 * length * width;
    }
    else{
        return(`Please Select the Correct Type`);
    }
}
console.log(`
Land             = ${length}
Width            = ${width}
Area of a ${type}=${area(type,length,width)}
`);

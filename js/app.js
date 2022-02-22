

// age calculator function

// let n=prompt('Name');
// let A=parseInt(prompt('Years'));

// function agecal(N,A){
//     return `My Name is ${N} I'm ${2021 - A } Years old`;
// }

// console.log(agecal(n , A));



// area of a rectangle, square, triangle

// let type =prompt('Type');
// let length =parseInt(prompt('Length'));
// let width =parseInt(prompt('Width'));

// function area(type,length,width){
//     if(type == 'square'){
//         return length * length;
//     }else if(type == 'rectangular'){
//         return length * width;
//     }else if( type == 'triangle'){
//         return .5 * length * width;
//     }
//     else{
//         return(`Please Select the Correct Type`);
//     }
// }
// console.log(`
// Land             = ${length}
// Width            = ${width}
// Area of a ${type}=${area(type,length,width)}
// `);





// BMI function for health
// let weight= parseInt(prompt('Your Weight'));
// let height=parseInt(prompt('Your Height'));;

// function agecal(weight,height,bmi){
//     return weight/ height*height;
// }
// console.log(agecal(weight));




// area of a rectangle, square, triangle


// let s_name =prompt('Enter Your Name');
// let age =parseInt(prompt('Enter Your Age'));


// function area(s_name,age){
//     if( age >=0 && age <= 6){
//         return `Hi ${s_name} your roll number is ${age}`;
//     }else {
//         return `none`
//     }}
// console.log(area(s_name));

function number(odd) {
    if(odd % 2 == 0){
        var r = `${odd} is Even Number`
    }
   else if(odd % 2 !== 0){
        r = `${odd} is odd Number`
   }
    return r;
}
console.log(number(8));


function dev(){
    console.log(`Hi`);
}
dev()


// function n(i){
//     let i=0;
//     for( i = 0; i <= 10 ; i++){
//         if(i%2==0){
//             i;
//         }
//     }
// }
// console.log(n(i));
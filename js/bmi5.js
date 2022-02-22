
let weight= Number(prompt('Your Weight (kg): '));
let height=Number(prompt('Your Height (cm): '));;

// Arrow function 
 let  agecal= (weight,height) => {
     if( weight == ""  || weight == ""){
         alert(`Please Fill in everything correctly`);
     }
     else{ 
        let bmi = weight / (height/100 * height/100);
        return  bmi; 
     } 
}
console.log('Your BMI = ' + agecal(weight,height).toFixed(2));

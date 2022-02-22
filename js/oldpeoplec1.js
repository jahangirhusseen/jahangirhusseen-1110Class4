let s_name =prompt('Enter Your Name');
let age =parseInt(prompt('Enter Your Age'));



let ageCal = (age) => {
    let agesteps;
    if (age >= 1 && age <5) {
        agesteps = `Hi ${s_name} You are children now`;
    }
    else if (age >= 5 && age <18) {
        agesteps = `Hi ${s_name} You are teenagers now`;
    }
    else if (age >= 18 && age <32) {
        agesteps = ` Hi ${s_name} You are young now`; 
    }
    else if (age >= 32 && age <50) {
        agesteps = `Hi ${s_name} You are Maturity now`;
    }
    else if (age >= 50 && age <150) {
        agesteps = `Hi ${s_name} You are Old now`;
    }
    else{
        alert(`Please Fill in everything correctly`);
    }
    return agesteps;
}
console.log(ageCal(age));
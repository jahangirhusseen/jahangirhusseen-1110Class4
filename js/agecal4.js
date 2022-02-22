let n=prompt('Name');
let A=parseInt(prompt('Years'));

// function Expression 
let agecal = function (N,A){
    return `My Name is ${N} I'm ${2021 - A } Years old`;
}

console.log(agecal(n , A));
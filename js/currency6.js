let currency =prompt('Enter Your Currency Name : USD/CAD/POUND/EURO ');
let amount =Number(prompt('Enter Your Amount : '));

let currencyCon = (currency,amount) => {
    let total;
    if ( currency == 'usd' || currency == 'Usd' || currency == 'USD' ) {
       total = `${amount} USD = ${amount * 84} BDT `;
    }
    else if ( currency == 'cad' || currency == 'Cad' || currency == 'CAD' ) {
        total = `${amount} CAD = ${amount * 66} BDT `;
     }
     else if ( currency == 'pound' || currency == 'Pound' || currency == 'POUND' ) {
        total = `${amount} POUND = ${amount * 90} BDT `;
     }
     else if ( currency == 'euro' || currency == 'Euro' || currency == 'EURO' ) {
        total = `${amount} EURO = ${amount * 115} BDT `;
     }
     else if(amount == ''){
        alert(`Please Fill in amount correctly`);
     }
     else{
        alert(`Please Fill in everything correctly`);
     }
    return total;
}
console.log(currencyCon(currency,amount));

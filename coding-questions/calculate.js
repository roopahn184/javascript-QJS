//Create a JavaScript function that calculates the tip for a given bill amount and 
//tip percentage. Bill amount and tip percentage will be input parameters while output
// will be calculated tip value.

function calculateTip(billAmount, tipPercentage){
    if(typeof billAmount !== 'number' || typeof tipPercentage !== 'number'){
        throw new Error('both billAmount and tipPercentage must be numberws.')
    }
    if(billAmount < 0 || tipPercentage < 0){
        throw new Error('both billAmount and tipPercentage must be positive numbers.')
    }
    const tipAmount = (billAmount * tipPercentage) / 100;
    return tipAmount
}
const billAmount =60;
const tipPercentage= 15
const tip = calculateTip(billAmount, tipPercentage);
console.log('tip amount: $${tip.toFixed(2)}');
const num1 = 11;
const num2 = 4;

function addValues()
{
    console.log(`The sum is: ${num1 + num2}`);
}

// If we use the module.exports it wraps the function in an object, but when you call the function it will run without the module.exports.
addValues(); //This will print the sum of the two numbers
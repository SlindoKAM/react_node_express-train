//In some cases the console.log() method needs some help in printing as it will print objects
//so we can use the JSON.stringify() method to print the object as a string

const data = 
{
    nestedData: 
    {
        moreNestedData: 
        {
            value: 25
        }
    }
};

//so just console.log(data) will print the object
console.log(data); // This will print the object, having the following structure: { nestedData: { moreNestedData: { value: 25 } } }

//so to print the object as a string we use JSON.stringify() method
console.log(JSON.stringify(data)); // This will print the object as a string, having the following structure: {"nestedData":{"moreNestedData":{"value":25}}}

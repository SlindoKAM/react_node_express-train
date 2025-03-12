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


// You can store an type of value in an object, including other objects and/or functions(methods)
// You can store an array in an object
const person =
{
    name: 'Slindo',
    age: 25,
    fav_color: ['Black', 'Gray'],
    address:
    {
        street: '123 Main St',
        number: 50,
        city: 'Durban',
        province: 'KZN'
    },
    full_name: function()
    {
        return `${this.name} Ngcobo`;
    },
    greet()
    {
        console.log('Hello My Friend');
    }
};

console.log(person.full_name()); // This will print the full_name function
person.greet(); // This will print Hello
console.log(person.address.province); // This will print KZN
console.log(person.age); // This will print 25
console.log(person.fav_color[0]); // This will print Black



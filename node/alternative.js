const items = ['item1', 'item2', 'item3']; // Array of items

//We are setting up a property on the exports object and setting it to the items array
module.exports.items = ['item1', 'item2', 'item3']; // Exporting the array of items(another way to export)

//create an object too // creating other data types to test so that we don't just use/export variables
const person =
{
    name: 'bhuri',
};

// We are setting up a property on the exports object and setting it to the person object
module.exports.singlePerson = person; // Exporting the object person
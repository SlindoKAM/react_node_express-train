//CommomJS(library), every file in node is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./names'); // Importing the names module(This allows us to access the names module)[If you are accesing a file that is levels up you use (../names)]
const sayHi = require('./functions'); // Importing the functions module(This allows us to access the functions module)
const data = require('./alternative'); // Importing the alternative module(This allows us to access the alternative module)

//When you import a file, the code in that file runs
//The code in the imported file runs only once, even if you import it multiple times
require('./minds'); // We can require/import a file without assigning it to a variable(This will run the minds module)

console.log(names);// This will print the names module object with the names Ngcobo and Mthatha.
console.log(data);// This will print the alternative module object with items: ['item1', 'item2', 'item3'] and singlePerson: { name: 'Bhuri' }.


// Exporting the function
sayHi ('Slindo');
sayHi (names.Ngcobo); // This using property of the names module object
sayHi (names.Mthatha); // This using property of the names module object

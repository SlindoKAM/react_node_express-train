//CommomJS(library), every file in node is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./names'); // Importing the names module(This allows us to access the names module)[If you are accesing a file that is levels up you use (../names)]
const sayHi = require('./functions'); // Importing the functions module(This allows us to access the functions module)

console.log(names);// This will print the names module object with the names Ngcobo and Mthatha.

// Exporting the function
sayHi ('Slindo');
sayHi (names.Ngcobo); // This using property of the names module object
sayHi (names.Mthatha); // This using property of the names module object
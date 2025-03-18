//To interact with a built-in module, we just need to require it without('./').

//PATH MODULE
//The path module provides utilities for working with file and directory paths.
const path = require('path');

//Return a specific path separator for the current operating system
console.log(path.sep); //This will print {"\"}

//Return a join path which is a string that concatenates all the arguments together
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); //This will print {"\content\subfolder\test.txt"}

//Return a base file name from a file path (This will return the last part of the file path)
const base = path.basename(filePath);
console.log(base); //This will print {"test.txt"}

//Return an absolute path from a file path (This will return the full path of the file)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); //This will print {"C:\Users\Slindo\Desktop\Node.js\content\subfolder\test.txt"}
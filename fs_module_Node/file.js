const fs = require('fs');

// fs.writeFileSync("fs_module_Node/test.txt", "Hello World");   // Create a file and write in it

const readingFile = fs.readFileSync("fs_module_Node/test.txt", "utf-8");

console.log(readingFile);

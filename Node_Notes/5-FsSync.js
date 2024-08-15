const fs = require('fs');


console.log("Starts the file operation")
// it will create new file
const a = fs.writeFileSync('./FilesSystem/file1.txt' , 'This is my first text file , creates with sync mood');
console.log(a);


// it will read our files
const b = fs.readFileSync('./FilesSystem/file2.txt' , 'utf8');


const d = fs.readFileSync('./FilesSystem/file3.txt' , 'utf8');


// create new file
const c = fs.writeFileSync('./FilesSystem/Result.txt' ,
    `Here is the result : ${b} , ${d}`
);
console.log(c);
console.log("Done with this task");
console.log("Next Task Started");
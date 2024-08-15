const fs = require('fs');

console.log("Started first task");
fs.readFile('./FilesSystem/file1.txt' , 'utf8' , (err , data) => {
        if(err) {
            console.log("You have Error in your file path");
        }
        console.log(data);
        console.log("Completeed first task");
})

console.log("Started new Task");
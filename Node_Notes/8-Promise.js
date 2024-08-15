const fs = require('fs');
const { resolve } = require('path');

const getText = (path) => {
    return new Promise((resolve , reject) => {
        fs.readFile('./FilesSystem/file1.txt' , 'utf8' , (err , data) => {
            if(err){
                console.log(err);
            }else {
                console.log(data);
            }
        })
    })
}

getText('./FilesSystem/file1.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))
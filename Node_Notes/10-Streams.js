
const fs = require('fs');

const readableStream = fs.createReadStream('./FilesSystem/file1.txt', {
    encoding : "utf8",
    highWaterMark : 4  // controls the character limit
    // default size of stream 64 kb
})

const writeableStream = fs.createWriteStream('./FilesSystem/new.txt');

readableStream.on("data" , (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});
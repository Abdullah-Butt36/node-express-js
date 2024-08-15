const http = require('http');
const fs = require('fs');

http.createServer(function(req , res) {
    const text = fs.readFileSync("./FilesSystem/bigfile.txt" , 'utf8')
    res.end(text);

    // const readStream = fs.createReadStream("./FilesSystem/bigfile.txt" , 'utf8');

    // readStream.on("data" , () => {
    // readStream.pipe()
    // })

    // readStream.on("err" , () => {
    //     res.end(err)
    // })
})

.listen(5000)
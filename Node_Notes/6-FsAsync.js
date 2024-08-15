const fs = require("fs");

console.log("Starts the file operaton")
fs.readFile("./FilesSystem/file1.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error in the code");
  }
  const first = result;
  fs.readFile("./FilesSystem/file2.txt", "utf8", (err, result) => {
    if (err) {
      console.log("Error in the code");
    }
    const second = result;
    fs.writeFile(
      "./FilesSystem/File4.txt", 
      `Here is the result ${first} , and , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("Moves to new Concept");
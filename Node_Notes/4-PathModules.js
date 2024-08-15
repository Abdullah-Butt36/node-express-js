const path = require('path');

// it returns extension
console.log(path.extname('index.html'));

// Join all the paths
const paths = path.join('c' , 'users' , 'GoldenArrowComputer', 'Desktop');
console.log(paths);

// it will seprates file path
console.log(path.sep);

// it shows the path
const b = path.resolve(__dirname , 'Abdullah')
console.log(b)


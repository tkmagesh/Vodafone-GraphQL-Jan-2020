const fs = require('fs');
const fileName = process.argv[2];
try {
    const fileContents = fs.readFileSync(fileName, { encoding : 'utf8'});
    console.log(fileContents);
} catch (er){
    console.log('Something went wrong..');
    console.log(er);
}
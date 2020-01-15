const fs = require('fs');
const fileName = process.argv[2];

//error first callback pattern
fs.readFile(fileName, { encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log('Something went wrong..');
        console.log(err);
        return;
    }
    console.log(fileContents);
});




const fs = require('fs');
const fileName = process.argv[2];

const stream = fs.createReadStream(fileName, { encoding : 'utf8'});
//events -> open, data, end, close, error

let counter = 0;

/* stream.on('data', (chunk) => {
    console.log(chunk);
    //++counter;
}); */

stream.pipe(process.stdout);

stream.on('data', (chunk) => {
    ++counter;
});

stream.on('end', () => {
    console.log('Thats all folks!');
    console.log(`Read Count = ${counter}`);
});

stream.on('error', (err) => {
    console.log('Something went wrong..');
    console.log(err);
})



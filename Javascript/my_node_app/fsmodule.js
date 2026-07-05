const fs = require('fs');

// fs.readFile('files.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });
// console.log("File reading finished");// in the result firsly came this then the other how to deal it 


const a=fs.readFileSync('files.txt')
console.log(a.toString())
console.log('File reading finished')

// write the file
fs.writeFile('file2.txt',"This is a data",()=>{
    console.log("Written to the file")  
});
console.log('Finished writing  file')
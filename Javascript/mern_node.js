const fs = require("fs").promises;

fs.readFile("data.txt", "utf8")
  .then(data => console.log(data))
  .catch(err => console.log(err));

  const p1 = new Promise(resolve =>
  setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve("Second"), 2000)
);

Promise.race([p1, p2])
  .then(result => console.log(result));



  const fss = require("fs").promises;

async function readData() {
    try {
        const data = await fss.readFile("data.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readData();

//  call back 
fs.writeFile("test.txt", "Hello MY WORLD", (err) => {
    if (err) throw err;
    console.log("File Written");
});


// ASYC/WAIT
const fsss = require("fs").promises;

async function writeData() {
    await fs.writeFile("text.txt", "Hello");
    console.log("Done");
}

writeData();    
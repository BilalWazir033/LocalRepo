const express = require("express");
const app = express();

app.use(express.json());

let subjects = [];

app.post("/addSubject", (req, res) => {

    subjects.push(req.body);

    res.send("Subject Added Successfully");

});

app.get("/getSubjects", (req, res) => {

    res.send(subjects);

});

app.get("/cgpa", (req, res) => {

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects.length; i++) {

        totalPoints += subjects[i].gpa * subjects[i].creditHours;

        totalCredits += subjects[i].creditHours;

    }

    let cgpa = totalPoints / totalCredits;

    res.send({
        CGPA: cgpa
    });

});

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
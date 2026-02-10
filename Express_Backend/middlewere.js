const express = require("express")
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 3000;
app.use((req, res, next) => {
console.log("I am middleware 1");
loggerFiles(req);
next();
});

app.use((req, res, next) => {
console.log("I am middleware 2");
next();
});

const suthMiddlewere=(req, res, next)=>{
    const token= req.header["Authorization"]
}


app.use ((req, res, next)=> {
const log = `Request at ${new Date().toLocaleString()} method: ${req.method}`;
fs.appendFile("log.txt", log + "\n", (err) => {
if(err) {
console.log(err);
}
});
next();
});


// Function to read students from file
function readStudents(callback) {
    fs.readFile("Student.json", "utf-8", (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        const students = JSON.parse(data || "[]");
        callback(null, students);
    });
}

// Function to write students to file
function writeStudents(students, callback) {
    fs.writeFile("./Student.json", JSON.stringify(students, null, 2), callback);
}

const Student = [
    { id: 2, name: "raj", branch: "cse" },
    { id: 4, name: "Kishan", branch: "ec" },
    { id: 3, name: "Kashyap", branch: "dep" },
    { id: 7, name: "Rohit", branch: "cld" },
    { id: 5, name: "tanmay", branch: "ttd" }


];

app.get("/", (req, res) => {
    return res.send("<h1>wellcome to home page</h1>")
})

app.get("/Student",suthMiddlewere, (req, res) => {
    res.json(Student);
})
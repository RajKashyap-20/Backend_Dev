const fs = require("fs").promises;
const express = require("express");
const app = express();
const path = require('path');



app.use(express.urlencoded({extended:true}));

const readStudentsFromFile = async () => {
  const data = await fs.readFile("./students.json", "utf-8");
  console.log(data)
  return JSON.parse(data || "[]");
};

const writeStudentsToFile = async (records) => {
  await fs.writeFile("./students.json", JSON.stringify(records, null, 2));
};

app.get("/", async (req, res) => {
    // Correct way to join paths into a single absolute path string
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});
 

app.post("/Student/register", async (req, res)=>{
    console.log("form data",req.body)
});




const PORT= 5000;
app.listen(PORT, () => {
  console.log("Server is listening on port:5000");
});
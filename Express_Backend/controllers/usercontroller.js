const fs = require("fs").promises;

const getAllStudents = async (req, res) => {
  try {
    const fileData = await fs.readFile("./students.json", "utf-8");
    const students = JSON.parse(fileData || "[]");

    res.status(200).json(students);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Error reading students data" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, age, course } = req.body;

    const fileData = await fs.readFile("./students.json", "utf-8");
    const students = JSON.parse(fileData || "[]");

    const newStudent = {
      id: Date.now(),
      name,
      age,
      course
    };

    students.push(newStudent);

    await fs.writeFile("./students.json", JSON.stringify(students, null, 2));

    res.status(201).json({
      message: "Student created successfully",
      student: newStudent
    });

  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Error creating student" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const fileData = await fs.readFile("./students.json", "utf-8");
    const students = JSON.parse(fileData || "[]");

    const student = students.find(s => s.id === id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);

  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Error fetching student" });
  }
};

// ✅ EXPORT ALL FUNCTIONS (at the end)
module.exports = {
  getAllStudents,
  createUser,
  getStudentById
};
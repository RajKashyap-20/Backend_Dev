const express = require("express");
const router = express.Router();

const { getAllStudents, getStudentById, createUser } = require("../controllers/usercontroller");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createUser);

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// DB Connect
mongoose.connect("mongodb://127.0.0.1:27017/examDB")
.then(() => console.log("DB Connected"));

// Schema
const Student = mongoose.model("Student", {
  name: String,
  age: Number
});


// ✅ INSERT (POST) → Q6, Q10, Q11
app.post("/students", async (req, res) => {
  const data = await Student.create(req.body);
  res.json(data);
});


// ✅ DISPLAY (GET) → Q10
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});


// ✅ UPDATE (PUT) → Q6
app.put("/students/:id", async (req, res) => {
  const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
});


// ✅ DELETE → Q11
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running"));
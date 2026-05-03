const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => console.log("DB Connected"));

// Schema
const Student = mongoose.model("Student", {
  name: String,
  age: Number,
});

// Form page
app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/add">
      Name: <input name="name"><br>
      Age: <input name="age"><br>
      <button type="submit">Add</button>
    </form>
  `);
});

// Insert
app.post("/add", async (req, res) => {
  console.log(req.body); // DEBUG
  await Student.create(req.body);
  res.send("Data Inserted");
});

app.listen(3000, () => console.log("Server running"));
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/patientsreport", () => {
  console.log("db connected");
});

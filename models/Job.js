const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  companyname: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  skills: [{ type: String, required: true }],
  date: { type: Date, default: Date.now },
});

JobSchema.index({ title: "text" });

module.exports = mongoose.model("job", JobSchema);

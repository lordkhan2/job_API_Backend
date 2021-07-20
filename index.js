const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/jobs");
const jobSuggestRoute = require("./routes/jobSuggestions");
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);
app.use("/api/jobs", jobRoute);
app.use("/api/Suggestion", jobSuggestRoute);

app.listen("5000", () => {
  console.log("Backend is running");
});

const Job = require("../models/Job");

//CREATE JOB
const createJob = async (req, res) => {
  if (req.user.id === req.params.userId) {
    const newJob = new Job({
      companyname: req.body.companyname,
      title: req.body.title,
      experience: req.body.experience,
      description: req.body.experience,
      location: req.body.location,
      salary: req.body.salary,
      skills: req.body.skills,
    });
    try {
      const saveJob = await newJob.save();
      res.status(200).json(saveJob);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("login to post a job");
  }
};

//GET ALL JOBS
const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find().sort({ date: -1 });
    res.status(200).json(allJobs);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET JOB
const getJob = async (req, res) => {
  try {
    const job = await Job.find({ $text: { $search: req.params.search } });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createJob, getAllJobs, getJob };

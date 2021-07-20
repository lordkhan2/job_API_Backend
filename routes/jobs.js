const router = require("express").Router();
const verify = require("../middleware/verify");
const { createJob, getJob, getAllJobs } = require("../controller/job");

//CREATE POST
router.post("/:userId", verify, createJob);

//GET ALL POSTS
router.get("/", getAllJobs);

//GET JOB
router.get("/:search", getJob);

module.exports = router;

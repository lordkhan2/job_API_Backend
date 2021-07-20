const { jobSuggestion } = require("../controller/jobSuggestion");

const router = require("express").Router();

//GET SUGGESTIONS
router.get("/", jobSuggestion);

module.exports = router;

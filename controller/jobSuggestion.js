const Job = require("../models/Job");
const User = require("../models/User");

const jobSuggestion = async (req, res) => {
  var dbUser = [];
  const skill = req.body.skill;
  User.find({ skills: { $in: skill } }, { _id: 0, skills: 1 })
    .then((data) => {
      console.log("skills:");
      console.log(data);
      data.map((d, k) => {
        dbUser.push(d._id);
      });

      Job.find({ skills: { $in: dbUser } })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(500).json(err);
        });
    })
    .catch((error) => {
      res.status(401).json("no matching jobs found");
    });
};

module.exports = { jobSuggestion };

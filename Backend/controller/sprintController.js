const Sprint = require("../models/sprintModel");
const SprintTask = async (req, res) => {
  const { email, sprintName } = req.body;
  const sprintFind = await Sprint.findOne({ sprintName });
  try {
    if (!sprintFind) {
      const SprintCreate = await Sprint.create({
        email,
        sprintName,
        users: req._id,
      });
      res.status(201).send(SprintCreate);
    } else {
      res.send("This Sprint task already created");
    }
  } catch (e) {
    return res.status(400).json({ message: "Something wents wrong" });
  }
};

const GetSprintTask = async (req, res) => {
  const details = await Sprint.find({ users: req._id });
  try {
    if (!details) {
      res.status(404).send("task not found");
    } else {
      res.status(200).send(details);
    }
  } catch (e) {
    return res.status(400).json({ message: "Something wents wrong" });
  }
};

module.exports = { SprintTask, GetSprintTask };

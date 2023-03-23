const { Schema, model } = require("mongoose");

const BugSchema = Schema(
  {
   
  },
  {
    timestamps: true,
  }
);

const Bug = model("Bug", BugSchema);
module.exports = Bug;

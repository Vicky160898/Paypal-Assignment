const { Schema, model } = require("mongoose");

const sprintSchema = Schema(
  {
    email: { type: String, required: true },
    SprintName: { type: String, required: true },
    bugName: { type: Schema.Types.ObjectId, ref: "Bug" },
    featuresName: { type: Schema.Types.ObjectId, ref: "Features" },
    storyName: { type: Schema.Types.ObjectId, ref: "Story" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },

  {
    timestamps: true,
  }
);

const Sprint = model("Sprint", sprintSchema);
module.exports = Sprint;

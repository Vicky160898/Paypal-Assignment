const { Schema, model } = require("mongoose");

const sprintSchema = Schema(
  {
    email: { type: String, required: true },
    sprintName: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: "Bug" },
    features: { type: Schema.Types.ObjectId, ref: "Features" },
    story: { type: Schema.Types.ObjectId, ref: "Story" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },

  {
    timestamps: true,
  }
);

const Sprint = model("Sprint", sprintSchema);
module.exports = Sprint;

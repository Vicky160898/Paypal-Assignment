const { Schema, model } = require("mongoose");

const BugSchema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    attachments: { type: String },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Bug = model("Bug", BugSchema);
module.exports = Bug;

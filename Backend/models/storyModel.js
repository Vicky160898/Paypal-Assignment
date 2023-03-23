const { Schema, model } = require("mongoose");

const storySchema = Schema(
  {},
  {
    timestamps: true,
  }
);

const Story = model("Story", storySchema);
module.exports = Story;

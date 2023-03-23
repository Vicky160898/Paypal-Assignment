const { Schema, model } = require("mongoose");

const featuresSchema = Schema(
  {
   
  },
  {
    timestamps: true,
  }
);

const Features = model("Features", featuresSchema);
module.exports = Features;

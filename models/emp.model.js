const timespan = require("jsonwebtoken/lib/timespan");
const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },

    age: {
      type: Number,
      required: true,
      min: 18,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Emp = mongoose.model("Emp", EmpSchema);

module.exports = Emp;

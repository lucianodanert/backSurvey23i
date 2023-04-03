import mongoose, { Schema } from "mongoose";

const surveyCategory = new Schema({
    categoryName: {
      require: true,
      type: String,
      minlength: 5,
      maxlength: 50,
    },
    status: {
      require: true,
      type: Boolean,
      unique: false,
    },
  });

const Category = mongoose.model("survey", surveySchema);

export default Survey;

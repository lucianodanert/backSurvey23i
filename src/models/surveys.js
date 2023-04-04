import mongoose, { Schema } from "mongoose";

const surveySchema = new Schema({
  surveyName: {
    require: true,
    type: String,
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  category: {
    require: true,
    type: String,
    minlength: 5,
    maxlength: 100,
    unique: false,
  },
  active: {
    require: true,
    type: String,
    unique: false,
  },
  surveyItemList: {
    require: true,
    type: Array,
    unique: false,
  }
});

const Survey = mongoose.model("survey", surveySchema);

export default Survey;

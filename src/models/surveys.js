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
  image: {
    require: false,
    type: String,
    minlength: 5,
    maxlength: 100,
    unique: false,
  },
  status: {
    require: true,
    type: Boolean,
    unique: false,
  },
  surveyItemList: {
    require: true,
    type: Array,
    unique: false,
  },
  surveyAnswerList: {
    require: false,
    type: Array,
    unique: false,
  }
});

const Survey = mongoose.model("survey", surveySchema);

export default Survey;

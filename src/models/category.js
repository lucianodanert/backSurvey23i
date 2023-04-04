import mongoose, { Schema } from "mongoose";

const surveyCategory = new Schema({
    categoryName: {
      require: true,
      type: String,
      minlength: 2,
      maxlength: 20,
    },
    categoryStatus: {
      require: true,
      type: Boolean,
      unique: false,
    },
  });

const Category = mongoose.model("category", surveyCategory);

export default Category;

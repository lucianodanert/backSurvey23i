import Category from "../models/category";

const showCategorys = async (req, res) => {
    try {
      const categoryList = await Category.find();
      res.status(200).json(categoryList);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ message: "Error al buscar los productos solicitados" });
    }
  };

const createCategory = async (req, res) => {
    const { categoryName, categoryStatus } = req.body;
    try {
      console.log(req.body);

      const newCategory = new Category({

        categoryName,
        categoryStatus,
      });
  
      //guardar en la BD
      await newCategory.save();
      res.status(201).json({ message: "Category created succesfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error creating category" });
    }
  };
  const deleteOneCategory = async (req, res) => {
    try {
      const caregoryFound = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Category Deleted!");
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Error searching for requested Category" });
    }
  };

  const updateCategory = async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Survey Updated Succesfully" });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Error searching for requested survey" });
    }
  };

  const getOneCategory = async (req, res) => {
    try {
      const categoryFound = await Category.findById(req.params.id);
      res.status(200).json(categoryFound);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Error searching for requested category" });
    }
  };
  export {createCategory, showCategorys, deleteOneCategory, updateCategory, getOneCategory}
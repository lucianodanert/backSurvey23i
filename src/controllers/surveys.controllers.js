import Survey from "../models/surveys";
import User from "../models/user";

const getOne = async (req, res) => {
  try {
    console.log(req);
    const surveyFound = await Survey.findById(req.params.id);
    res.status(200).json(surveyFound);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested survey" });
  }
};

const showSurveys = async (req, res) => {
  try {
    

    const userLogged = await User.findOne({ email: req.email }).exec();
    console.log(userLogged.role);

    if (userLogged.role == "admin") {
      const surveyList = await Survey.find(); 
      res.status(200).json( { userLogged : userLogged.role , surveyList}); 
    } else if (userLogged.role == "user") {
      const surveyList = await Survey.find({ author: req.email }).exec();
      res.status(200).json({ userLogged : userLogged.role , surveyList});
    } 

  } catch (error) {
    console.log(error);  
    res 
      .status(404)
      .json({ message: "Error al buscar los productos solicitados" });
  }
};

const showActiveSurveys = async (req, res) => {
  try {
    
      const surveyList = await Survey.find({ status: true }).exec();
      res.status(200).json(surveyList);
    } 

   catch (error) {
    console.log(error);  
    res 
      .status(404)
      .json({ message: "Error al buscar los productos solicitados" });
  }
};


const createSurvey = async (req, res) => {
  const {
    surveyName,
    category,
    image,
    author,
    status,
    surveyItemList,
    surveyAnswerList,
  } = req.body;

  try {
    console.log(req.body);
    //validar

    const newSurvey = new Survey({
      /* surveyName: req.body.surveyName,
      category: req.body.category, */
      surveyName,
      category,
      image,
      status,
      surveyItemList,
      surveyAnswerList,
      author,
    });

    //guardar en la BD
    await newSurvey.save();
    res.status(201).json({ message: "Survey created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating survey" });
  }
};
const updateSurvey = async (req, res) => {
  try {
    await Survey.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Survey Updated Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested survey" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const surveyFound = await Survey.findByIdAndDelete(req.params.id);
    res.status(200).json("Survey Deleted!");
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error searching for requested survey" });
  }
};
export { showSurveys, createSurvey, getOne, updateSurvey, deleteOne, showActiveSurveys };

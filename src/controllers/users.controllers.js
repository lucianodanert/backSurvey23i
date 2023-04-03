import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";

const login = async (req, res) => {
  
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email });
    if(!user) res.status(404).json({ message: 'User email or password incorrect'})

    const correctPassword = bcrypt.compareSync(password, user.password)
    if(!correctPassword) res.status(404).json ({ message: 'User email or password incorrect'})

    const token = await generateJWT(user._id, user.username)

    res.status(200).json({ 
        message: 'User email and password correct',
        username: user.username,
        uid: user._id,
        token
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

const register = async (req, res) => {
  
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({ message: "The email already exists" });

    let createUser = new User(req.body);

    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    const token = await generateJWT(createUser._id, createUser.username)

    await createUser.save();
    res.status(200).json({
      message: "User successfully created",
      userName: createUser.username,
      uid: createUser._id,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User registration failed" });
  }
};

export { login, register };
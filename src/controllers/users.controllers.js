import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";


const login = async (req, res) => {
  
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email });
    if(!user) res.status(404).json({ message: 'User email or password incorrect'})

    const correctPassword = bcrypt.compareSync(password, user.password)
    if(!correctPassword) res.status(404).json ({ message: 'User email or password incorrect'})

    const token = await generateJWT(user._id, user.name)

    res.status(200).json({ 
        message: 'User email and password correct',
        userName: user.name,
        uid: user._id
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

export { login };
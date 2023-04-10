import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";

const login = async (req, res) => {
  
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email });
    if(!user) res.status(404).json({ message: 'Email o password incorrecto'})

    const correctPassword = bcrypt.compareSync(password, user.password)
    if(!correctPassword) res.status(404).json({ message: 'Email o password incorrecto'})

    const token = await generateJWT(user._id, user.username)

    res.status(200).json({ 
        message: 'Email y password correctos',
        username: user.username,
        uid: user._id,
        token
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Log in falló" });
  }
};

const register = async (req, res) => {
  
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({ message: "Ya existe un usuario con el email ingresado" });

    let createUser = new User(req.body);

    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    const token = await generateJWT(createUser._id, createUser.username)

    await createUser.save();
    res.status(200).json({
      message: "Usuario creado satisfactoriamente",
      username: createUser.username,
      uid: createUser._id,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "El registro del usuario ha fallado" });
  }
};

export { login, register };
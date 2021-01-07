import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../Models/userModel.js'

//Register
const register = async (req, res) => {
  //check if email exist

  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist)
    return res.status(400).json({ message: 'Email already exist' })

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  // create new user and save in database
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  })
  user.save((saveErr) => {
    if (!saveErr) {
      res.status(201).json({ registred: true })
    } else {
      res.status(400).json({ message: saveErr })
    }
  })
}

//Login
const login = async (req, res) => {
  //check if email exist

  const user = await User.findOne({ email: req.body.email })
  if (!user)
    return res.status(401).json({ message: 'Invalid e-mail or password.' })
  //password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword)
    return res.status(401).json({ message: 'Invalid e-mail or password.' })
  //create and assign a token
  const token = jwt.sign({ _id: user._id, name: user.name }, 'test', {
    expiresIn: '7d',
  })
  res.json({ token: token })
}

export { register, login }

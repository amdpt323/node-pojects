
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const getData = async (req, res) => {
  const {id,username} = req.user 

  const randomNumber = () => {
    return Math.floor(Math.random() * 255)
  }
  const red = randomNumber()
  const blue = randomNumber()
  const green = randomNumber()

  res.json({
    msg:`hii ${username} :D`,yourFavColor: `rgb(${red},${blue},${green})`,
  })
}

const postData = async (req, res) => {
  const { username, password } = req.body
  
  

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  const id = new Date().getDate();

  const token = jwt.sign({id,username},process.env.JWT_SECRET)
  

  

  res.status(200).json({ msg: 'user created', token })
}


module.exports = {
  getData,
  postData,
}

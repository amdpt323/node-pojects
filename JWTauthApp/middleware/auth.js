const jwt = require('jsonwebtoken')
const UnauthinicatedError = require('../errors/Unauthunicated')

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthinicatedError('please provide the token')
  }

  const token = authHeader.split(' ')[1]
  try {
    const { id, username } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = {id,username}
    next()
  } catch (error) {
   throw new UnauthinicatedError('you are not authorized to this page')
  }

  
}

module.exports = authMiddleWare

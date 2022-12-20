const CustomAPIError = require('./CustomApiError')
const {StatusCodes} = require('http-status-codes')

class UnauthinicatedError extends CustomAPIError {
 constructor(message){
  super(message)
  this.statusCode = StatusCodes.UNAUTHORIZED
 }
}

module.exports = UnauthinicatedError
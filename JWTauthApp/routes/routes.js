const express = require('express')
const router = express.Router()


const authMiddleWare = require('../middleware/auth')

const {getData,postData} = require('../controllers/controllers')

router.route('/dashboard').get(authMiddleWare,getData)
router.route('/login').post(postData)

module.exports = router
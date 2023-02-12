const express = require('express')
const router = express.Router()

const {getAllPosts,createPost,getPost} = require('../controller/controller')

router.route('/').get(getAllPosts).post(createPost)
router.route('/:id').get(getPost)

module.exports = router
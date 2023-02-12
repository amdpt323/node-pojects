const {Post,db} = require('../config')



const getAllPosts = async(req,res)=>{
 const id = req.userId;
// const id = '69idk69'
 try {
  const snapshot = await Post.get()
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  const data = list.filter((item)=>item.userId===id)
  res.json({posts:data})
 } catch (error) {
  console.log(`error occured ${error}`)
 }
}

const createPost = async (req, res) => {
  const data = req.body;
  const id = req.userId;
  try {
   await Post.add({ ...data,userId:id })
   res.status(201).json({msg:"Post created succesfully"})
  } catch (error) {
   console.log(`error occured ${error}`)
  }
}

const getPost = async (req, res) => {
  // const postId = 'Gl4vWk7CCe7mP3MVc7vx'
  const postId = req.params.id
  try {
    const snapshot = await Post.get()
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    const data = list.filter((item) => item.id === postId)
    // console.log(data)
    res.json({post:data})
  } catch (error) {
    console.log(`error occured ${error}`)
  }
}

module.exports = {getAllPosts,createPost,getPost}
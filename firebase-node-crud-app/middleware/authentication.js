
const {getAuth,onAuthStateChanged} = require('firebase/auth')

const authentication = async (req,res,next) =>{
 const auth = getAuth()
 onAuthStateChanged(auth,(user)=>{
  if(user){
   req.userId = user.uid
   next();
  }else{
   res.json({msg:'UNAUTHORISED'})
  }
 })
}

module.exports = authentication
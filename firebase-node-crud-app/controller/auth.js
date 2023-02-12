const firebase = require('firebase-admin');
const { getAuth,signInWithEmailAndPassword } = require('firebase/auth');

const register = async (req,res)=>{
 const email = req.body.email;
 const password = req.body.password;
 if(!email || !password){
  res.status(400).json({msg:'username or password cant be empty'});
 }
 try {
  await firebase
    .auth()
    .createUser({ email: email, password: password }).then((res)=>console.log(res));
  res.status(201).json({msg:'Account Created succesfully'})
 } catch (error) {
  res.status(400).json({ msg: `error occured with error ${error}` })
 }
}

const login = async(req,res)=>{
 const email = req.body.email
 const password = req.body.password
 const auth = getAuth()

 if (!email|| !password) {
   res.status(400).json({ msg: 'username or password cant be empty' })
 }

 try {
  let token=""
  await signInWithEmailAndPassword(auth,email,password).then((resp)=>token=resp)
  res.json({msg:`user logged in succesfully`})
  
 } catch (error) {
  res.status(404).json({ msg: `error occured with error ${error}` })
 }
}

module.exports = {login,register}
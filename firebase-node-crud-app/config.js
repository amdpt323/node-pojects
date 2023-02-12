const admin = require('firebase-admin')
// const {Firestore} = require('@google-cloud/firestore')
const {initializeApp} = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyCR-pLC7WY_40Zruw5kvIn1cIZR8tLFq-0',
  authDomain: 'fir-node-crud-app.firebaseapp.com',
  projectId: 'fir-node-crud-app',
  storageBucket: 'fir-node-crud-app.appspot.com',
  messagingSenderId: '190549753122',
  appId: '1:190549753122:web:16a97ea50be496678bb97b',
  measurementId: 'G-8PMEJFWNYX',
}
initializeApp(firebaseConfig);

const serviceKey = require('./fir-node-crud-app-firebase-adminsdk-g0qgk-aff5ac633d.json')

admin.initializeApp({
  credential:admin.credential.cert(serviceKey)
})

const db = admin.firestore()
const Post = db.collection('Posts')

module.exports = {Post,db}



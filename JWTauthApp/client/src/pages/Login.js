import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/login', {
        username,
        password,
      })

      localStorage.setItem('token', data.token)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log(error.response.data)
      localStorage.removeItem('token')
    }
  }
  return (
    <>
      <form>
        <label htmlFor='userName'>UserName:</label>
        <br />
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <br />
        <input
          type='text'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit' onClick={handleSubmit}>
          Register/Login
        </button>
      </form>
    </>
  )
}

export default Login

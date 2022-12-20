import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useGlobalContext } from '../context'

const Data = () => {
  const token = localStorage.getItem('token')
  const [data,setData] = useState({msg:'',yourFavColor:{}})
  const [authorised,setAuthorised] = useState(false)
  const {setColor} = useGlobalContext()
  
  const fetchData = async () => {
    try {
      setAuthorised(true)
      setData({})
      setColor('rgb(255,255,255)')
      const { data } = await axios.get(
        'http://localhost:5000/api/v1/dashboard',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setData(data)
      setColor(data.yourFavColor)
      
    } catch (error) {
      setAuthorised(false)
      console.log(error.response.data)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  

  if (!token) {
    return <h1>please login to view data</h1>
  }

  if(!authorised){
    return <h1>your are not authorised to view the data</h1>
  }

  
  
  
  
  
  
  
  return <h1>{data.msg}</h1>
}

export default Data

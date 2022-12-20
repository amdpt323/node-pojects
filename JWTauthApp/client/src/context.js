import React, { useContext,useState } from 'react'

const AppContext=React.createContext()


const AppProvider = ({ children }) => {
  const [color ,setColor ] = useState('rgb(255,255,255)')
  
  
  return (
    <AppContext.Provider value={{color,setColor}}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

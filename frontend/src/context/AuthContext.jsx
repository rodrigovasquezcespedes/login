import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const AuthData = {
    user,
    setUser,
    handleChange
  }

  return (
    <AuthContext.Provider value={AuthData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

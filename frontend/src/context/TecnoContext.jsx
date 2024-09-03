import { createContext } from 'react'

export const TecnoContext = createContext()

const TecnoProvider = ({ children }) => {
  return (
    <TecnoContext.Provider>
      {children}
    </TecnoContext.Provider>
  )
}

export default TecnoProvider

import { createContext, useContext } from 'react'
import useDataDoc from '../hooks/useDataDoc'
import { useAuth } from './AuthContext'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export default function UserContextProvider({ children }) {
  const { user } = useAuth()
  const { data, loading } = useDataDoc(user?.uid ? `users/${user?.uid}` : false)

  return (
    <UserContext.Provider value={{ ...data, loading }}>
      {children}
    </UserContext.Provider>
  )
}

import React, { createContext } from 'react'
import { app } from '../firebase/firebase'


export const AuthContext = createContext()
const auth = getAuth(app)

export default function AuthProvider({children}) {
  return (
    <div>AuthProvider</div>
  )
}

import { useState, createContext } from 'react'
import './App.css'
import RegisterForm from './components/forms/RegisterForm'
import LoginForm from './components/forms/LoginForm'
import {Routes, Route} from "react-router-dom"
import axios from "axios"

const initUser = {
  token: null
}
export const MessageContext = createContext()
function App() {
  const [token, setToken] = useState(null)
  const [messages, setMessages]
  function signInUser(email, password) {
    const user = {email, password}
    axios.post("http://localhost:9000/users/login", user, {
      withCredentials: true,
      baseURL: "http://localhost:9000"
    })
    .then(res => {
      return setToken(res.data)
    })
    .catch(err => console.log(err))
  }



  return (
  <main className='absolute h-full w-full bg-slate-400 m-0 p-0'>
    <MessageContext.Provider value={{
      signInUser,
      token,
    }}>
      {
      token === null 
      ? <Routes>
        <Route element={<LoginForm />} path='/' />
        <Route element={<RegisterForm /> } path='/register' />
      </Routes>
      : 
      <Routes>
        
      </Routes> 
      }
    </MessageContext.Provider>
</main>
  )
}

export default App

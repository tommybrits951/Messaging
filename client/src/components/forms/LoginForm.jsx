import {useState, useContext} from 'react'
import axios from 'axios'
import { MessageContext } from '../../App'

const initForm = {
  email: "",
  password: ""
}


export default function LoginForm() {
  const [formData, setFormData] = useState(initForm)
  const {signInUser} = useContext(MessageContext);




  function change(e) {
    const {name, value} = e.target;
    return setFormData({...formData, [name]: value})
  }


  function submit(e) {
    e.preventDefault()
    const {email, password} = formData;
   signInUser(email, password)
   
  }


  return (
 
      <form className='absolute top-5 left-1/3 w-2/6 text-center bg-stone-500 p-5 rounded-xl' onSubmit={submit}>
      <h2 className='text-yellow-200 text-center text-4xl'>User Login</h2>
      <h3 className='text-xl text-white mt-2'>Email</h3>
      <input className='text-lg p-1 rounded-lg w-full' type='email' name='email' onChange={change} value={formData.email} required />
      <h3 className='text-xl text-white mt-2'>Password</h3>
      <input className='text-lg p-1 rounded-lg w-full' type='password' name='password' onChange={change} value={formData.password} required />
      <br />
      <button className='mt-5 w-full hover:scale-105 py-1 px-2 rounded bg-cyan-500 text-white'>Submit</button>
      </form>
 
  )
}

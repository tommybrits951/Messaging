import { useState } from "react";
import {format} from "date-fns"
import axios from "axios";


const initForm = {
  first_name: "",
  last_name: '',
  postal: "",
  email: "",
  username: "",
  password: "",
  joined: format(new Date(), "MM-dd-yyyy\tHH:mm:ss")
}

export default function RegisterForm() {
  const [formData, setFormData] = useState(initForm)



  function change(e) {
    const {name, value} = e.target;
    return setFormData({...formData, [name]: value})
  }



  function submit(e) {
    e.preventDefault()
    const user = {...formData}    
    axios.post("http://localhost:9000/users", user)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    }) 
  }


  function clear() {
    setFormData(formData)
  }

  return (
    <form onSubmit={submit} className="absolute bg-slate-500 rounded-2xl left-1/4 w-3/6 top-12 text-center grid grid-cols-2 p-5">
      <h2 className="text-yellow-200 text-3xl mb-5 col-start-1 col-end-3 underline">Register New User</h2>
      <h3 className="font-mono text-white text-xl m-2">First Name:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="text" placeholder="John" name="first_name" value={formData.first_name} onChange={change} required />
      <h3 className="font-mono text-white text-xl m-2">Last Name:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="text" name="last_name" placeholder="Doe" value={formData.last_name} onChange={change} required />
      <h3 className="font-mono text-white text-xl m-2">Postal:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="number" name="postal" placeholder="e.g. 55544" value={formData.postal} onChange={change} required />
      <h3 className="font-mono text-white text-xl m-2">Email:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={change} required />
      <h3 className="font-mono text-white text-xl m-2">Username:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="text" name="username" placeholder="example555" value={formData.username} onChange={change} required />
      <h3 className="font-mono text-white text-xl m-2">Password:</h3>
      <input className="text-lg my-2 p-1 rounded-lg" type="password" name="password" value={formData.password} onChange={change} />
      <div className="relative col-start-1 col-end-3 flex justify-around m-5">
        <button onClick={clear} className="text-white rounded-lg py-2 px-3 bg-cyan-500">Clear</button>
        <button type="submit" className="text-white bg-cyan-500 rounded-lg py-2 px-3">Submit</button>
      </div>
    </form>
  )
}



import { useState } from 'react'
import React from 'react'
import {BiUpload} from 'react-icons/bi'


const Edit = () =>{

  const [form, setForm] = useState({
    fullname: "Jajang Surajang",
    email: "jajang007@gmail.com",
    password: "pakjajang",
    idqr : "123",
  })
  
  const handleForm = (e)=>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
  }
  return (
    <div className='bg-cyan-50 w-full h-screen text-cyan-900 pt-12'>

      <div className='w-4/12 flex-col items-center bg-white rounded-lg shadow-lg mx-auto px-8 py-12'>
        <div className='w-24 h-24 mx-auto'>
            <img className='w-full h-full object-cover rounded-full border-cyan-900 border-2' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
        </div>

        {/* Form */}
        <form className='w-11/12 mx-auto rounded-lg px-12 py-10'>
        <div className='flex flex-col'>
          <label htmlFor="fullname" className='font-semibold text-sm text-cyan-900'>Full Name</label>
          <input className='border border-cyan-800 border-opacity-50 font-light focus:border-cyan-800 focus:border-2 rounded-md px-3 my-1 py-1 text-sm' name="fullname" id="fullname" type="text" placeholder='Full Name' value={form.fullname} onChange={handleForm}  required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-semibold text-sm text-cyan-900'>Email</label>
          <input className='border border-cyan-800 border-opacity-50 font-light focus:border-cyan-800 focus:border-2 rounded-md px-3 my-1 py-1 text-sm' name="email" id="email" type="email" placeholder='name@gmail.com' value={form.email} onChange={handleForm} required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password" className='font-semibold text-sm text-cyan-900'>Password</label>
          <input className='border border-cyan-800 border-opacity-50 font-light focus:border-cyan-800 focus:border-2 rounded-md px-3 my-1 py-1 text-sm' name="password" id="password" type="password" placeholder='******' value={form.password} onChange={handleForm} required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="idqr" className='font-semibold text-sm text-cyan-900'>ID QRMeter</label>
          <input className='border border-cyan-800 border-opacity-50 font-light focus:border-cyan-800 focus:border-2 rounded-md px-3 my-1 py-1 text-sm' name="idqr" id="idqr" type="text" placeholder='123' value={form.idqr} onChange={handleForm} required/>
        </div>

        <button type="submit" className='bg-cyan-800 mt-8 text-white w-full py-2 block text-center font-semibold rounded-md cursor-pointer' onClick={handleSubmit}>Perbarui Data</button>
        
      </form>

      </div>
    </div>
  )
}

export default Edit
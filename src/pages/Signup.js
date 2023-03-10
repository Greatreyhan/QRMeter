import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPass : "",
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
    <div className="bg-cyan-50 w-screen h-full pb-20 flex flex-col justify-center items-center">
      <div className='md:w-5/12 w-full'>
        <h1 className='text-center font-bold text-2xl text-cyan-900 pt-10'>Buat Akun</h1>
        <p className='text-center font-semibold text-md text-cyan-900 mt-2'>Buat Akun Anda Untuk Memulai Menikmati Layanan Kami</p>
      </div>

      <form className='mt-11 md:w-3/12 bg-white shadow-xl rounded-lg px-12 py-10'>
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
          <label htmlFor="confirmPass" className='font-semibold text-sm text-cyan-900'>Confirm Password</label>
          <input className='border border-cyan-800 border-opacity-50 font-light focus:border-cyan-800 focus:border-2 rounded-md px-3 my-1 py-1 text-sm' name="confirmPass" id="confirmPass" type="password" placeholder='******' value={form.confirmPass} onChange={handleForm} required/>
        </div>

        <button type="submit" className='bg-cyan-800 mt-8 text-white w-full py-2 block text-center font-semibold rounded-md cursor-pointer' onClick={handleSubmit}>Daftar Sekarang</button>
        
        <div className='mt-10'>
          <p className='font-light text-cyan-900 text-sm text-center'>Sudah memiliki akun?</p>
          <Link to="/login" className='font-bold text-cyan-900 text-sm text-center block mx-auto cursor-pointer'>Masuk Sekarang</Link>
        </div>
      </form>

    </div>
  )
}

export default Signup
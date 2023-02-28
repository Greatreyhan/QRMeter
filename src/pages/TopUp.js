import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function TopUp() {
    const [form, setForm] = useState({
        amount: 0,
    })
    
    const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div className='bg-cyan-50 text-cyan-900 h-screen pt-20'>
        
        <div className='w-5/12 mx-auto bg-white py-8 px-16 rounded-lg shadow-lg'>
            <h1 className='font-bold text-4xl'>Top Up Saldo</h1>
            <p className='mt-3'>Masukkan jumlah saldo yang ingin dimasukkan</p>
            <div className='flex items-center'>
            <label htmlFor="payment" className='font-semibold text-md text-cyan-900 text-6xl'>Rp</label>
            <input className='w-full bg-transparent text-6xl border-b-2 text-cyan-900 border-cyan-900' name="amount" id="amount" type="number" placeholder='1000' value={form.amount} onChange={handleForm} />
            </div>
            <div className='flex justify-between mt-11'>
                {form.amount >= 10000 ? 
                <Link to='/invoice' className='font-semibold text-white rounded-md bg-cyan-800 px-16 py-2 text-xl text-center inline-block mx-auto cursor-pointer'>Lanjutkan</Link>
                :
                <Link className='font-semibold text-white rounded-md bg-gray-800 px-16 py-2 text-xl text-center inline-block mx-auto cursor-not-allowed'>Lanjutkan</Link>
            }
                <Link to='/' className='font-semibold text-cyan-900 rounded-lg px-10 py-2 text-xl text-center inline-block mx-auto cursor-pointer'>Batal</Link>
            </div>
        </div>
        
    </div>
  )
}

export default TopUp
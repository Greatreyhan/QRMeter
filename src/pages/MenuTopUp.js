import React from 'react'
import {FaBitcoin, FaRegMoneyBillAlt,FaWallet} from 'react-icons/fa'

function MenuTopUp() {
  return (
    <div className='bg-cyan-50 w-full h-screen text-cyan-900'>
        <h1 className='font-bold text-4xl text-center pt-24' >Pilih Metode Pembayaran</h1>
        {/* Menu Top Up */}
        <div className='flex flex-col  justify-center items-center mt-16 bg-white w-6/12 mx-auto py-12 rounded-xl shadow-lg'>
            <div className='flex justify-center items-center w-5/12 bg-cyan-800 text-white m-2 py-2 rounded-lg shadow-lg px-6 text-center hover:bg-cyan-900 cursor-pointer'>
                <FaBitcoin className='w-6 h-6' />
                <p className='text-center text-xl ml-3'>Uang Coin</p>
            </div>
            <div className='flex justify-center items-center w-5/12 bg-cyan-800 text-white m-2 py-2 rounded-lg shadow-lg px-6 text-center hover:bg-cyan-900 cursor-pointer'>
                <FaRegMoneyBillAlt className='w-6 h-6' />
                <p className='text-center text-xl ml-3'>Uang Kertas</p>
            </div>
            <div className='flex justify-center items-center w-5/12 bg-cyan-800 text-white m-2 py-2 rounded-lg shadow-lg px-6 text-center hover:bg-cyan-900 cursor-pointer'>
                <FaWallet className='w-6 h-6' />
                <p className='text-center text-xl ml-3'>E-Wallet</p>
            </div>
        </div>
        
    </div>
  )
}

export default MenuTopUp
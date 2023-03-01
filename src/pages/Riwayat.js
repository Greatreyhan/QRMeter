import React from 'react'
import {BsCoin} from 'react-icons/bs'
import {BiWallet} from 'react-icons/bi'
import {FaMoneyBill} from 'react-icons/fa'

function Riwayat() {
  return (
    <div className='bg-cyan-50 w-full h-screen text-cyan-900 pt-12'>

      <div className='w-5/12 bg-white rounded-lg shadow-lg mx-auto px-8 py-12'>
        <h1 className='font-bold text-2xl text-center mb-8' >Riwayat Pembelian Listrik </h1>

        <div className='flex justify-between items-center my-3 border-b-2 py-1'>
          <div className='flex items-center'>
            <BsCoin className='w-11 h-11 p-2 m-3 bg-amber-600 text-white rounded-full' />
            <div className='text-sm'>
              <p className='font-bold'>Jajang Surajang</p>
              <p className='font-normal'>Koin</p>
              <p>30 Dec 2023 | 08:32</p>
            </div>
          </div>
          <div className='text-sm flex flex-col'>
            <p className='bg-green-600 text-center text-white rounded-lg m-2 font-semibold'>Sukses</p>
            <p className='font-bold text-lg'>Rp 30.000</p>
          </div>
        </div>

        <div className='flex justify-between items-center my-3 border-b-2 py-1'>
          <div className='flex items-center'>
            <FaMoneyBill className='w-11 h-11 p-2 m-3 bg-rose-600 text-white rounded-full' />
            <div className='text-sm'>
              <p className='font-bold'>Jajang Surajang</p>
              <p className='font-normal'>Uang Kertas</p>
              <p>30 Dec 2023 | 08:32</p>
            </div>
          </div>
          <div className='text-sm flex flex-col'>
            <p className='bg-green-600 text-center text-white rounded-lg m-2 font-semibold'>Sukses</p>
            <p className='font-bold text-lg'>Rp 30.000</p>
          </div>
        </div>

        <div className='flex justify-between items-center my-3 border-b-2 py-1'>
          <div className='flex items-center'>
            <BiWallet className='w-11 h-11 p-2 m-3 bg-green-600 text-white rounded-full' />
            <div className='text-sm'>
              <p className='font-bold'>Jajang Surajang</p>
              <p className='font-normal'>PT Midtrans</p>
              <p>30 Dec 2023 | 08:32</p>
            </div>
          </div>
          <div className='text-sm flex flex-col'>
            <p className='bg-green-600 text-center text-white rounded-lg m-2 font-semibold'>Sukses</p>
            <p className='font-bold text-lg'>Rp 30.000</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Riwayat
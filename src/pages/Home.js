import React from 'react'
import {VscSignOut} from 'react-icons/vsc'
import {FaMoneyBillWave, FaMoneyCheckAlt, FaHistory} from 'react-icons/fa'
import {ImPower} from 'react-icons/im'
import {FiPower} from 'react-icons/fi'
import {BiCoinStack} from 'react-icons/bi'
import {IoMdPerson} from 'react-icons/io'

function Home() {
  return (
    <div className='bg-cyan-50 h-screen w-full'>
        {/* Profile */}
        <div className='md:w-6/12 w-10/12 mx-auto flex justify-between items-center pt-2'>
            <div className='flex items-center text-cyan-900'>
                <div className='w-11 h-11'>
                    <img className='w-full h-full object-cover rounded-full border-cyan-900 border-2' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
                </div>
                <div className='ml-2'>
                    <h2 className='font-bold text-md'>Jajang Surajang</h2>
                    <p className='font-light text-xs'>ID 56798</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col w-8 h-8 bg-cyan-900 rounded-full'>
                <VscSignOut className='text-white w-5 h-5' />
            </div>
        </div>

        {/* Info */}
        <div className='bg-white text-cyan-900 md:w-6/12 w-10/12 flex justify-around mx-auto mt-10 py-8 rounded-xl shadow-lg '>
            <div className='flex flex-col items-center'>
                <div className='flex items-center mb-3'>
                    <div className='bg-cyan-700 w-4 h-4 rounded-full flex justify-center items-center'>
                        <ImPower className='w-2 h-2 text-white' />
                    </div>
                    <h2 className='text-sm font-bold ml-1'>Sisa Daya</h2>
                </div>
                <p><span className='md:text-4xl text-2xl'>10</span> kWh</p>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex items-center mb-3'>
                    <div className='bg-cyan-700 w-4 h-4 rounded-full flex justify-center items-center'>
                        <FiPower className='w-2 h-2 text-white' />
                    </div>
                    <h2 className='text-sm font-bold ml-1'>Penggunaan</h2>
                </div>
                <p><span className='md:text-4xl text-2xl'>7.64</span> kWh</p>
            </div>
            
            <div className='flex flex-col items-center'>
                <div className='flex items-center mb-3'>
                    <div className='bg-cyan-700 w-4 h-4 rounded-full flex justify-center items-center'>
                        <BiCoinStack className='w-2 h-2 text-white' />
                    </div>
                    <h2 className='text-sm font-bold ml-1'>Sisa Dana</h2>
                </div>
                <p>Rp <span className='md:text-4xl text-2xl'>7.56K</span></p>
            </div>
        </div>

        {/* Menu */}
        <div className='mt-6'>
            <div className='md:w-6/12 w-10/12 mx-auto flex justify-around bg-cyan-800 py-4 rounded-xl shadow-lg'>
                <div className='flex flex-col justify-center items-center'>
                    <FaMoneyBillWave className='text-cyan-900 w-9 h-9 p-2 bg-white rounded-lg shadow-lg' />
                    <h3 className='text-xs text-white font-normal mt-1 text-center'>Top Up</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <FaMoneyCheckAlt className='text-cyan-900 w-9 h-9 p-2 bg-white rounded-lg shadow-lg' />
                    <h3 className='text-xs text-white font-normal mt-1 text-center'>Tagihan</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <FaHistory className='text-cyan-900 w-9 h-9 p-2 bg-white rounded-lg shadow-lg' />
                    <h3 className='text-xs text-white font-normal mt-1 text-center'>Riwayat</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <IoMdPerson className='text-cyan-900 w-9 h-9 p-2 bg-white rounded-lg shadow-lg' />
                    <h3 className='text-xs text-white font-normal mt-1 text-center'>Edit</h3>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Home
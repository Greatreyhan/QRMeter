import React from 'react'

function Laporan() {
  return (
    <div className='bg-cyan-50 w-full h-screen text-cyan-900 pt-12'>
      <div className='w-4/12 bg-white rounded-lg shadow-lg mx-auto px-3 py-12'>
        <h1 className='font-bold text-2xl text-center' >Laporan Penggunaan Listrik Bulan Februari</h1>

        {/* Laporan Listrik Bulanan */}
        <div className='flex justify-center items-center text-cyan-900 mt-8'>
          <div className='w-2/4 px-5'>
            <p className='m-1'>Golongan Lisrik</p>
            <p className='m-1'>Pemakaian kWh</p>
            <p className='m-1'>Tarif/kWh</p>
            <p className='m-1'>Biaya Pemakaian</p>
            <p className='m-1'>PPJ 3%</p>
          </div>

          <div className='w-2/4 px-5'>
            <p className='m-1'>Golongan IV</p>
            <p className='m-1'>200 kWh</p>
            <p className='m-1'>Rp 13.500/kWh</p>
            <p className='m-1'>Rp 2.700.000</p>
            <p className='m-1'>Rp 810.000</p>
          </div>
        </div>
        <hr className='border-dashed border-spacing-5 border-cyan-900 border-opacity-50 w-11/12 m-2 mx-auto' />
        <div className='flex justify-center items-center text-cyan-900'>
          <div className='w-2/4 px-5'>
            <p className='m-1 font-bold'>Total</p>
          </div>

          <div className='w-2/4 px-5'>
            <p className='m-1 font-bold'>Rp 3.510.000</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Laporan
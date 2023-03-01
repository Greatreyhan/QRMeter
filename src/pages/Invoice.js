import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import React from 'react'

function Invoice() {
  
  const [url, setUrl] = useState("");

  return (
    <div className='bg-cyan-50 h-screen text-cyan-900 '>
        
        <div className='flex w-full h-full justify-center items-center flex-col'>
        <h1 className='font-bold text-4xl pt-10 text-center'>Pembayaran dengan Q-RIS</h1>
          <div className='flex justify-center items-center mt-10 w-7/12'>
            <QRCodeCanvas
                className='p-5 bg-white rounded-lg shadow-lg mr-5'
                id="qrCode"
                value="https://convertio.co/download/3bbf2d4372f03e826d7e3b7db1bc8abd2a1304/"
                size={300}
                bgColor={"#ffffff"}
                level={"H"}
                />

              <div className=' bg-white w-full rounded-lg shadow-lg mx-auto px-6 py-12'>
                <h1 className='font-bold text-2xl text-center' >Detail Pembayaran</h1>

                {/* Laporan Listrik Bulanan */}
                <div className='flex justify-center items-center text-cyan-900 mt-8'>
                  <div className='w-2/4 px-5'>
                    <p className='m-1'>Metode Pembayaran</p>
                    <p className='m-1'>Jumlah </p>
                    <p className='m-1'>Tarif/kWh</p>
                    <p className='m-1'>Total kWh</p>
                    <p className='m-1'>Biaya Admin</p>
                  </div>

                  <div className='w-2/4 px-5'>
                    <p className='m-1'>Q-RIS</p>
                    <p className='m-1'>10.000</p>
                    <p className='m-1'>Rp 13.500/kWh</p>
                    <p className='m-1'>0.96 kWh</p>
                    <p className='m-1'>Rp 2.500</p>
                  </div>
                </div>

                <hr className='border-dashed border-spacing-5 border-cyan-900 border-opacity-50 w-11/12 m-2 mx-auto' />
                <div className='flex justify-center items-center text-cyan-900'>
                  <div className='w-2/4 px-5'>
                    <p className='m-1 font-bold'>Total</p>
                  </div>

                  <div className='w-2/4 px-5'>
                    <p className='m-1 font-bold'>Rp 12.500</p>
                  </div>
                </div>
              </div>
        
      </div>  
    </div>
  </div>
  )
}

export default Invoice
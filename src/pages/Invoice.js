import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import React from 'react'

function Invoice() {
  
  const [url, setUrl] = useState("");

  return (
    <div className='bg-cyan-50 h-screen text-cyan-900'>
        
        <div className='flex w-full h-full justify-center items-center flex-col'>
        <h1 className='font-bold text-4xl pt-10 text-center'>Pembayaran dengan QRIS</h1>
            <QRCodeCanvas
                className='mt-10 p-5 bg-white rounded-lg shadow-lg'
                id="qrCode"
                value="https://convertio.co/download/3bbf2d4372f03e826d7e3b7db1bc8abd2a1304/"
                size={300}
                bgColor={"#ffffff"}
                level={"H"}
                />
        </div>
    </div>
  )
}

export default Invoice
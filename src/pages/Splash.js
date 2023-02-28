import React from 'react'
import LOGO from "../logo.svg"

function Splash() {
  return (
    <div className="bg-cyan-100 fixed w-screen h-screen flex items-center justify-center">
        <div className="w-90 mx-auto flex flex-col justify-center items-center">
          <div className="w-72 h-72 ">
            <img className="rounded-full w-full h-full" src={LOGO} />
          </div>
          <h1 className="text-center text-4xl font-bold text-cyan-900">QR Meter</h1>
          <p className="text-center text-xl font-semibold text-cyan-900">One stop solution for your power energy needs</p>
          <a className="cursor-pointer bg-cyan-800 text-cyan-100 shadow-md hover:shadow-2xl hover:bg-cyan-900 hover:text-gray-50 mt-8 rounded-md px-6 py-2 font-semibold">SCAN QR</a>
        </div>
      </div>
  )
}

export default Splash
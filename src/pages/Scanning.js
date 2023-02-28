import { useState } from "react";
import QrScanner from 'qr-scanner';

let stopScan = false
let hasilScan = ''

function Scanning() {
  const [scan, setScan] = useState(false)

  const scanNow = async () => {
    
    await new Promise(r => setTimeout(r, 100))
    const videoElement = document.getElementById('scanBox')
    const scanner = new QrScanner(
      videoElement,
      result => {
        hasilScan = result.data
        stopScan = true
      },
      {
        onDecodeError: error => {
          console.error(error)
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true
      }
    )
    await scanner.start()
    while (stopScan === false){ 
        await new Promise(r => setTimeout(r, 100))
        setScan(true);
    }
    scanner.stop()
    scanner.destroy()
    setScan(false);
  }
  return (
    <div className="flex flex-col justify-center items-center bg-cyan-50 h-full">
        {hasilScan == '' ? 
        <div className="w-11/12 h-9/12 rounded-lg mb-10 ">
            <video id="scanBox" className="w-full h-full rounded-lg">
            </video>
        </div>
        :
        null
        }
        {hasilScan == '' ? 
        (scan ?
            <p className="font-semibold text-cyan-900">Arahkan Kamera ke QR Code</p>
            :
            <a onClick={scanNow} className="bg-cyan-800 text-cyan-50 font-semibold text-xl py-2 px-6 rounded-md cursor-pointer hover:bg-cyan-900 hover:text-gray-100 shadow-lg hover:shadow-none"> Mulai Scan </a>)
        :
        <p>Authentikasi Berhasil</p>
        }
        
    </div>
  )
}

export default Scanning
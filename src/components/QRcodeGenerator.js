import React, { useState } from 'react'
import QRCode from 'react-qr-code';

export default function QRcodeGenerator() {
    const [value,setValue]=useState("")
    return (
    <div>
       <div><span>QR Code Generator</span></div> 
       <br/>
        <div>
     <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />  
        </div>
        <div>
            <br/>
    {value && (
          <QRCode
            title="Family Pay"
            value={value}
            bgColor="white"
            fgColor="black"
            size="200"
          />
        )}
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import QRCode from 'react-qr-code';

export default function QRcodeGenerator(props) { 
    return (
    <div>
        <div>
            <br/>
    {props && (
          <QRCode
            title="Family Pay"
            value={props}
            bgColor="white"
            fgColor="black"
            size="200"
          />
        )}
        </div>
    </div>
  )
}

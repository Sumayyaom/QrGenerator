import React from 'react';
import QRCode from 'qrcode.react';
import './QrDisplay.css'; 

const QrDisplay = ({ Name, Biodata }) => {
  const data = {
    Name,
    Biodata,
  };

  const qrValue = JSON.stringify(data);

  return (
    <div className='container'>
      <h1>Generated QR Code</h1><br/>
      <QRCode value={qrValue} />
    </div>
  );
};

export default QrDisplay;

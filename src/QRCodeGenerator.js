import React, {useState} from 'react';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    const  handleChange = (e) => {
        setText(e.target.value);
    };
  return (
    <div>
        <label>Enter text for Qr code: </label>
        <input tyoe= "text" value={text} onChange={handleChange}/>
        {text && <QRCodeGenerator value={text}/>}  
    </div>
  );
};

export default QRCodeGenerator;

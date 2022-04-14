import React from 'react'
import '../style/rsa.scss'
 function Rsa() {
  return (
    <div>
      {/* <span>{newText}</span>
      <button onClick={() => shift_text_encode()} >click</button> */}
      <header id='head'>
        <div className='container-header'>
          <h1 className='text-header'>RSA</h1>
        </div>
      </header>
      <div className='bodyMainrsa'>
        <div className='body'>
          <div className='top-body'>
            <div className='key-body'>
                <label id='keybody'>Key : </label>
            </div>
            <div className='box-top'>
              <input id='input-key' min='0' max='25' type="number" />
              <i id='clear-btn'>Clear</i>
            </div>
          </div>
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>PlainText : </label>
              </div>
                <textarea id="textBody" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className='btn-encipher'>
            <i id='text-btn'>Encrypt</i>
          </div>
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>CipherText : </label>
              </div>
                <textarea id="textBody" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className='btn-decipher'>
            <i id='text-btn'>Decrypt</i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rsa;
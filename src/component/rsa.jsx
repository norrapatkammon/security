import React, { useState } from 'react';
import axios from 'axios';
import '../style/rsa.scss';

const Rsa = () => {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [d, setD] = useState(0)
  const [n, setN] = useState(0)

  async function rsa_encode() {
    let char_encode = await axios.post("http://127.0.0.1:8000/api/RSA/encode", {"text": text})
    setD(char_encode.data.d)
    setN(char_encode.data.n)
    setNewText(char_encode.data.text)
  }

  async function rsa_decode() {
    let char_encode = await axios.post("http://127.0.0.1:8000/api/RSA/decode", {"text": newText, "d": d, "n": n})
    debugger
    setText(char_encode.data.text);
  }

  function clear() {
    setText("");
    setNewText("");
  }

  return (
    <div>
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
              <i onClick={() => clear()} id='clear-btn'>Clear</i>
            </div>
          </div>
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>PlainText : </label>
              </div>
                <textarea onChange={(e) => setText(e.target.value)} id="textBody" cols="30" rows="10" value={text}></textarea>
            </div>
          </div>
          <div className='btn-encipher'>
            <i onClick={() => rsa_encode()} id='text-btn'>Encrypt</i>
          </div>
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>CipherText : </label>
              </div>
                <textarea onChange={(e) => setNewText(e.target.value)} id="textBody" cols="30" rows="10" value={newText}></textarea>
            </div>
          </div>
          <div className='btn-decipher'>
            <i onClick={() => rsa_decode()} id='text-btn'>Decrypt</i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rsa;
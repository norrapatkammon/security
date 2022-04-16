import React, { useState } from 'react';
import './../style/monoalphabetic.scss';

const Monoalphabetic = () => {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [key, setKey] = useState(5);
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function monoalphabetic_encode() {
    const char_planText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      let index = table.indexOf(char_planText[i]);
      text2.push(table[(index+key) % table.join('').length]);
    }
    setNewText(text2.join('').toUpperCase());
  }

  function monoalphabetic_decode() {
    const char_planText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      let index = table.indexOf(char_planText[i]);
      text2.push(table[(Math.abs(index-shiftIndex)) % table.join('').length]);
    }
    setNewText(text2.join('').toUpperCase());
  }

  return (
    <div>
      {/* <span>{newText}</span>
      <button onClick={() => shift_text_encode()} >click</button> */}
      <header id='head'>
        <div className='container-header'>
          <h1 className='text-header'>Monoalphabetic cipher</h1>
        </div>
      </header>
      <div className='bodyMainmono'>
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
  );

}

export default Monoalphabetic;

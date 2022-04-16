import React, { useState } from 'react';
import '../style/shift_ciper.scss'
const Shift_ciper = () => {

  const [text, setText] = useState("ORYH");
  const [newText, setNewText] = useState("");
  const [key, setKey] = useState(3);
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function shift_text_encode() {
    const char_plainText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(index+key) % table.join('').length]);
      }
    }
    setNewText(text2.join('').toUpperCase());
  }

  function shift_text_decode() {
    const char_plainText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(Math.abs(index-key)) % table.join('').length]);
      }
    }
    setNewText(text2.join('').toLocaleLowerCase());
  }


  return (
    <div>
      {/* <span>{newText}</span>
      <button onClick={() => shift_text_decode()} >click</button> */}
      <header id='head'>
        <div className='container-header'>
          <h1 className='text-header'>Shift cipher</h1>
        </div>
      </header>
      <div className='bodyMainSC'>
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
            <i onClick={() => shift_text_decode()} id='text-btn'>Encrypt</i>
          </div>
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>CipherText : </label>
              </div>
                <textarea id="textBody" cols="30" rows="10">{newText}</textarea>
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

export default Shift_ciper;

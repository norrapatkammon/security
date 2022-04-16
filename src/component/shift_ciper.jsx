import React, { useState } from 'react';
import '../style/shift_ciper.scss'

const Shift_ciper = () => {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [shiftIndex, setShiftIndex] = useState(0);
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function shift_text_encode() {
    const char_plainText = text.toLowerCase().split('');
    let text2 = []
    debugger
    for (let i = 0; i < text.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(index+shiftIndex) % table.join('').length]);
      }
    }
    setNewText(text2.join('').toUpperCase());
  }

  function shift_text_decode() {
    const char_plainText = newText.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < newText.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(Math.abs(index-shiftIndex)) % table.join('').length]);
      }
    }
    setText(text2.join('').toUpperCase());
  }

  function clean() {
    setText("")
    setNewText("")
    setShiftIndex(0)
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
              <input onChange={(e) => setShiftIndex(parseInt(e.target.value))} id='input-key' min='0' max='25' type="number" value={shiftIndex} />
              <i onClick={() => clean()} id='clear-btn'>Clear</i>
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
            <i onClick={() => shift_text_encode()} id='text-btn'>Encrypt</i>
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
            <i onClick={() => shift_text_decode()} id='text-btn'>Decrypt</i>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Shift_ciper;

import React, { useState } from 'react';
import '../style/viginear_cipher.scss';

const Viginear_cipher = () => {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [key, setKey] = useState("");
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function viginear_text_encode() {
    const char_plainText = text.toLowerCase().split('');
    let string_key = '';
    let text2 = []
    let number = 0
    console.log(char_plainText.length);
    console.log(string_key.length);
    while (string_key.length < char_plainText.length) {
      debugger
      if (string_key.length < char_plainText.length) {
        string_key = string_key.toString() + key.toLowerCase().toString();
      } else {
        break
      }
    }
    const char_key = string_key.split('');
    for (let i = 0; i < text.length; i++) {
      debugger
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index_plain = table.indexOf(char_plainText[i]);
        let index_key = table.indexOf(char_key[number]);
        text2.push(table[(index_plain+index_key) % table.join('').length]);
        number += 1;
      }
    }
    setNewText(text2.join('').toUpperCase());
  }

  function viginear_text_decode() {
    const char_plainText = newText.toLowerCase().split('');
    let string_key = '';
    let text2 = []
    let number = 0
    console.log(char_plainText.length);
    console.log(string_key.length);
    while (string_key.length < char_plainText.length) {
      if (string_key.length < char_plainText.length) {
        string_key = string_key.toString() + key.toLowerCase().toString();
      } else {
        break
      }
    }
    const char_key = string_key.split('');
    debugger
    for (let i = 0; i < newText.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      } else {
        let index_plain = table.indexOf(char_plainText[i]);
        let index_key = table.indexOf(char_key[number]);
        text2.push(table[(table.join('').length+(index_plain-index_key)) % table.join('').length]);
        number += 1;
      }
    }
    setText(text2.join('').toUpperCase());
  }

  function clean() {
    setText("")
    setNewText("")
    setKey("")
  }

  return (
    <div>
      <header id='head'>
        <div className='container-header'>
          <h1 className='text-header'>Viginear cipher</h1>
        </div>
      </header>
      <div className='bodyMainvigi'>
        <div className='body'>
          <div className='top-body'>
            <div className='key-body'>
                <label id='keybody'>Key : </label>
            </div>
            <div className='box-top'>
                <input onChange={(e) => setKey(e.target.value)} id='input-keyVi' type="text" value={key} />
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
            <i onClick={() => viginear_text_encode()} id='text-btn'>Encrypt</i>
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
            <i onClick={() => viginear_text_decode()} id='text-btn'>Decrypt</i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Viginear_cipher;
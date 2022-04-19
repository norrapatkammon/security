import React, { useState } from 'react';
import './../style/monoalphabetic.scss';

const Monoalphabetic = () => {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [plainText, setPlainText] = useState("")
  const [key, setKey] = useState(0);
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function monoalphabetic_encode() {
    const char_plainText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      }else{
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(index+key) % table.join('').length]);
      }
    }
    setNewText(text2.join('').toUpperCase());
  }

  function monoalphabetic_decode() {
    const char_plainText = newText.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < newText.length; i++) {
      if(char_plainText[i] === " ") {
        text2.push(" ");
      }else{
        let index = table.indexOf(char_plainText[i]);
        text2.push(table[(table.join('').length+(index-key)) % table.join('').length]);
      }
    }
    setPlainText(text2.join('').toUpperCase());
  }
  
  function clean() {
    setPlainText("")
    setText("")
    setNewText("")
    setKey(0)
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
              <input onChange={(e) => setKey(parseInt(e.target.value))} id='input-key' min='0' max='25' type="number" value={key} />
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
            <i onClick={() => monoalphabetic_encode()} id='text-btn'>Encrypt</i>
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
            <i onClick={() => monoalphabetic_decode()} id='text-btn'>Decrypt</i>
          </div>  
          <div className='bottom-body'>
            <div className='bodyCipher'>
              <div className='text-area'>
                <label id='labelbody'>PlainText : </label>
              </div>
                <textarea id="textBody" cols="30" rows="10" value={plainText}></textarea>
            </div>
          </div>       
        </div>
      </div>
    </div>
  );

}

export default Monoalphabetic;

import React, { useState } from 'react';

const Shift_ciper = () => {

  const [text, setText] = useState("TONPUED");
  const [newText, setNewText] = useState("");
  const [key, setKey] = useState(5);
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function shift_text_encode() {
    const char_planText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      let index = table.indexOf(char_planText[i]);
      text2.push(table[(index+key) % table.join('').length]);
    }
    setNewText(text2.join('').toUpperCase());
  }

  function shift_text_decode() {
    const char_planText = text.toLowerCase().split('');
    let text2 = []
    for (let i = 0; i < text.length; i++) {
      let index = table.indexOf(char_planText[i]);
      text2.push(table[(Math.abs(index-key)) % table.join('').length]);
    }
    setNewText(text2.join('').toUpperCase());
  }


  return (
    <div>
      <span>{newText}</span>
      <button onClick={() => shift_text_encode()} >click</button>
    </div>
  );

}

export default Shift_ciper;

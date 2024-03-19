import './pass.css'
import { useState } from "react";

export default function Pass() {
  const [passwordlen, setpasswordLen] = useState(8);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  var [finalpass, setfinalPass] = useState("");

  const getpassword = () => {
    let finalpass = "";
    var totval = "";
    if (upper) {
      totval += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower) {
      totval += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      totval += "0123456789";
    }
    if (special) {
      totval += "!@#$%^&*-";
    }
    if (upper || lower || numbers || special) {
      if (passwordlen >= 8 && passwordlen <= 16) {
        for (let i = 0; i < passwordlen; i++) {
          let rand = Math.floor(Math.random() * totval.length);
          finalpass += totval[rand];
        }
        setfinalPass(finalpass);
      } else {
        alert("Length must be greater than equal to 8 and less than equal to 16");
      }
    } else {
      alert("Please choose the type");
    }
  };

  function passCopy(e) {
    navigator.clipboard.writeText(finalpass);
    alert("Copied");

  }

  return (
    <>
        <div className='parentcontainer flex justify-center items-center'>
            <div className='mycontainer text-left p-4'>
                <h2 className='text-xl text-green-700 font-bold text-center pb-3 uppercase'>password Generator</h2>
                <input
                type="number"
                placeholder="Enter length of password"
                value={passwordlen}
                onChange={(e) => {
                    setpasswordLen(e.target.value);
                }}
                onFocus={(e) => {
                    e.target.value = "";
                }}
                />

                <div className='checkboxes'>
                <input
                    type="checkbox"
                    id="upper"
                    onChange={(e) => {
                    setUpper(e.target.checked);
                    }}
                />
                <label htmlFor="upper">UpperCase</label>
                </div>
                <div className='checkboxes'>
                <input
                    type="checkbox"
                    id="lower"
                    onChange={(e) => {
                    setLower(e.target.checked);
                    }}
                />
                <label htmlFor="lower">LowerCase</label>
                </div>
                <div className='checkboxes'>
                <input
                    type="checkbox"
                    id="numbers"
                    onChange={(e) => {
                    setNumbers(e.target.checked);
                    }}
                />
                <label htmlFor="numbers">Numbers</label>
                </div>
                <div className='checkboxes'>
                <input
                    type="checkbox"
                    id="special"
                    onChange={(e) => {
                    setSpecial(e.target.checked);
                    }}
                />
                <label htmlFor="special">Special Characters</label>
                </div>
                <button onClick={getpassword} className='bg-green-500 p-2 rounded-2xl text-white my-4 hover:bg-red-700'>Generate</button>
                <div className='copy'>
                    <input type="text" value={finalpass} readOnly className='border-none p-2 rounded-l-2xl outline-0 w-48' />
                    <button onClick={(e)=>passCopy(e)} className='bg-yellow-400 p-2 rounded-r-2xl capitalize'>copy</button>
                </div>
            </div>
        </div>
    </>
  );
}
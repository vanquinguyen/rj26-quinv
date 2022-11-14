import React, { useState } from 'react'

function Bt1() {

    const [inputNumber, setInputNumber] = useState<number | string>();
    const [result, setResult] = useState<number | undefined | string>();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // setInputNumber(parseInt(e.target.value));
        // console.log(typeof parseInt(e.target.value));
        setInputNumber(e.target.value);

    }

    const handleClick = () => {
        let result = bt8(inputNumber);
        inputNumber && setResult(result);
    }

    const bt1 = (_inputNumber : number | undefined) => {
        return _inputNumber ? _inputNumber * 2 : undefined;
    }

    const bt3 = (_inputNumber : number | undefined) => {
        return  _inputNumber ? Math.floor((_inputNumber-1)/2) : undefined; 
    }

    const bt4 = (_inputNumber : number | undefined) => {
        let a : number | undefined;
        let b : number | undefined;

        if(_inputNumber) {
            a = Math.floor(_inputNumber / 10);
            b = _inputNumber % 10;
        }

        // a = _inputNumber ? Math.floor(_inputNumber / 10) : undefined;
        // b = _inputNumber ? _inputNumber % 10 : undefined;
        console.log(a+'\n'+b);
        
        return a+'\n'+b;
    }

    const bt5 = (_inputNumber : number | undefined) => {
        
        if(_inputNumber) {
            if (_inputNumber <= 1) {
                return 'NO';
            }
        
            for (var i = 2; i <= _inputNumber / 2; i++) {
                if (_inputNumber % i === 0) {
                    return 'NO';
                }
            }
            return 'YES';
        }    
        // if(_inputNumber) {
        //     if (_inputNumber <= 1) {
        //         return false;
        //     }
        
        //     for (var i = 2; i <= _inputNumber / 2; i++) {
        //         if (_inputNumber % i === 0) {
        //             return false;
        //         }
        //     }
        //     return true;
        // } 
    }

    const bt7 = (_inputNumber : number | undefined | string) => {
        let str = `${_inputNumber}`;
        let convertToArray = str.toLowerCase().split(' ');
        let newStr = ' ';
        for (const value of convertToArray) {
            newStr += value.replace(value.charAt(0), value.charAt(0).toUpperCase()) + " ";
        }
        return newStr;
    }

    const bt8 = (_inputNumber : number | undefined | string) => {
        var string = `${_inputNumber}`;
        var arr = string.split(' ');
        var newArr = '';
        for (const key of arr) {
            let num = key.length;
            newArr +=num + ' ';
            // console.log(newArr);
            
        }
        return newArr;
    }

  return (
    <>
        <input value={inputNumber} onChange={(e) => handleChange(e)} type="text" />
        <button onClick={handleClick}>Run</button>
        <p>{result}</p>
    </>
  )
}

export default Bt1
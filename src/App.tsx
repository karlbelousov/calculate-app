import { useState } from 'react';
import './App.css';
import Button from "./components/Button";

function App() {
  const [display, setDisplay] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonClick = (value: string) => {
    if (!display.includes('.') || value !== '.') {
      setDisplay(`${(display + value).replace(/^0+/, '')}`);
    }
  };

  const handleOperatorButtonClick = (type: string) => {
    if (display) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  }

  const handleSetStoredValue = () => {
    setStoredNumber(display);
    setDisplay('');
  };

  const clearDisplay = ()  => {
    setDisplay('');
    setFunctionType('');
    setStoredNumber('');
    setResult('');
  }

  const clearCharDisplay = () => {
    setDisplay(prev => prev.slice(0, -1));
  }

  const calculateResult = () => {
    if (display && storedNumber) {
      switch (functionType) {
        case '+':
          setResult(
            `${Math.round((parseFloat(storedNumber) + parseFloat(display)) * 100) / 100}`
          );
          break;
        case '-':
          setResult(
            `${Math.round((parseFloat(storedNumber) - parseFloat(display)) * 1000) / 1000}`
          );
          break;
        case '/':
          setResult(
            `${Math.round((parseFloat(storedNumber) / parseFloat(display)) * 1000) / 1000}`
          );
          break;
        case '*':
          setResult(
            `${Math.round((parseFloat(storedNumber) * parseFloat(display)) * 1000) / 1000}`
          );
          break;
        default:
          break;
      }

      setDisplay('')
      setFunctionType('');
      setStoredNumber('')
    }
  }

  return (
    <div className="calculator">
      <div className='display'>
      <h2>{!display.length && !storedNumber ? result : display || storedNumber}</h2>
      <p>{!storedNumber ? '' : `${storedNumber} ${functionType} ${display}`}</p>
      </div>
      <div className='buttons'>
        <Button className='operator big-button' text='C' onlick={clearDisplay} />
        <Button className='operator' text='DEL' onlick={clearCharDisplay} />
        <Button className='operator' text='/' onlick={() => handleOperatorButtonClick('/')} />
        <Button text='7' onlick={() => handleButtonClick('7')} />
        <Button text='8' onlick={() => handleButtonClick('8')} />
        <Button text='9' onlick={() => handleButtonClick('9')} />
        <Button className='operator' text='*' onlick={() => handleOperatorButtonClick('*')} />
        <Button text='4' onlick={() => handleButtonClick('4')} />
        <Button text='5' onlick={() => handleButtonClick('5')} />
        <Button text='6' onlick={() => handleButtonClick('6')} />
        <Button className='operator' text='-' onlick={() => handleOperatorButtonClick('-')} />
        <Button text='1' onlick={() => handleButtonClick('1')} />
        <Button text='2' onlick={() => handleButtonClick('2')} />
        <Button text='3' onlick={() => handleButtonClick('3')} />
        <Button className='operator' text='+' onlick={() => handleOperatorButtonClick('+')} />
        <Button className='big-button' text='0' onlick={() => handleButtonClick('0')} />
        <Button text='.'  onlick={() => handleButtonClick('.')} />
        <Button className='operator' text='=' onlick={calculateResult} />
      </div>
    </div>
  )
}

export default App

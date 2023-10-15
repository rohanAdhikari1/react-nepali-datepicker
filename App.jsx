import DatePickerContainer from './layout/DatePickerContainer'
import './App.css'
import { useState, useEffect, useRef } from 'react';

function App({ inputprops, className, value, format, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputdate, setInputdate] = useState(value || '');
  const datePickerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div style={{
        position: 'relative', display: 'inline-block'
      }} className={className} ref={datePickerRef}>
        <input type='text' value={inputdate} onFocus={() => setIsOpen(true)} readOnly className='Nepali-date-picker' {...inputprops} />
        {children}
        {isOpen && <div className='picker-container'>
          <DatePickerContainer format={format} inputdate={inputdate} setIsOpen={setIsOpen} setInputdate={setInputdate} />
        </div>}
      </div>
    </>
  )
}

export default App

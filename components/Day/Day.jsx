import React from 'react'
import "./daystyle.css"
import { get2DigitNo } from '../../NepaliDateConverter'

const Day = ({ className, day, engday, setIsOpen, month, year, setInputdate, format }) => {
    const handlesubmit = () => {
        setInputdate(`${year}-${get2DigitNo(month + 1)}-${get2DigitNo(engday)}`);
        setIsOpen(false);
    }
    return (
        <button className={`daybutton ${className}`} onClick={handlesubmit}>{day}</button>
    )
}

export default Day

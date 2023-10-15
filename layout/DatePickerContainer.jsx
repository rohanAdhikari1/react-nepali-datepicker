import React from 'react'
import Day from '../components/Day/Day'
import Header from '../components/header/Header'
import { numberOfBsDays, englishNo2Nep, getDaynumberFromBsDate, getNepaliDate, getBsday, getBsyear, getBsmonth } from '../NepaliDateConverter'

const DatePickerContainer = ({ setInputdate, inputdate, setIsOpen, format }) => {
    const today = getNepaliDate();
    const todayyear = getBsyear(today);
    const todaymonth = getBsmonth(today);
    const todayday = getBsday(today);
    const takendate = inputdate ? inputdate : today;
    const activeday = getBsday(takendate);
    const [year, setyear] = React.useState(getBsyear(takendate));
    const [month, setmonth] = React.useState(getBsmonth(takendate));
    const activedate = `${year}-${month}-${activeday}`;
    var skipday = getDaynumberFromBsDate(`${year}-${month + 1}-1`);
    var totalday = numberOfBsDays(year, month);
    const columns = 7;
    var rows = Math.ceil((totalday + skipday) / columns);
    const table = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 1; j <= columns; j++) {
            const dataIndex = (i * columns + j) - skipday;
            if (i === 0 && j <= skipday) {
                row.push(<td key={dataIndex}></td>);
            } else if (dataIndex <= totalday) {
                if (year == todayyear && month == todaymonth && dataIndex == todayday) {
                    row.push(<td key={dataIndex}><Day format={format} day={englishNo2Nep(dataIndex)} setIsOpen={setIsOpen} engday={dataIndex} setInputdate={setInputdate} year={year} month={month} className='today' /></td>);
                }
                else if (year == getBsyear(takendate) && month == getBsmonth(takendate) && dataIndex == getBsday(takendate)) {
                    console.log('selected day found');
                    row.push(<td key={dataIndex}><Day format={format} day={englishNo2Nep(dataIndex)} setIsOpen={setIsOpen} engday={dataIndex} setInputdate={setInputdate} year={year} month={month} className='dayselected' /></td>);
                }
                else {
                    row.push(<td key={dataIndex}><Day format={format} day={englishNo2Nep(dataIndex)} setIsOpen={setIsOpen} engday={dataIndex} setInputdate={setInputdate} year={year} month={month} className='daynormal' /></td>);
                }
            } else {
                row.push(<td key={dataIndex}></td>);
            }
        }
        table.push(<tr key={i}>{row}</tr>);
    }

    return (
        <>
            <div><Header year={year} month={month} setyear={setyear} setmonth={setmonth} /></div>
            <div className='datepicker-table'>
                <table>
                    <tbody>
                        <tr>
                            <th>आ</th>
                            <th>सो</th>
                            <th>मं</th>
                            <th>बु</th>
                            <th>बि</th>
                            <th>श</th>
                            <th>शं</th>
                        </tr>
                        {table}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DatePickerContainer

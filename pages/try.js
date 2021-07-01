import {useState} from'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const label = () => {
    const [name,setName]=useState('')
    const [selectedDate,setSelectedDate]=useState(null)
    const handleName = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log(selectedDate)
    }
    return ( 
        <div>
            <form onSubmit={handleName}>
            <label>Your name</label>
            <input name='name' onChange={(e)=>setName(e.target.value)}  name='name' type='text'></input>
            <DatePicker 
                selected={selectedDate}
                onChange={date=>setSelectedDate(date)}
                isClearable
                dateFormat='yyyy/MM/dd'
                filterDate={date=>date.getDay() != 1 && date.getDay() != 6}
                showYearDropdown
                scrollableMonthYearDropdown
            ></DatePicker>
            <button>click me</button>
            </form>
       
        </div>
     );
}
 
export default label;

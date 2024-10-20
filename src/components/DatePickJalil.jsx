import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from 'react-multi-date-picker/components/input_icon'
import "./pick.css";
// style={{
//   backgroundColor: "#374151",
//   color: "#fff",
//   width: "100%",
//   padding: "30px 14px",
//   border: "1px solid grey",
//   fontFamily:"Vazirmatn",
//   fontSize:"1rem",
//   boxSizing:"border-box",
//   direction:"rtl",
// }}

function DatePickJalil() {
  return (
    <>
    <div>React Multi Date Picker</div>
    <DatePicker
            render={<InputIcon className='rmdp-input'/>}
            
            // value={birthdate}
            // onChange={setBirthdate} // Use the new Date Picker's onChange
            calendar={persian} // Persian calendar
            locale={persian_fa} // Persian locale
            // inputClass="outlined-input" // Add custom styling here if needed 
          />
    
    </>
  )
}

export default DatePickJalil
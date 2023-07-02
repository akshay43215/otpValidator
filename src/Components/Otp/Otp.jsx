import React, { useRef, useState } from 'react'

export const Otp = () => {
    
    const inputRef = useRef({})
    const [otp, setOtp] = useState({
        digitOne : "",
        digitTwo : "",
        digitThree : "",
        digitFour : "",
        digitFive : "",
        digitSix : ""
    })

    const handleChange = (e,idx)=> {
       const {name,value}= e.target;
        setOtp(prev=> ({
            ...prev,
            [name]:value
        }))
        if (value && idx<5) {
            inputRef.current[idx+1].focus()
        }
        // e.target.nextSibling.focus()
    }
    const handleBack =(e,idx)=> {
        // console.log(e.key);
        if (e.key=='Backspace') {
            if (idx>0) {
                inputRef.current[idx-1].focus()
            }
        }
    }
    const renderInput = ()=> {
        return Object.keys(otp).map((itm,idx)=> {
            // console.log(itm,idx);
            return(
                <input 
                type="text" 
                ref={elmt=>inputRef.current[idx]=elmt}
                maxLength='1'
                name={itm} 
                key={idx} 
                onKeyUp={(e)=>handleBack(e,idx)}
                className='w-16 h-12 rounded-md mr-3 text-center text-xl' onChange={(e)=>handleChange(e,idx)}/>
            )})
    }
    
  return (
        <div className="otp-container">
            {
               renderInput()
            }
            <div className="btn-div">
                <button className='mt-4 w-32 h-10 border border-solid bg-[#18562a] rounded hover:bg-[#14181852] hover:border-[#5b9797]' >Validate</button>
            </div>
            
        </div>
    )
}

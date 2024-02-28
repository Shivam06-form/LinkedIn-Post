import React, { useState } from 'react'

import './Form.css'

const Form = () => {
    // const [isFName, setIsFName] = useState('');// FIRST NAME
    // const [isLName, setIsLName] = useState('');// LAST NAME
    // const [isEmail, setEmail] = useState('');// EMAIL


    ///////////////////////////// OR ///////////////////////////////////


    const [isformData, setformData] = useState({
        isFName: "", isLName: "", isEmail: ""
    })



    return (
        <div className='form-container'>
            <form className='form'>
                <input type="text" name='fName' placeholder='FIRST_NAME'
                    onChange={(e) => {
                        setformData({ ...isformData, isFName: e.target.value })
                    }}
                />
                <input type="text" name='LName' placeholder='LAST_NAME' onChange={(e) => {
                    setformData({ ...isformData, isLName: e.target.value })
                }} />
                <input type="text" name='email' placeholder='EMAIL' onChange={(e) => {
                    setformData({ ...isformData, isEmail: e.target.value })
                }} />
                <button type="submit" >SUBMIT</button>
            </form>
            <div className='input-info'>
                <h5>{isformData.isFName}</h5>
                <h5>{isformData.isLName}</h5>
                <h5>{isformData.isEmail}</h5>
            </div>
        </div>
    )
}

export default Form
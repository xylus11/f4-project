import React, { useRef, useState } from 'react'
import './Entry.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Entry() {
    const inputValue = useRef(null);
    const navigate = useNavigate();
    const [Data, setData] = useState();
    const handleClick = async () => {
        let pincode=inputValue.current.value;
        if (pincode.length !== 6) {
            alert("The Postal Code's length is not equal to 6");
            return;
        }
        try {
            // console.log(inputValue, typeof inputValue);
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
            if (response.status === 200) {
                setData(response.data);
                let obj={
                    code:pincode,
                    info:response.data
                }
                sessionStorage.setItem("Postal",JSON.stringify(obj));
                navigate(`${pincode}`);
                console.log(response.data);
            }
            else {
                throw new Error("Either postal code is invalid or server is down");
            }
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div id='main-container'>
            <div id='input-field'>
                <p id="input-head">Enter Pincode : </p>
                <div>
                    <input ref={inputValue} id='input-box' placeholder='Pincode' type='Number' />
                </div>
                <button id='entry-btn' onClick={handleClick}>Lookup</button>
            </div>
        </div>
    )
}

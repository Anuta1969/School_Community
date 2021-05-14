import React, {useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

function Registration(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const registerHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const phone = e.target.phone.value
        axios.post('/registration',
            {email, password,name,phone})
            .then(data => {
                console.log(data)
                if (data.data.student) {
                    alert(data.data.message)
                    e.target.reset()
                }else {
                    alert(`Hello`)
                    // e.target.reset()
                }})
            .catch((error)=> alert(`status: ${error.response.status} , ${error.response.data.message}`))
    }
        const emailRegHandler = (e) => {
            setEmail(e.target.value)
        }
        const passwordRegHandler = (e) => {
            setPassword(e.target.value)
        }
        return (
            <div className='registration'>
                <form onSubmit={registerHandler} method='POST'>
                    <h3>Registration</h3>
                    <input name='name' type="text" placeholder='enter your name'/>
                    <input name='phone' type="number" placeholder='enter  phone number'/>
                    <input onChange={emailRegHandler} type="text" placeholder='enter email'/>
                    <input onChange={passwordRegHandler} type="password" placeholder='enter password'/>
                    <button>Registration</button>
                </form>
            </div>
        );
    }
    export default Registration;















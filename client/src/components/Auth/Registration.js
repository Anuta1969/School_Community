import React, {useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

function Registration(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const registerHandler = (e) => {
        e.preventDefault()
        const info = new FormData(e.target);
        // const name = e.target.name.value
        // const phone = e.target.phone.value
        fetch('/registration',{
            method:"POST",
            body:info
        })
            .then(data => {
                console.log(data)
                if (data.data.student) {
                    alert(data.data.message)
                    e.target.reset()
                }else {
                    alert(`User with email ${email} already exist`)
                    e.target.reset()
                }})
            .catch((error)=> alert(`status: ${error.response.status} , ${error.response.data.message}`))
    }
        // const emailRegHandler = (e) => {
        //     setEmail(e.target.value)
        // }
        //
        // const passwordRegHandler = (e) => {
        //     setPassword(e.target.value)
        // }

        return (
            <div className='registration'>
                <form onSubmit={(e)=>registerHandler(e)} method='POST'  encType="multipart/form-data"
                >
                    <h3>Registration</h3>
                    <input name='name' type="text" placeholder='enter your name'/>
                    <input name='phone' type="number" placeholder='enter  phone number'/>
                    <input  type="email" name='email' placeholder='enter email'/>
                    <input  type="password" name='password' placeholder='enter password'/>
                    <input type="file" name="photo" placeholder='добавьте фото' />

                    <button type='submit'>Registration</button>
                </form>
            </div>
        );
    }

    export default Registration;

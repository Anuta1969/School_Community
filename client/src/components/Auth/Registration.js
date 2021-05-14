import React, {useState} from 'react';
import axios from "axios";
import  './Registration.css'
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
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.student) {
                    alert(data.message)
                    e.target.reset()
                }else {
                    alert(data.errors.errors[0].msg)
                    e.target.reset()
                }})
            .catch((error)=> alert(`status: ${error.response.status} , ${error.response.data.message}`))
    }


        return (
            <div className='registration'>
                <form onSubmit={(e)=>registerHandler(e)} method='POST'
                      encType="multipart/form-data" className='formRegister'
                >
                    <h3>Регистрация</h3>
                    <input className='inputRegister' name='name' type="text" placeholder='enter your name' required/>
                    <input className='inputRegister' name='phone' type="number" placeholder='enter  phone number' required/>
                    <input className='inputRegister' type="email" name='email' placeholder='enter email' required/>
                    <input className='inputRegister' type="password" name='password' placeholder='enter password' required/>
                    <input className='addPhoto' type="file" name="photo" required />
                    <button className='btnRegister' type='submit'>Регистрация</button>
                </form>
            </div>
        );
    }
    export default Registration;















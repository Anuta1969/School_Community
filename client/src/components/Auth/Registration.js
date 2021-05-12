import React, {useState} from 'react';
import axios from "axios";
import {setUser} from "../../redux/actionCreators/actionCreator";
import {useDispatch} from "react-redux";

function Registration(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const registerHandler = (e) => {
        e.preventDefault()
        axios.post('/registration',
            {email, password})
            .then(data => {
                console.log(data)
                if (data.data.user) {
                    dispatch(setUser(data.data))
                    localStorage.setItem('token', data.data.token)
                    alert(data.data.message)
                }else {
                    alert(`User with email ${email} already exist`)
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
                    <input onChange={emailRegHandler} type="text" placeholder='enter email'/>
                    <input onChange={passwordRegHandler} type="password" placeholder='enter password'/>
                    <button>Registration</button>
                </form>
            </div>
        );
    }

    export default Registration;

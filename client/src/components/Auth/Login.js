import React,{useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/actionCreators/actionCreatorAuth";

function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] =  useState("")
    const dispatch = useDispatch()

    const loginHandler = (e)=>{
        e.preventDefault()
           axios.post('/login',
               {email, password})
               // .then(data => console.log(data.data))
               .then(data=> dispatch(setUser(data.data)))
               .then((data)=>localStorage.setItem('token', data.payload.token))
               .then(data =>console.log(data))
               .catch((error)=> alert(`status: ${error.response.status} , ${error.response.data.message}`))
    }

    const emailRegHandler = (e)=>{
        setEmail(e.target.value)
    }

    const passwordRegHandler =(e)=>{
        setPassword(e.target.value)
    }

    return (
        <div className='login'>
            <form onSubmit={loginHandler} method='POST'>
                <h3>Вход</h3>
                <input onChange={emailRegHandler} type="text" placeholder='enter email' />
                <input  onChange={passwordRegHandler} type="password" placeholder='enter password'/>
                <button >Login</button>
            </form>
        </div>
    );
}

export default Login;

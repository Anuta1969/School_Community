import React from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/actionCreators/actionCreatorAuth";
import {thunkLogin} from "../../redux/Thunk/ThunkAuth";

function Login(props) {

    const dispatch = useDispatch()

    const loginHandler = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // axios.post('/login',
        //        {email, password})
        //        // .then(data => console.log(data.data))
        //        .then(data=> dispatch(setUser(data.data)))
        //        .then((data)=>localStorage.setItem('token', data.payload.token))
        //        // .then(data =>console.log(data))
        //        .catch((error)=> alert(`status: ${error.response.status} , ${error.response.data.message}`))

        dispatch(thunkLogin(email, password))
    }

    return (
        <div className='login'>
            <form onSubmit={loginHandler} method='POST'>
                <h3>Вход</h3>
                <input name='email' type="text" placeholder='enter email' />
                <input name='password'  type="password" placeholder='enter password'/>
                <button >Login</button>
            </form>
        </div>
    );
}

export default Login;

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {thunkLogin} from "../../redux/Thunk/ThunkAuth";

function Login(props) {
    const dispatch = useDispatch()

    const loginHandler = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(thunkLogin(email, password))
    }

    return (
        <div className='login'>
            <form className="login-form" onSubmit={loginHandler} method='POST'>
                <h3>Вход</h3>
                <input name='email' type="text" placeholder='enter email' />
                <input name='password'  type="password" placeholder='enter password'/>
                <button >Login</button>
            </form>
        </div>
    );
}

export default Login;

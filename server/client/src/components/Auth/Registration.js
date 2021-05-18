import React, {useState} from 'react';
import './Registration.css'
import {useDispatch} from "react-redux";
import {thunkRegister} from "../../redux/Thunk/ThunkAuth";
import { Transition } from '@headlessui/react'
function Registration(props) {
    const dispatch = useDispatch()
    const registerHandler = (e) => {
        e.preventDefault()
        const info = new FormData(e.target);
        dispatch(thunkRegister(info, e))
    }
    return (
        <>
            <div className='registration'>
                    <div className="registr__form">
                        <form onSubmit={(e) => registerHandler(e)} method='POST'
                              encType="multipart/form-data" className='formRegister'
                        >
                            <h3>Регистрация</h3>
                            <input className='inputRegister' name='name' type="text" placeholder='Введите имя' required/>
                            <input className='inputRegister' name='phone' type="tel"  required
                                   pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                                   placeholder="+7(___)___-__-__"/>
                            <input className='inputRegister' type="email" name='email' placeholder='Введите почту' required/>
                            <input className='inputRegister' type="password" name='password' placeholder='Введите пароль' required/>
                            <input className='addPhoto' type="file" name="photo" required/>
                            <button className='btnRegister' type='submit'>Регистрация</button>
                        </form>
                    </div>
                </div>

        </>
    );
}
export default Registration;

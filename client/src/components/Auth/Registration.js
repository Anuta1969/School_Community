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

                            <select  name="year"  className="regYear" >
                                {/*<option value='' ></option>*/}
                                <option value="" disabled selected>Выберите год</option>
                                <option  value="2019">2019</option>
                                <option  value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>

                            <select name="group" className="regGroup">
                                <option value='' disabled selected>Выберите группу</option>
                                <option value="Ежи">Ежи</option>
                                <option value="Пчелы">Пчелы</option>
                                <option value="Бобры">Бобры</option>
                                <option value="Медведи">Медведи</option>
                                <option value="Барсы">Барсы</option>
                                <option value="Песцы">Песцы</option>
                                <option value="Тигры">Тигры</option>
                                <option value="Киты">Киты</option>
                                <option value="Сойки">Сойки</option>
                                <option value="Рыси">Рыси</option>
                                <option value="Еноты">Еноты</option>
                                <option value="Волки">Волки</option>
                                <option value="Лисы">Лисы</option>
                                <option value="Орлы">Орлы</option>
                                <option value="Совы">Совы</option>
                            </select>

                            <select name="city" className="regCity">
                                <option value='' disabled selected>Выберите город</option>
                                <option value="Москва">Москва</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                            </select>


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

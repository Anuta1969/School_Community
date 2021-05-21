import React, {useEffect, useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {addVacantion, ThunkInitVacantion} from '../../redux/Thunk/VacantionThunk';
import VacantionCard from './VacantionCard'
import './Vacantion.css'

function Vacantions(props) {
    const sortInput = useRef()
        const history = useHistory();
    const student = useSelector(state => state.student)
    const id = student._id
    const organization = useRef();
    const description = useRef();
    const salary = useRef()
    const vacantion = useSelector(state => state.vacantion)
    const dispatch = useDispatch();
    const [newState, setNewState] = useState(null)
    const [button , setButton] = useState(false)
    useEffect(() => {
        dispatch(ThunkInitVacantion())
    }, [dispatch])

    useEffect(() => {
        setNewState(() => vacantion)
    }, [vacantion])

    const formHandler = (event) => {
        event.preventDefault();
        const vacantionValue = event.target.vacantion.value
        console.log(vacantionValue,'>>>>>>')
        dispatch(addVacantion(organization.current.value, vacantionValue,
            description.current.value,salary.current.value, id))
        setButton(!button)
        event.target.reset()

    };

    const sortHandler = (e) => {
        e.preventDefault()
        if (sortInput.current.value === 'увеличению зарплаты') {
            setNewState(()=>[...vacantion].sort((a, b) => (a.salary - b.salary)))
        } else if (sortInput.current.value === 'уменьшению зарплаты') {
            setNewState(()=>[...vacantion].sort((a, b) => (b.salary - a.salary)))
        } else if (sortInput.current.value == 'новизне'){
            setNewState(()=>[...vacantion].sort((a, b) => (a.date - b.date)).reverse())
        }else if (sortInput.current.value == 'умолчанию'){
            setNewState(()=>[...vacantion].sort((a, b) => (a.date - b.date)))
        }
    }

    return (

        <div className=' vacantion_container container m-auto justify-content-center d-flex flex-column'>

           <div className='formAddVac'>
           {!button &&<button onClick={()=>setButton(!button)} className='btnAddVac vacantion_container'>Добавить Вакансию</button>}
            {button && <div className="vacantion container d-flex flex-column text-center">
                <div className='formSlideVac'>
                <form method="POST" onSubmit={formHandler} className='text-center'>
                    <input
                        // ref={vacantion}
                        name="vacantion"
                        className="form-control text-center"
                        type="text"
                        placeholder="введите вакансию"
                        />
                    <input ref={organization}
                           className="form-control text-center"
                           name="organization"
                           type="text"
                           placeholder="введите организацию"
                           />
                    <input ref={salary}
                           className="form-control text-center"
                           name="salary"
                           type="text"
                           placeholder="введите зарплату"
                           />
                    <textarea
                        ref={description}
                        name="description"
                        className=" textareaVac form-control text-center p-2 m-auto"
                        type="text"
                        placeholder="введите описание"
                        rows="5" cols="15"/>
                    <button className='addBtnVac'>Добавить</button>
                </form>
                </div>
            </div>}

            <div className='sort'>
                Сортировать по:
                <select onChange={sortHandler} ref={sortInput} className='selectSort'>
                    <option>умолчанию</option>
                    <option>увеличению зарплаты</option>
                    <option>уменьшению зарплаты</option>
                    <option>новизне</option>

                </select>
            </div>

            <div className='vacantion container d-flex flex-wrap  m-auto text-center justify-content-between'>
                {newState?.map(vac => <VacantionCard vacantion={vac} key={vac?vac._id:performance.now()}/>)}
            </div>
        </div>
        </div>
    );
}

export default Vacantions;

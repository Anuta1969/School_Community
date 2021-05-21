import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkOrgAdd} from '../../redux/Thunk/ThunkOrganization';
import {Icon} from '@iconify/react';
import iosStar from '@iconify-icons/ion/ios-star';
import './OrganizationAddForm.css'

const rating = ['', '', '', '', '']

function OrganizationAddForm() {

    const student = useSelector(state => state.student._id)
    const dispatch = useDispatch();
    const [addOrgFlag, setaddOrgFlag] = useState(false)
    const [rate, setRate] = useState(0)

    const formHandler = (event) => {
        event.preventDefault();
        dispatch(thunkOrgAdd(
          event.target.organization.value,
          event.target.comment.value,
          rate,
          student,
          event
        ))
        event.target.reset()
        setaddOrgFlag(!addOrgFlag)
    }

    return (
        <div className="organization-box">
            {!addOrgFlag && <button className='addOrgBtn' onClick={() => setaddOrgFlag(!addOrgFlag)}>Добавить организацию</button>}
            {addOrgFlag ?
                <div className="organization container d-flex flex-column">
                    <div className='orgForm'>
                        <form method="POST" onSubmit={formHandler}>

                            <input
                                name="organization"
                                className="form-control inputAddOrg m-3"
                                type="text"
                                placeholder="название организации"
                                required={true}
                            />

                            <p className='ratingOrg'> Оцените организацию {rating.map((el, i) => {
                                return <Icon
                                    name={i}
                                    key={i}
                                    style={{color: (i + 1) <= rate ? "red" : "initial"}}
                                    icon={iosStar} onClick={() => {
                                    setRate(i + 1)
                                }}/>
                            })}
                            </p>

                            <div className="form-floating">
                                <textarea className="form-control textariaOrg m-3" name="comment"></textarea>
                                <label className="ms-2" htmlFor="floatingTextarea2">Ваше мнение об организации</label>
                            </div>

                            <button className='btnAddOrg' type="submit">Добавить</button>
                        </form>
                    </div>
                  </div>
                : null}
        </div>
    );
}

export default OrganizationAddForm;

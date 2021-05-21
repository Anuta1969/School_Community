import React from 'react';
import {useHistory} from "react-router-dom";
import './RequestStudent.css'

function RequestStudent({student}) {

    const history = useHistory()

    const openHandler = () => {
        const id = student._id
        history.push(`/admin/student/${id}`)
    }

    return (
        <>
            <div onClick={openHandler} className="cardInfoList">
              <div className='reqCardImg'>
                  <img id='reqCardImg' src={`${process.env.REACT_APP_URL}/img/${student?.photo}`}/>
              </div>
               <div className='reqCardInfo'>
                   <h5 className="studParIn">{student?.email}</h5>
                   <h5 className="studParIn">{student?.name}</h5>
                <h5 className="studParIn">{student?.phone}</h5>
            </div>
            </div>

        </>
    );
}

export default RequestStudent;

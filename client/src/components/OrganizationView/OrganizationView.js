import React, { useEffect } from 'react';
import Icon from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunkOrgInit } from '../../redux/Thunk/ThunkOrganization';
import iosStar from '@iconify-icons/ion/ios-star';

function OrganizationView(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const organization = useSelector(state => state.organization).filter(el => el._id === id)[0]

  useEffect(() => {
    dispatch( thunkOrgInit(id) )
  }, [dispatch])

  const rating = ['']
  for (let i = 0; i < organization?.rate; i++) {
     rating.push('') 
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{organization?.name}</h4>
          <p className="card-text">Текущий рейтинг:&nbsp;
            { rating.map((el, i) => {
              return < Icon name={i} key={i}  icon={iosStar} style={{color: "red"}}/> } ) }
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Последний комментарий:&nbsp;{organization?.comment}</li>
          <li className="list-group-item">Активные вакансии:&nbsp;{organization?.vacansion}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Архив вакансий</a>
          <a href="#" className="card-link">Все отзывы</a>
        </div>
      </div>
    </>
  );
}

export default OrganizationView;

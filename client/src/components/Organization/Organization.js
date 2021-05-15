import React from 'react';
import { Link } from 'react-router-dom';
import './Org.css'
import Icon from '@iconify/react';
import iosStar from '@iconify-icons/ion/ios-star';

function Organization({ org }) {

  const rating = ['']
  for (let i = 0; i < org?.rate; i++) {
     rating.push('') 
  }

  return (
    <div className="card me-5 mb-4 orgCard">
        <div className="card ">
          <div className="card-body">
           <Link  to={`/organizations/org/${org?._id}` }>
            <div className="card-header">
              <h5 className="card-title">{org?.name}</h5>
              <p>
                { rating.map((el, i) => {
                   return < Icon name={i} key={i}  icon={iosStar} style={{color: "red"}}/> } ) } 
              </p>
            </div>
         </Link>
            <p className="card-text">
              Последний комментарий: {org?.comment}
              </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Текущая вакансия: {org?.vacansion}
              </small>
          </div>
        </div>
      </div>
  )
}

export default Organization;

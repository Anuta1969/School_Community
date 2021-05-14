import React from 'react';
import { Link } from 'react-router-dom';


function Organization({ org }) {
  return (
    <div className="card h-100">
        <div className="card h-100">
          <div className="card-body">
           <Link  to={`/organizations/org/${org._id}` }>
            <div className="card-header">
              <h5 className="card-title">{org.name}</h5>
              <p>Рейтинг: {org.rate}</p>
            </div>
         </Link>
            <p className="card-text">
              Последний комментарий: {org.comment}
              </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Текущая вакансия: {org.vacansion}
              </small>
          </div>
        </div>
      </div>
  )
}

export default Organization;

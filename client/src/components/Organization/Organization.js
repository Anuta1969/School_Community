import React from 'react';
import { Link } from 'react-router-dom';


function Organization({ org }) {
  return (
    <div className="card h-100">
        <div className="card h-100">
          <div className="card-body">
           <Link to={`/organizations/org:${org._id}`}>
            <div className="card-header">
              <h5 className="card-title">{org.name}</h5>
              <p>Рейтинг: {org.rate}</p>
            </div>
         </Link>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              {org.comment[0]}
              </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Текущая вакансия: "Middle Frontend developer"
              {/* {org.vacantion[0]} */}
              </small>
          </div>
        </div>
      </div>
  )
}

export default Organization;

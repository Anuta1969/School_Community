import React from 'react';
import { Link } from 'react-router-dom';


function Organization({ org }) {
  return (
    <Link to={`/organization:${org._id}`}>
      <div className="card h-100">
        <div className="card h-100">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">{org.name}</h5>
              <p>Рейтинг: {org.rate}</p>
            </div>
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
    </Link>
  )
}

export default Organization;

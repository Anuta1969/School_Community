import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function OrganizationView(props) {
    const {id} = useParams()

  const [oneOrgazition,setoneOrgazition] = useState('') 

  useEffect(() => {
   fetch(`/organizations/org/${id}`)
   .then(res=>res.json())
   .then(data=>setoneOrgazition(data))
  }, [setoneOrgazition])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{oneOrgazition[0]?.name}</h4>
          <p className="card-text">Текущий рейтинг:&nbsp;{oneOrgazition[0]?.rate}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Последний комментарий:&nbsp;{oneOrgazition[0]?.comment}</li>
          <li className="list-group-item">Активные вакансии:&nbsp;{oneOrgazition[0]?.vacansion}</li>
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

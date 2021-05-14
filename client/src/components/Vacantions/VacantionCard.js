import React from 'react';

function VacantionCard({vacantion}) {
  return (
    <div >
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{vacantion.vacantion}</h5>
    <p className="card-text">{vacantion.organization}</p>
    <p className="card-text">{vacantion.date}</p>
    <p className="card-text">{vacantion.description}</p>
   
  </div>
</div>
    </div>
  );
}

export default VacantionCard;

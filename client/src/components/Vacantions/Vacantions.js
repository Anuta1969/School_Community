import React from 'react';
import { Link } from 'react-router-dom';

function Vacantions(props) {
  
  return (
    <div className="vacantion container d-flex flex-column flex-wrap">
     
      <Link to='/vacantionsForm' className="nav-link"> <button>Add Form</button> </Link>
    </div>
  );
}

export default Vacantions;

import React from 'react';
import Organization from './Organization';

function OrganizationList({ organizations }) {
  return (
    <div className="container">
      <div className="card">
        <ul name="emploerList" className="list-group list-group-flush">
        {/* { organizations.map(organization =>  */}
        <Organization />
        {/* ) } */}
        </ul>
      </div>
    </div>
  );
}

export default OrganizationList;

import React from 'react';
import Organization from './Organization';

function OrganizationList({organization}) {
  return (
    <div className="card">
      <ul name="emploerList" className="list-group list-group-flush">
        organization.map(org => <Organization key={organization.id}/>)
      </ul>
    </div>
  );
}

export default OrganizationList;

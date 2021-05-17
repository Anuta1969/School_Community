import { addCommentAC, addOrganizationAC, initOneOrganizationsAC, initOrganizationsAC } from "../actionCreators/actionCreatorOrganization";

export const thunkOrgListInit = () => {
  return (dispatch) => {
      fetch(`${process.env.REACT_APP_URL}/organizations`)
        .then(response => response.json() )
        .then(body => {dispatch( initOrganizationsAC(body) )})
         .catch((error) => {console.log(error)});
  };
};

export const thunkOrgInit = (id) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/organizations/org/${id}`)
    .then(res => res.json())
    .then(data => dispatch(initOneOrganizationsAC([data] )))
    .catch(err => console.log(err))
  }
};


  export const thunkOrgAdd = (organization, comment, rate ) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_URL}/organizations/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          organization: organization,
          comment: comment,
          rate: rate
        }),
      })
        .then((res) => res.json())
        .then((data) => dispatch(addOrganizationAC(data.newOrganization)))
        .catch(err => console.log(err))
    }
  }

    export const thunkAddComment = (organization, comment, newRate ) => {
      return (dispatch) => {
          fetch(`${process.env.REACT_APP_URL}/organizations/update`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({
            organization: organization,
            comment: comment,
            newRate: newRate
          }),
        })
          .then((res) => res.json())
          .then((data) => dispatch(addCommentAC(data.updatedOrganization)))
          .catch(err => console.log(err))
      }
    }

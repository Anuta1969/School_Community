import { addCommentAC, addOrganizationAC, addOrgVacantionAC, initOneOrganizationsAC, initOrganizationsAC } from "../actionCreators/actionCreatorOrganization";

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
      .then(data => dispatch(initOneOrganizationsAC(data)))
      .catch(err => console.log(err))
    }
  };


  export const thunkOrgAdd = (organization, comment, rate, student, event ) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_URL}/organizations/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({
            organization: organization,
            comment: comment,
            rate: rate,
            student: student
            }),
          })
        .then((res) => res.json())
        .then((data) =>  {
          if (data.message) {
            alert(data.message)
            event.target.reset()
          } 
          if (data.newOrganization) {
           dispatch(addOrganizationAC(data.newOrganization))
         }})
        .catch(err => console.log(err))
    }
  }

    export const thunkAddComment = (organization, comment, newRate, student ) => {
      return (dispatch) => {
          fetch(`${process.env.REACT_APP_URL}/organizations/update`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({
            organization: organization,
            newComment: comment,
            newRate: newRate,
            student: student
          }),
        })
          .then((res) => res.json())
          .then((data) => dispatch(addCommentAC(data)))
          .catch(err => console.log(err))
      }
    }

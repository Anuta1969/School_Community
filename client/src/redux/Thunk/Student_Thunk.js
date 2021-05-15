import { addPhotoAC,apdateUserProfileAC,addRezumeUserAC } from "../actionCreators/actionCreatorUser";

export const addResumeUser = (idUser, dats)=>{
  return (dispatch)=>{
    fetch(`/student/addrezume/${idUser}`, {
      method: "POST",
      
      body: dats
      
    })
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>dispatch(addRezumeUserAC(data.UserOne)))
  }
}


export const addPhotoUser = (idUser, dats) => {
  return (dispatch) => {
    fetch(`/student/addphoto/${idUser}`, {
      method: "POST",

      body: dats,
    })
      .then((res) => res.json())
      // .then(data=>console.log(data))
      .then((data) => dispatch(addPhotoAC(data.UserOne.photo)));
  };
};


export const apdateUserProfile = (id,name,phone,email,year,group,city,stack,language,socialLinkedin,socialGitHab,placeWork) => {
  return (dispatch) => {
    fetch(`/student/changetext`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        id,
        name,
        phone,
        email,
        year,
        group,
        city,
        stack,
        language,
        socialLinkedin,
        socialGitHab,
        placeWork,
      }),
    })
      .then((res) => res.json())
      // .then(data=>console.log(data))
      .then((data) => dispatch(apdateUserProfileAC(data.UserOne)));
  };
};

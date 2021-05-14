import axios from "axios";

import { addPhotoAC,apdateUserProfileAC,addResumeUserAC } from "../actionCreators/actionCreatorUser";

import { setUser } from "../actionCreators/actionCreatorAuth";

export const axiosAuth = () => {
  return (dispatch) => {
    try {
      axios
        .get("/auth", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((data) => dispatch(setUser(data.data)))
        .then((data) => localStorage.setItem("token", data.payload.token));
    } catch (e) {
      localStorage.removeItem("token");
    }
  };
};

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


export const addResumeUser = (idUser, dats)=>{
  return (dispatch)=>{
    fetch(`/student/addresume/${idUser}`, {
      method: "POST",
      
      body: dats
      
    })
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>dispatch(addResumeUserAC(data.UserOne)))
  }
}

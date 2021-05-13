import axios from "axios";


import {addPhotoAC} from '../actionCreators/actionCreator'

import {setUser} from "../actionCreators/actionCreatorAuth";



export const axiosAuth = () => {
    return (dispatch)=>{
        try {
            axios.get('/auth',
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
                .then(data => dispatch(setUser(data.data)))
                .then((data) => localStorage.setItem('token', data.payload.token))
        } catch (e) {
            localStorage.removeItem('token')
        }


    }
}


export const addPhotoUser = (idUser,dats) => {
  return (dispatch)=>{
    fetch(`/student/addphoto/${idUser}`, {
        method: "POST",
  
        body: dats,
      })
      .then((res) => res.json())
      // .then(data=>console.log(data.UserOne.photo))
      .then(data=> dispatch(addPhotoAC(data.UserOne.photo))) 


  }
}

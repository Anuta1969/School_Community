import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import {addPhotoUser} from '../../redux/Thunk/Thunk'
// import multer from 'multer'

function Profile(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const idUser = store.student.currentStudent._id;

  const user = store.student.currentStudent
  console.log(user.photo);
  const addPhotoHandler = (e) => {
    e.preventDefault();

    const dats = new FormData(e.target);
    console.log("----------",dats);

    // fetch(`/student/addphoto/${idUser}`, {
    //   method: "POST",

    //   body: dats,
    // })
    // .then((res) => res.json())
    // // .then(data=>console.log(data.UserOne))
    // .then(data=> dispatch(addPhotoUser(data.UserOne)))
    dispatch(addPhotoUser(idUser,dats))
  };
  return (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">
            <div className="student-img__box">
              <div className="student-img">
                <img src={`/img/${user.photo}`} alt="" />
              </div>
              <div className="student-add__foto">
                <form
                  onSubmit={addPhotoHandler}
                  encType="multipart/form-data"
                  action="/profile"
                  method="post"
                >
                  <input type="file" name="avatar" />
                  <button>add</button>
                </form>
              </div>
            </div>
          </div>
          <div className="student-form">2</div>
        </div>

        <div>Profile</div>
      </div>
    </section>
  );
}

export default Profile;

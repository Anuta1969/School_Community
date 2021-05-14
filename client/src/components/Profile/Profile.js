import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { addPhotoUser } from "../../redux/Thunk/Thunk";
// import multer from 'multer'
import StudentAbout from './StudentAbout'

function Profile(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const idUser = store.student.currentStudent._id;

  const user = store.student.currentStudent;
  console.log(idUser, user.photo);
  const [photo, setPhoto] = useState(false);
  const addPhotoHandler = (e) => {
    e.preventDefault();
    setPhoto(false);
    const dats = new FormData(e.target);
    // fetch(`/student/addphoto/${idUser}`, {
    //   method: "POST",

    //   body: dats,
    // })
    // .then((res) => res.json())
    // // .then(data=>console.log(data.UserOne))
    // .then(data=> dispatch(addPhotoUser(data.UserOne)))
    dispatch(addPhotoUser(idUser, dats));
  };

  const btnPhotoHandler = () => {
    setPhoto(true);
  };
  return (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">
            <div className="student-img__box">
              <div className="student-img">
                <img src={`/img/${user.photo}`} alt="Ваше фото" />
              </div>
             
              <div className="student-btn__photo-btn">
                {!photo && (
                  <button
                    onClick={btnPhotoHandler}
                    className="student-btn__photo btn btn-outline-primary"
                  >
                    Изменить фото
                  </button>
                )}
              </div>
              <div className="student-add__photo">
                {photo && (
                  <form
                    className="student-form__photo"
                    onSubmit={addPhotoHandler}
                    encType="multipart/form-data"
                    action="/profile"
                    method="post"
                  >
                    <input
                      className="student-form__photo-input form-control"
                      type="file"
                      name="avatar"
                    />
                    <button className="student-form__photo-btn btn btn-outline-primary">
                      Изменить
                    </button>
                  </form>
                )}
              </div>
              <div className="student-about">
               <ul className="student-about__title">
                  <StudentAbout user={user}/>
                 {/* <li className="student-about__item">{user.name}</li>
                 <li className="student-about__item"> год поступления и группа</li>
                 <li className="student-about__item">{user.phone}</li>
                 <li className="student-about__item">{user.email}</li> */}
               </ul>
             </div>
            </div>
          </div>
          <div className="student-form">
            
            
            2</div>
          {/*<div className="student-form">2</div>*/}
        </div>

        <div>Profile</div>
      </div>
    </section>
  );
}

export default Profile;

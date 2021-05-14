import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { addPhotoUser, addResumeUser } from "../../redux/Thunk/Thunk";

import StudentAbout from "./StudentAbout";

function Profile(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const idUser = store.student.currentStudent._id;
  console.log(idUser, "idUser");
  const user = store.student.currentStudent;

  const [photo, setPhoto] = useState(false);
  const [rezume, setRezume] = useState(false);

  const addPhotoHandler = (e) => {
    e.preventDefault();
    setPhoto(false);
    const dats = new FormData(e.target);
    // console.log("rezume", dats);
    dispatch(addPhotoUser(idUser, dats));
  };

  const saveRezumehandler = (e) => {
    e.preventDefault();
    setRezume(false);
    const dats = new FormData(e.target);
    console.log("rezume", dats);
    dispatch(addResumeUser(idUser, dats));
  };
  const btnPhotoHandler = () => {
    setPhoto(true);
  };
  const addRezumeHandler = () => {
    setRezume(true);
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
              <div className="student-about-text">
                <ul className="student-about__title">
                  <StudentAbout key={user._id} user={user} />
                </ul>
              </div>
              <div className="student-add__rezume">
                {rezume && 
                  <form
                  onSubmit={saveRezumehandler}
                    className="student-form__photo"                    
                    encType="multipart/form-data"
                    action="/profile"
                    method="post"
                  >
                    <input
                      className="student-form__photo-input form-control"
                      type="file"
                      name="rezume"
                    />
                    <button className="student-form__photo-btn btn btn-outline-primary">
                      Сохранить
                    </button>
                  </form>
                }
                 {!rezume &&
                  <button
                    onClick={addRezumeHandler}
                    className="student-form__photo-btn btn btn-outline-primary"
                  >
                    📃
                  </button>
                  } 
              </div>
            </div>
          </div>
          <div className="student-form"></div>
          {/*<div className="student-form">2</div>*/}
        </div>

        <div>Profile</div>
      </div>
    </section>
  );
}

export default Profile;

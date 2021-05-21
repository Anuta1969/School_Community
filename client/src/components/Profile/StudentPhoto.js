import React, { useState } from "react";
import {ThunkAddPhotoUser} from "../../redux/Thunk/ThunkStudent";
import { useDispatch, useSelector } from "react-redux";


function StudentPhoto({student, id}) {

  const dispatch = useDispatch();
  // const student = useSelector((state) => state.student);
  // const idUser = student._id;
  const [photo, setPhoto] = useState(false);
  const initialUser = useSelector(state=>state.student)
  const addPhotoHandler = (e) => {
    e.preventDefault();
    setPhoto(false);
    const dats = new FormData(e.target);

    dispatch(ThunkAddPhotoUser(id, dats));
  };

  const btnPhotoHandler = () => {
    setPhoto(true);
  };

  return (
    <div>
      <div className="student-img">
        <img
          className="student-profile__img"
          src={`${process.env.REACT_APP_URL}/img/${student.photo}`}
          alt="Ваше фото"
        />
      </div>
      <div className="student-add__photo-box">
        <div className="student-btn__photo-btn">
          {!photo && initialUser._id==id && !initialUser.admin &&(
            <button
              onClick={btnPhotoHandler}
              className="student-btn"
            >
              Изменить фото
            </button>
          )}
          {!photo && initialUser.admin &&(
            <button
              onClick={btnPhotoHandler}
              className="student-btn "
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
            <div>
            <input
              className="student-form__photo-input "
              type="file"
              name="avatar"
            />
            </div>
            <button className="student-btn student-btn__change-foto ">
              Изменить
            </button>
          </form>
        )}
      </div>
      </div>
    </div>
  );
}

export default StudentPhoto;

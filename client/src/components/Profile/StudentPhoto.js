import React, { useState } from "react";
import {ThunkAddPhotoUser} from "../../redux/Thunk/ThunkStudent";
import { useDispatch, useSelector } from "react-redux";


function StudentPhoto({student}) {

  const dispatch = useDispatch();
  // const student = useSelector((state) => state.student);
  const idUser = student._id;
  const [photo, setPhoto] = useState(false);
  const addPhotoHandler = (e) => {
    e.preventDefault();
    setPhoto(false);
    const dats = new FormData(e.target);

    dispatch(ThunkAddPhotoUser(idUser, dats));
  };
  const btnPhotoHandler = () => {
    setPhoto(true);
  };
  return (
    <div>
      <div className="student-img">
        <img
          src={`${process.env.REACT_APP_URL}/img/${student.photo}`}
          alt="Ваше фото"
        />
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
    </div>
  );
}

export default StudentPhoto;

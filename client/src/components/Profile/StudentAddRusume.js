import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhotoUser, ThunkaddResumeUser } from "../../redux/Thunk/Student_Thunk";

function StudentAddRusume({idUser}) {
  const dispatch = useDispatch();
  const [resume, setResume] = useState(false);
  
  const saveResumehandler = (e) => {
    e.preventDefault();
    setResume(false);
    const dats = new FormData(e.target);
    console.log("resume", dats);
    dispatch(ThunkaddResumeUser(idUser, dats));
  };
  const addResumeHandler = () => {
    setResume(true);
  };

  return (
    <>
      {resume && (
        <form
          onSubmit={saveResumehandler}
          className="student-form__photo"
          encType="multipart/form-data"
          action="/profile"
          method="post"
        >
          <input
            className="student-form__photo-input form-control"
            type="file"
            name="resume"
          />
          <button className="student-form__photo-btn btn btn-outline-primary">
            Сохранить
          </button>
        </form>
      )}
      {!resume && (
        <button
          onClick={addResumeHandler}
          className="student-form__photo-btn btn btn-outline-primary"
        >
          📃
        </button>
      )}
    </>
  );
}

export default StudentAddRusume;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ThunkAddResumeUser} from "../../redux/Thunk/ThunkStudent";

function StudentAddRusume() {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);
  const idUser = student._id;
  const resumeStudent= student.resume
  const [resume, setResume] = useState(false);

  const saveResumehandler = (e) => {
    e.preventDefault();
    setResume(false);
    const dats = new FormData(e.target);
    console.log("resume-------", dats);
    dispatch(ThunkAddResumeUser(idUser, dats));
    document.getElementById('student-form__id').classList.toggle('blockBackground')
  };
  useEffect(()=>{

    if(resumeStudent){
      document.getElementById('student-form__id').classList.toggle('blockBackground')
      // document.querySelector('.react-pdf__Document').classList.toggle('blockLoadingPicture')
    }

  },[])
  const addResumeHandler = () => {
    setResume(true);
  };
  return (
    <>
      <div className="student-add__rezume">
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
      </div>
    </>
  );
}

export default StudentAddRusume;

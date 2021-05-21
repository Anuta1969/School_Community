import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ThunkAddResumeUser} from "../../redux/Thunk/ThunkStudent";

function StudentAddRusume({student,id}) {
  const dispatch = useDispatch();
  const resumeStudent= student.resume
  const [resume, setResume] = useState(false);
  const initialUser = useSelector(state=>state.student)
  console.log(student);
  const saveResumehandler = (e) => {
    e.preventDefault();
    setResume(false);
    const dats = new FormData(e.target);
    dispatch(ThunkAddResumeUser(id, dats));
    // document.getElementById('student-form__id').classList.toggle('blockBackground')
  };
  useEffect(()=>{

    if(resumeStudent){
      // document.getElementById('student-form__id').classList.toggle('blockBackground')
    }

  },[])
  const addResumeHandler = () => {
    setResume(true);
  };


    // for download resume
  const downLoadResumeHandler = () => {
    fetch(`${process.env.REACT_APP_URL}/resume/${student.resume}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${student.resume}`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };


  return (
    <>
      <div className="student-add__resume">
        <div className="student-add__btn">
          {!resume && initialUser._id == id && !initialUser.admin && (
            <button
              onClick={addResumeHandler}
              className="student-btn"
            >
              Загрузить резюме
            </button>
          )}
          {!resume &&initialUser.admin && (
            <button
              onClick={addResumeHandler}
              className="student-form__photo-btn student-btn"
            >
              Загрузить резюме
            </button>
          )}
        </div>
        {resume && (
          <form
            onSubmit={saveResumehandler}
            className="student-form__photo"
            encType="multipart/form-data"
            action="/profile"
            method="post"
          >
            <input

              className="student-form__photo-input "
              type="file"
              name="resume"
            />
            <button className="student-btn student-form__resume-save ">
              Сохранить
            </button>
          </form>
        )}
        <div className="save-resume">
        { ((student.resume && initialUser.admin) || (student.resume && !initialUser.admin)) && <button  
          className="student-btn save-resume__btn"
            onClick={downLoadResumeHandler}>
                Скачать резюме
          </button>}
         </div>
      </div>
    </>
  );
}

export default StudentAddRusume;

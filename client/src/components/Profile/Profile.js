import React, { useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";

import { ThunkAddPhotoUser, ThunkAddResumeUser } from "../../redux/Thunk/ThunkStudent";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import StudentAbout from "./StudentAbout";
// import {useDropzone} from 'react-dropzone'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// import StudentAddRusume from './StudentAddRusume'

function Profile(props) {
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student);

  const idUser = student._id;
  
  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  // }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const [photo, setPhoto] = useState(false);
  const [resume, setResume] = useState(false);

  const addPhotoHandler = (e) => {
    e.preventDefault();
    setPhoto(false);
    const dats = new FormData(e.target);

    dispatch(ThunkAddPhotoUser(idUser, dats));
  };

  const saveResumehandler = (e) => {
    e.preventDefault();
    setResume(false);
    const dats = new FormData(e.target);
    console.log("resume-------", dats);
    dispatch(ThunkAddResumeUser(idUser, dats));
  };
  const btnPhotoHandler = () => {
    setPhoto(true);
  };
  const addResumeHandler = () => {
    setResume(true);
  };

  // for resume
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const btnPrevHandler =()=>{
    if(pageNumber < numPages && pageNumber !=1){
      return setPageNumber(pageNumber -1)
    }else{
      setPageNumber(1)
    }
  }
  const btnNextHandler =()=>{
    if(pageNumber <= numPages){
      return  setPageNumber( pageNumber +1)
    }else{
      setPageNumber(numPages)
    }
  }
  return (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">
            <div className="student-img__box">
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

              <div className="student-about-text">
                <ul className="student-about__title">
                  <StudentAbout key={student._id} student={student} />
                </ul>
              </div>

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
            </div>
          </div>
          <div className="student-form">
            Student list
            <div>
              <Document
                file={`${process.env.REACT_APP_URL}/resume/${student.resume}`}
                // file = {student.resume}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                {' '}
                Страница {pageNumber} из {numPages}{' '}
              </p>
            </div>
            <div className="btn-prev">
              <button onClick={btnPrevHandler} className="prev">Назад</button>
              <button onClick={btnNextHandler} className="prev">Вперед</button>
            </div>
            
          </div>
        
        </div>

        <div>Profile</div>
      </div>
    </section>
  );
}

export default Profile;

import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import { useSelector } from "react-redux";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function ProfileShowResume({student}) {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const initialUser = useSelector(state=>state.student)
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
  const AdminResume = useSelector((state)=>state.search.all).filter(student => student.admin === true)[0].resume
  const idAdmin = useSelector((state)=>state.search.all).filter(student => student.admin === true)[0]._id

// console.log("залогинился initialUser",initialUser._id, initialUser);
// console.log("зашли к student", student._id, student);
// console.log("зашел  к",idAdmin);
  return (
    <div className="resume-show">
      {/* Для студента который инициализировался */}
      
      <div id="student-form__id" className="resume__without">
          <img className="resume__without-img" src={`${process.env.REACT_APP_URL}/klipartz.com.png`} alt="resume" />
          <h3 className="resume__without-text">Загрузите резюме</h3>
      </div>
      
      
      {/* Для  студента к которому зашли */}
      {/* { ((!student.resume  && !student.admin) ||(!student.resume && idAdmin==initialUser._id && student.admin) ||(!AdminResume && idAdmin==initialUser._id && initialUser.resume) || ( !AdminResume && idAdmin!=initialUser._id && initialUser.resume)) &&
      <div id="student-form__id" className="resume__without">
          <img className="resume__without-img" src={`${process.env.REACT_APP_URL}/klipartz.com.png`} alt="resume" />
          <h3 className="resume__without-text">Загрузите резюме</h3>
      </div>
      } */}
      {/* Для админа */}
      {/* { !AdminResume  && 
      <div id="student-form__id" className="resume__without">
          <img className="resume__without-img" src={`${process.env.REACT_APP_URL}/klipartz.com.png`} alt="resume" />
          <h3 className="resume__without-text">Загрузите резюме</h3>
      </div>
      } */}
      
     {(initialUser.resume || initialUser._id != student._id) && <div className="resume-show__add">
       
        <Document
          file={`${process.env.REACT_APP_URL}/resume/${student.resume}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* Нумерация страниц */}
        {/* {numPages > 1 && (
          <p>
            {" "}
            Страница {pageNumber} из {numPages}{" "}
          </p>
        )} */}
      </div>}
      <div className="btn-prev">
        {pageNumber > 1 && (
          <button onClick={btnPrevHandler} className="pdf-prev">
            ‹
          </button>
        )}
        {pageNumber < numPages && (
          <button onClick={btnNextHandler} className="pdf-next">
            ›
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileShowResume;

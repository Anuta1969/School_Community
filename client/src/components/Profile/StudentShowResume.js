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

  return (
    <div className="resume-show">
      {!initialUser.resume  &&
      <div id="student-form__id" className="resume__without">
          <img className="resume__without-img" src={`${process.env.REACT_APP_URL}/klipartz.com.png`} alt="resume" />
          <h3 className="resume__without-text">Загрузите резюме</h3>
      </div>
      }
      { initialUser.admin  &&
      <div id="student-form__id" className="resume__without">
          <img className="resume__without-img" src={`${process.env.REACT_APP_URL}/klipartz.com.png`} alt="resume" />
          <h3 className="resume__without-text">Загрузите резюме</h3>
      </div>
      }
      
     {initialUser.resume && <div className="resume-show__add">
       
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

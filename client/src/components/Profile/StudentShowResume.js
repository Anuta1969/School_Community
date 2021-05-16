import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function ProfileShowResume({student}) {
  
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
    <div className="resume-show">
      <div>
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
      </div>
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

import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import StudentAbout from "./StudentAbout";
import ProfileShowResume from "./StudentShowResume";
import StudentAddRusume from "./StudentAddRusume";
import StudentPhoto from './StudentPhoto'
function Profile(props) {
  const student = useSelector((state) => state.student);
  return (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">
            <div className="student-img__box">
              <StudentPhoto/>          
              <div className="student-about-text">
                <ul className="student-about__title">
                  <StudentAbout key={student._id} student={student} />
                </ul>
              </div>
              <StudentAddRusume />
            </div>
          </div>
          <div id="student-form__id" className="student-form">
           
            <ProfileShowResume student={student} />
          </div>
        </div>
      
      </div>
    </section>
  );
}
export default Profile;

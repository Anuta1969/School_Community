import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import StudentAbout from "./StudentAbout";
import ProfileShowResume from "./StudentShowResume";
import StudentAddRusume from "./StudentAddRusume";
import StudentPhoto from "./StudentPhoto";
import { useParams } from "react-router";

import { thunkInitStudents } from "../../redux/Thunk/ThunkSearch";
function Profile(props) {
  const { id } = useParams();

  const student = useSelector((state) => state.search.all).filter(
    (student) => student._id === id
  )[0];

  const dispatch = useDispatch();

  useEffect(() => {dispatch(thunkInitStudents());
  }, [dispatch]);

  return student ? (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">
            <div className="student-img__box">
              <StudentPhoto student={student} />
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
  ) : (
    ""
  );
}
export default Profile;

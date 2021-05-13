import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Profile.css'


function Profile(props) {

  const dispatch = useDispatch()
  const store = useSelector(store=>store)



  return (
    <section>
      <div className="container">
        <div className="student-box">
          <div className="student-about">1</div>
          <div className="student-form">2</div>
        </div>

        <div>Profile</div>
      </div>
    </section>
  );
}

export default Profile;

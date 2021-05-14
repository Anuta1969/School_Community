import React from 'react';
import StudentAboutItem from './StudentAboutItem'
function StudentAbout({user}) {
  return (
    <>
      <li className="student-about__item"><StudentAboutItem item={user.name}/></li>
                 {/* <li className="student-about__item"> год поступления и группа</li>
                 <li className="student-about__item">{user.phone}</li>
                 <li className="student-about__item">{user.email}</li> */}
    </>
  );
}

export default StudentAbout;

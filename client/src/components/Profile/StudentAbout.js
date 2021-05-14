import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import StudentAboutItem from "./StudentAboutItem";
import { setUser } from "../../redux/actionCreators/actionCreatorAuth";
import { apdateUserProfile } from "../../redux/Thunk/Thunk";

function StudentAbout({ user }) {
  const [btnApdete, setbtnApdete] = useState(false);
  const dispatch = useDispatch();
  const btnApdeteHandler = () => {
    setbtnApdete(true);
  };
  const id = user._id;

  const btnFormHandler = (e) => {
    setbtnApdete(false);
    const {
      name: { value: name },
      phone: { value: phone },
      email: { value: email },
      year: { value: year },
      group: { value: group },
      city: { value: city },
      stack: { value: stack },
      language: { value: language },
      socialLinkedin: { value: socialLinkedin },
      socialGitHab: { value: socialGitHab },
      placeWork: { value: placeWork },
    } = e.target;

    dispatch(
      apdateUserProfile(
        id,
        name,
        phone,
        email,
        year,
        group,
        city,
        stack,
        language,
        socialLinkedin,
        socialGitHab,
        placeWork
      )
    );
  };
  return (
    <>
      <button className="student-apdate__text" onClick={btnApdeteHandler}>
        ✎
      </button>

      {!btnApdete && (
        <>
          <li className="student-about__item">{user.name}</li>
          <li className="student-about__item">{user.phone} </li>
          <li className="student-about__item">{user.email} </li>
          <li className="student-about__item"> {user.year}</li>
          <li className="student-about__item"> {user.group}</li>
          <li className="student-about__item"> {user.city}</li>
          <li className="student-about__item"> {user.stack}</li>
          <li className="student-about__item"> {user.language}</li>
          <li className="student-about__item"> {user.socialLinkedin}</li>
          <li className="student-about__item"> {user.socialGitHab}</li>
          <li className="student-about__item">{user.placeWork} </li>
          <li className="student-about__item">
          <a href={`/img/${user.resume}`}>download</a>
            {/* <iframe src={`/img/${user.resume}`} style="width:300px; height:300px;" ></iframe> */}
            {/* <embed src={`/img/${user.resume}`} width="200px" height="100px" /> */}
          </li>
        </>
      )}
      
       
      {/* <embed src={`/img/${user.resume}`}  type="application/pdf"   height="700px" width="500"></embed> */}
      {btnApdete && (
        <>
          <form className="about-form__update" onSubmit={btnFormHandler}>
            <input
              className="about-item__change"
              type="text"
              name="name"
              defaultValue={user.name}
            />
            <input
              className="about-item__change"
              type="text"
              name="phone"
              defaultValue={user.phone}
            />
            <input
              className="about-item__change"
              type="text"
              name="email"
              defaultValue={user.email}
            />
            <input
              className="about-item__change"
              type="text"
              name="year"
              placeholder="Год поступления"
              defaultValue={user.year}
            />

            <select
              class="student-about__item form-select"
              aria-label="Default select example"
              name="group"
            >
              <option selected>{user.group}</option>
              <option value="Ежи">Ежи</option>
              <option value="Пчелы">Пчелы</option>
              <option value="Бобры">Бобры</option>
              <option value="Медведи">Медведи</option>
              <option value="Барсы">Барсы</option>
              <option value="Песцы">Песцы</option>
              <option value="Тигры">Тигры</option>
              <option value="Киты">Киты</option>
              <option value="Сойки">Сойки</option>
              <option value="Рыси">Рыси</option>
              <option value="Еноты">Еноты</option>
              <option value="Волки">Волки</option>
              <option value="Лисы">Лисы</option>
              <option value="Орлы">Орлы</option>
              <option value="Совы">Совы</option>
            </select>
            <select
              class="student-about__item form-select"
              aria-label="Default select example"
              name="city"
            >
              <option selected>{user.city}</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
            </select>

            <input
              className="about-item__change"
              type="text"
              name="stack"
              placeholder="Языки програмирования"
              defaultValue={user.stack}
            />
            <input
              className="about-item__change"
              type="text"
              name="language"
              placeholder="Иностранные языки"
              defaultValue={user.language}
            />
            <input
              className="about-item__change"
              type="text"
              name="socialLinkedin"
              placeholder="Linkedin"
              defaultValue={user.socialLinkedin}
            />
            <input
              className="about-item__change"
              type="text"
              name="socialGitHab"
              placeholder="GitHub"
              defaultValue={user.socialGitHab}
            />
            <input
              className="about-item__change"
              type="text"
              name="placeWork"
              placeholder="Место работы"
              defaultValue={user.placeWork}
            />
            
            <button className="about-item-btn">Сохранить</button>
          </form>
        </>
      )}
      
    </>
  );
}

export default StudentAbout;

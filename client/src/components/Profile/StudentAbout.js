import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { ThunkUpdateProfile, } from "../../redux/Thunk/ThunkStudent";
import {thunkInitStudents} from "../../redux/Thunk/ThunkSearch";
import {Link} from "react-router-dom";

function StudentAbout({ student, id }) {
  const [btnUpdate, setBtnUpdate] = useState(false);
  const dispatch = useDispatch();
  const [deleteBtnUpdate, setDeleteBtnUpdate ] = useState(true)
console.log("страничка абаут", id);
  const btnUpdateHandler = () => {
    setDeleteBtnUpdate(false)
    setBtnUpdate(true);
  };
  // const id = student?._id;
  const initialUser = useSelector(state=>state.student)
  // console.log("log-",initialUser, "user-", id);
  const btnFormHandler = (e) => {
    setBtnUpdate(false);
    setDeleteBtnUpdate(true)
    const {
      name: { value: name },
      lastName: { value: lastName },
      phone: { value: phone },
      email: { value: email },
      year: { value: year },
      group: { value: group },
      city: { value: city },
      stack: { value: stack },
      language: { value: language },
      socialTelegramm: { value: socialTelegramm },
      socialGitHab: { value: socialGitHab },
      instagramm: { value: instagramm },

      placeWork: { value: placeWork },
    } = e.target;
    console.log(group, year);

   dispatch(
      ThunkUpdateProfile(
        id,
        name,
        lastName,
        phone,
        email,
        year,
        group,
        city,
        stack,
        language,
        socialTelegramm,
        socialGitHab,
        instagramm,

        placeWork
      )
    );
  };
  ;

  return (
    <>


      {!btnUpdate && (
        <>
          <li className="student-about__item">{student?.name}</li>
          <li className="student-about__item">{student?.lastName}</li>
          <li className="student-about__item">+{student?.phone} </li>
          <li className="student-about__item">{student?.email} </li>
          {!student.admin && <li className="student-about__item"> {student?.year}</li>}
          {!student.admin && <li className="student-about__item"> {student?.group}</li>}
          {!student.admin && <li className="student-about__item"> {student?.city}</li>}
          <li className="student-about__item"> {student?.stack}</li>
          <li className="student-about__item"> {student?.language}</li>
          {/* <li className="student-about__item"> {student?.socialTelegramm}</li>
          <li className="student-about__item"> {student?.socialGitHab}</li>
          <li className="student-about__item"> {student?.instagramm}</li> */}
          
          <li className="student-about__item"><Link to={`/organizations/org/${student?.jobId}`}>{student?.placeWork}   </Link></li>
        
          
          <li className="student-about__item">
            {/* <button  onClick={downLoadResumeHandler}>
              Скачать резюме
            </button> */}
          </li>
        </>
      )}

      {btnUpdate && (
        <>
          <form className="about-form__update" onSubmit={btnFormHandler}>
            <input
              className="about-item__change"
              type="text"
              name="name"
              defaultValue={student?.name}
            />
            <input
              className="about-item__change"
              type="text"
              name="lastName"
              placeholder="Фамилия"
              defaultValue={student?.lastName}
            />
            <input
              className="about-item__change"
              type="text"
              name="phone"
              defaultValue={student?.phone}
            />
            <input
              className="about-item__change"
              type="text"
              name="email"
              defaultValue={student?.email}
            />
            <select
              className="student-about__item form-select"
              aria-label="Default select example"
              name="year"
            >
              <option defaultValue={student?.year}>
                {!student?.year ? "Введите год обучения" : student?.year}
              </option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <select
              className="student-about__item form-select"
              aria-label="Default select example"
              name="group"
            >
              <option defaultValue={student?.group}>
                {!student?.group ? "Имя группы" : student?.group}
              </option>
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
              className="student-about__item form-select"
              aria-label="Default select example"
              name="city"
            >
              <option defaultValue={student?.city}>
                {!student?.city ? "Город вашего обучения" : student?.city}
              </option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
            </select>

            <input
              className="about-item__change"
              type="text"
              name="stack"
              placeholder="Языки програмирования"
              defaultValue={student?.stack}
            />
            <input
              className="about-item__change"
              type="text"
              name="language"
              placeholder="Иностранные языки"
              defaultValue={student?.language}
            />
            <input
              className="about-item__change"
              type="text"
              name="socialTelegramm"
              placeholder="telegram"
              defaultValue={student?.socialTelegramm}
            />
            <input
              className="about-item__change"
              type="text"
              name="socialGitHab"
              placeholder="GitHub"
              defaultValue={student?.socialGitHab}
            />
            <input
              className="about-item__change"
              type="text"
              name="instagramm"
              placeholder="instagramm"
              defaultValue={student?.instagramm}
            />
            <input
              className="about-item__change"
              type="text"
              name="placeWork"
              placeholder="Место работы"
              defaultValue={student?.placeWork}
            />

            <button className="about-item-btn student-btn">Сохранить</button>
          </form>
        </>
      )}
      {initialUser._id == id && deleteBtnUpdate && !initialUser.admin &&<button className="student-btn student-update__text" onClick={btnUpdateHandler}>
         Редактировать данные
      </button>}
      {initialUser.admin && deleteBtnUpdate &&  <button className="student-btn student-update__text" onClick={btnUpdateHandler}>
      Редактировать данные
      </button>}
    </>
  );
}

export default StudentAbout;

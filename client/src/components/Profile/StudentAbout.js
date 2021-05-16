import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkUpdateProfile } from "../../redux/Thunk/ThunkStudent";

function StudentAbout({ student }) {
  const [btnUpdate, setBtnUpdate] = useState(false);
  const dispatch = useDispatch();
  const btnUpdateHandler = () => {
    setBtnUpdate(true);
  };
  const id = student._id;

  const btnFormHandler = (e) => {
    setBtnUpdate(false);
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
      socialLinkedin: { value: socialLinkedin },
      socialGitHab: { value: socialGitHab },
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
        socialLinkedin,
        socialGitHab,
        placeWork
      )
    );
  };
  
  // for download resume
  const downLoadResumeHandler = () => {

    fetch(`${process.env.REACT_APP_URL}/resume/${student.resume}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${student.resume}`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
      <button className="student-update__text" onClick={btnUpdateHandler}>
        ✎
      </button>

      {!btnUpdate && (
        <>
          <li className="student-about__item">{student?.name}</li>
          <li className="student-about__item">{student?.lastName}</li>
          <li className="student-about__item">{student?.phone} </li>
          <li className="student-about__item">{student?.email} </li>
          <li className="student-about__item"> {student?.year}</li>
          <li className="student-about__item"> {student?.group}</li>
          <li className="student-about__item"> {student?.city}</li>
          <li className="student-about__item"> {student?.stack}</li>
          <li className="student-about__item"> {student?.language}</li>
          <li className="student-about__item"> {student?.socialLinkedin}</li>
          <li className="student-about__item"> {student?.socialGitHab}</li>
          <li className="student-about__item">{student?.placeWork} </li>
          <li className="student-about__item">
            <button  onClick={downLoadResumeHandler}>
              Загрузить резюме
            </button>
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
              name="socialLinkedin"
              placeholder="Linkedin"
              defaultValue={student?.socialLinkedin}
            />
            <input
              className="about-item__change"
              type="text"
              name="socialGitHab"
              placeholder="GitHub"
              defaultValue={student.socialGitHab}
            />
            <input
              className="about-item__change"
              type="text"
              name="placeWork"
              placeholder="Место работы"
              defaultValue={student?.placeWork}
            />

            <button className="about-item-btn">Сохранить</button>
          </form>
        </>
      )}
    </>
  );
}

export default StudentAbout;

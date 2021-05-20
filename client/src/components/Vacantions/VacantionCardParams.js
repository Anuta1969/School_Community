import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import {
  ThunkInitOneVacantion,
  ThunkEditVacantion,
} from '../../redux/Thunk/VacantionThunk';

function VacantionCardParams() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const vacantion = useSelector((state) => state.vacantion).filter(
    (el) => el._id === id
  )[0];
  const organizationLink = useSelector((state) => state.organization);
  console.log(vacantion);
  console.log(organizationLink);
  const student = useSelector((state) => state.student);

  let [actual, setActual] = useState(true);
console.log(actual);
  const idStudent = student._id;
  useEffect(() => {
    // if (vacantion) {
    //   setActual(true);
    // }
    dispatch(ThunkInitOneVacantion(id));
  }, [dispatch]);

  useEffect(() => {
    console.log('useEffect', actual);

    dispatch(ThunkEditVacantion(id, actual));
  }, [actual]);

  const editHandler = (event) => {
    event.preventDefault();
    setActual(!actual);

    dispatch(ThunkEditVacantion(id, actual));
  };

  return (
    <div className="card_info">
      <div className="">
        <div>
          <h4 className="card_text_params">
            <Link
              className="card-text card_text_params"
              to={`/organizations/org/${vacantion?.organizationId}`}
            >
              Организация:{vacantion?.organization}
            </Link>
          </h4>
          <p className="card-text  card_text_params">
            Вакансия: {vacantion?.vacantion}
          </p>
          <p className="card-text card_text_params">
            Зарплата: {vacantion?.salary}
          </p>
          <p className="card-text card_text_params">
            Описание :{vacantion?.description}
          </p>
          <p className="card-text card_text_params">
            Дата размещения:{vacantion?.date}
          </p>
          <h3 className="card-text card_text_params">
            <Link
              className="card-text card_text_params"
              to={`/profile/${vacantion?.userID}`}
            >
              Автор: {vacantion?.contacts}
            </Link>
          </h3>
          {idStudent === vacantion?.userID || student.admin ? (
            <form
              onSubmit={editHandler}
              action={`/vacantion/${id}`}
              method="PUT"
            >
              <button>
                {actual ? 'Закинуть в архив' : 'Убрать из архива'}
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default VacantionCardParams;

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
  

  const idStudent = student._id;
  useEffect(() => {
    
    dispatch(ThunkInitOneVacantion(id));
    
  }, [dispatch]);

  useEffect(() => {
  vacantion && setActual(vacantion.relevance)

  }, [vacantion]);

  const editHandler = (event) => {
    event.preventDefault();
    

    dispatch(ThunkEditVacantion(id, !actual));
    setActual(!actual);
  };
 

  return (
    <div className="card_info_vacantion">
      <div className="card_info_vacantion-box">
        <div>
          <p className="card_text_params">
            <Link
              className="card-text card_text_params_title"
              to={`/organizations/org/${vacantion?.organizationId}`}
            >
             Организация : <span className='vac_span'>{vacantion?.organization}</span>
            </Link>
          </p>
          <p className="card-text  card_text_params">
            Вакансия: <span className='vac_span'>{vacantion?.vacantion}</span>
          </p>
          <p className="card-text card_text_params">
            Зарплата: <span className='vac_span'>{vacantion?.salary}</span>
          </p>
          <p className="card-text card_text_params vac_description">
            Описание : <span className='vac_description'>{vacantion?.description}</span>
          </p>
          <p className="card-text card_text_params">
            Дата размещения: <span>{vacantion?.date.slice(0,10)}</span>
              
          </p>
          <h3 className="card-text card_text_params">
            <Link
              className="card-text card_text_params"
              to={`/profile/${vacantion?.userID}`}
            >
              Автор: <span className='vac_span'>{vacantion?.contacts}</span>
            </Link>
          </h3>
          {idStudent === vacantion?.userID || student.admin ? (
            <form
              onSubmit={editHandler}
              action={`/vacantion/${id}`}
              method="PUT"
            >
              <button className='vac_btn'>
                {actual ? 'Добавить в архив' : 'Убрать из архива'}
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default VacantionCardParams;

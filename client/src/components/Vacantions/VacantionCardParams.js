import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { ThunkInitOneVacantion ,ThunkEditVacantion} from '../../redux/Thunk/VacantionThunk';

function VacantionCardParams() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const vacantion = useSelector((state) => state.vacantion).filter(
    (el) => el._id === id
  )[0];
  console.log(vacantion);
  const student = useSelector((state)=>state.student)
  
  let [actual, setActual] = useState(null)


  
 const idStudent = student._id
  useEffect(() => {
    if(vacantion){
  setActual(true)
}
    dispatch(ThunkInitOneVacantion(id));
  }, [dispatch]);

  useEffect(() => {
    console.log('useEffect', actual);

    dispatch(ThunkEditVacantion(id, actual));
  }, [actual]);

  const editHandler = (event) => {
    event.preventDefault();
    setActual(!actual)
    console.log(actual);
    dispatch(ThunkEditVacantion(id,actual))
    
  };

 

  return (
    <div>
      <div className="">
        <div className="card_info">
          <h4 className=" card_text_title">
            Организация:{vacantion?.organization}
          </h4>
          <p className="card-text  card_text">Вакансия: {vacantion?.vacantion}</p>
          <p className="card-text card_text">Зарплата: {vacantion?.salary}</p>

          <p className="card-text card_text">Описание :{vacantion?.description}</p>
          <p className="card-text card_text">Дата размещения:{vacantion?.date}</p>
          <h3 className="card-text card_text">
            <Link className="card-text card_text" to={`/profile/${vacantion?.userID}`}>
             Автор: {vacantion?.contacts}
            </Link>
          </h3>
{ idStudent === vacantion?.userID || student.admin? <form onSubmit={editHandler} action={`/vacantion/${id}`} method="PUT">
            <button>Актульность</button>
          </form>:null}
         
        </div>
      </div>
    </div>
  );
}

export default VacantionCardParams;

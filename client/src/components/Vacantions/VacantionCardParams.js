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
  const student = useSelector((state)=>state.student)
  
  let [actual, setActual] = useState(null)


  
 const idStudent = student._id
  useEffect(() => {
    if(vacantion){
  setActual(vacantion.relevance)
}
    dispatch(ThunkInitOneVacantion(id));
  }, [dispatch]);

  console.log(actual);

  const editHandler = (event) => {
    event.preventDefault();
    setActual(!actual)
    console.log(actual);
    dispatch(ThunkEditVacantion(id,actual))
    
  };

 

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{vacantion?.vacantion}</h5>
          <p className="card-text">{vacantion?.organization}</p>
          <p className="card-text">{vacantion?.description}</p>
          <p className="card-text">{vacantion?.date}</p>
          <h3>
            <Link to={`/profile/${vacantion?.userID}`}>
              {vacantion?.contacts}
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

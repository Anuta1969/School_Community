import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router";


function VacantionCard({vacantion}) {
  const history = useHistory()


  const ClickHandler =()=>{
    history.push(`/post/${vacantion.userID}`)
  }
  return (
    <div >
      <div onClick={ClickHandler} className="card">
  <div className="card-body">
    <h5 className="card-title">{vacantion.vacantion}</h5>
    <p className="card-text">{vacantion.organization}</p>
    <p className="card-text">{vacantion.date}</p>
    <p className="card-text">{vacantion.description}</p>
    <p className="card-text">{vacantion.contacts}</p>


  </div>
</div>
    </div>
  );
}

export default VacantionCard;

import { useHistory } from 'react-router';
import ReactTimeAgo from 'react-time-ago';

function VacantionCard({ vacantion }) {
  const history = useHistory();
  console.log(vacantion);

function VacantionCard({vacantion}) {
  const history = useHistory()


  const ClickHandler =()=>{
    history.push(`/post/${vacantion.userID}`)
  }
  return (
    <div>
      <div onClick={ClickHandler} className="card">
        <div className="card-body">
          <h5 className="card-title">{vacantion.vacantion}</h5>
          <p className="card-text">{vacantion.organization}</p>
          <p className="card-text">
            <ReactTimeAgo date={vacantion.date} locale="ru" />{' '}
          </p>
          <p className="card-text">{vacantion.description}</p>
          <p className="card-text">{vacantion.contacts}</p>
        </div>
      </div>
    </div>
  );
}

export default VacantionCard;

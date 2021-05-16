import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';



  function VacantionCard({ vacantion }) {
    const history = useHistory();

    const ClickHandler = () => {
      history.push(`/vacantion/${vacantion._id}`);
    };

  

    return (
      <div onClick={ClickHandler}> 
        <div  className="card">
          <div className="card-body">
            <h5 className="card-title">{vacantion.vacantion}</h5>
            <p className="card-text">{vacantion.organization}</p>
            <p className="card-text">
              <ReactTimeAgo date={vacantion.date} locale="ru" />{' '}</p>

          </div>
        </div>
      </div>
    );
  }

export default VacantionCard;

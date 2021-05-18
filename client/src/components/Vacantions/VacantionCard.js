import {useHistory} from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import './Vacantion.css'
function VacantionCard({vacantion}) {
    const history = useHistory();

    const ClickHandler = () => {
        history.push(`/vacantion/${vacantion._id}`);
    };

    return (
        <div onClick={ClickHandler} className='vacantion_card text-center'>
            <div className="card">
                <div className="card-body m-auto">
                    <h4 className="card-title card_text_title">Компания: {vacantion?.organization}</h4>
                    <p className="card-text  card_text">Вакансия: {vacantion?.vacantion}</p>
                    <p className="card-text card_text">Зарплата: {vacantion?.salary}</p>
                    <p className="card-text card_text">
                        Публикация: <ReactTimeAgo date={vacantion.date} locale="ru"/>{' '}</p>
                </div>
            </div>
        </div>
    );
}

export default VacantionCard;

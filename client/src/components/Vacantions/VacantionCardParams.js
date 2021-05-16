import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import {ThunkInitOneVacantion} from '../../redux/Thunk/VacantionThunk';

function VacantionCardParams() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const vacantion = useSelector((state) => state.vacantion).filter((el) => el._id === id)[0];

    useEffect(() => {
        dispatch(ThunkInitOneVacantion(id))
    }, [dispatch]);

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
                </div>
            </div>
        </div>
    );
}

export default VacantionCardParams;

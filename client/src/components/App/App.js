import './App.css';
import React, {useEffect} from 'react';
import Nav from "../Nav/Nav";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import Profile from "../Profile/Profile";
import Vacantion from "../Vacantions/Vacantions";
import {useDispatch, useSelector} from "react-redux";
import {axiosAuth} from "../../redux/Thunk/ThunkAuth";
import AdminList from "../AdminList/AdminList";
import RequestStudentParams from "../RequestStudentParams/RequestStudentParams";
import Search from "../Search/Search";
import OrganizationList from '../OrganizationList/OrganizationList'
import OrganizationView from '../OrganizationView/OrganizationView';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import VacantionCardParams from '../Vacantions/VacantionCardParams';

function App() {
    const isAuth = useSelector(state => state.student.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state => state.student.admin)
    const student = useSelector(state => state.student)

    useEffect(() => {
        dispatch(axiosAuth())
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route path="/registration" component={Registration}/>
                            <Route exact path="/" component={Login}/>
                        </Switch>
                        : null}
                    {isAuth && !admin ?
                        <Switch>
                            <Route exact path='/profile/:id' component={Profile}/>
                            <Route path='/search' component={Search}/>
                            <Route exact path="/organizations" component={OrganizationList}/>
                            <Route path="/organizations/org/:id" component={OrganizationView}/>
                            <Route exact path='/vacantions' component={Vacantion}/>
                            <Route exact path='/vacantion/:id' component={VacantionCardParams}/>
                            <Route path='/organizations/add' component={OrganizationAddForm}/>
                            <Redirect to={`/profile/${student._id}`}/>
                        </Switch> : null
                    }
                    {admin ?
                        <Switch>
                            <Route exact path='/adminList' component={AdminList}/>
                            <Route exact path='/profile/:id' component={Profile}/>
                            <Route path='/admin/student/:id' component={RequestStudentParams}/>
                            <Route path='/search' component={Search}/>
                            <Route exact path="/organizations" component={OrganizationList}/>
                            <Route path="/organizations/org/:id" component={OrganizationView}/>
                            <Route exact path='/vacantions' component={Vacantion}/>
                            <Route path='/organizations/add' component={OrganizationAddForm}/>
                            <Route exact path='/vacantion/:id' component={VacantionCardParams}/>
                            <Redirect to='/adminList'/>
                        </Switch> : null
                    }
                </div>
                {!isAuth? <div className="video">
                    <video className="video__media" src={`${process.env.REACT_APP_URL}/back.mp4`} autoPlay muted loop></video>
                </div>:null}
            </div>
        </BrowserRouter>
    )
}

export default App;

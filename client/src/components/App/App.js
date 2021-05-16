import './App.css';
import React, {useEffect} from 'react';
import Nav from "../Nav/Nav";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import Profile from "../Profile/Profile";
import Vacantion from "../Vacantions/Vacantions";
import VacantionsForm from "../VacantionForm/VacantionForm";
import {useDispatch, useSelector} from "react-redux";
import {axiosAuth} from "../../redux/Thunk/ThunkAuth";
import Student from "../Student/Student";
import AdminList from "../AdminList/AdminList";

import RequestStudentParams from "../RequestStudentParams/RequestStudentParams";
import Search from "../Search/Search";
import OrganizationList  from '../OrganizationList/OrganizationList'
import OrganizationView from '../OrganizationView/OrganizationView';
import OrganizationAddForm from '../OrganizationAddForm/OrganizationAddForm';
import Post from '../Post/Post';

function App() {
    const isAuth = useSelector(state => state.student.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state =>state.student.admin)


    useEffect(() => {
        dispatch(axiosAuth())
    }, [dispatch])
  return (
      <BrowserRouter>
    <div className="App">
        <Nav/>
        <div className="wrap">
            {!isAuth?
                <Switch>
                    <Route path="/registration" component={Registration}/>
                    <Route exact path="/" component={Login}/>
                    {/*<Redirect to="/login" />*/}

                </Switch>
                :null}
            {isAuth && !admin?
                <Switch>
                    <Route exact path="/" component={Profile}/>
                    <Route path='/search' component ={Search}/>
                    <Route path='/student' component ={Student} />
                    <Route exact path="/organizations" component={OrganizationList}/>
                    <Route path="/organizations/org/:id" component={OrganizationView}/>
                    <Route exact path='/vacantions' component ={Vacantion} />
                    <Route path='/vacantionsForm' component ={VacantionsForm} />
                    <Route path='/organizations/add' component ={OrganizationAddForm} />
                </Switch>:null
            }
            {admin?
                <Switch>
                    <Route exact path='/' component={AdminList}/>
                    <Route path='/admin/student/:id' component={RequestStudentParams}/>
                    <Route path='/search' component ={Search}/>
                    <Route path='/student' component ={Student} />
                    <Route exact path="/organizations" component={OrganizationList}/>
                    <Route path="/organizations/org/:id" component={OrganizationView}/>
                    <Route exact path='/vacantions' component ={Vacantion} />
                    <Route path='/vacantionsForm' component ={VacantionsForm} />
                    <Route path='/organizations/add' component ={OrganizationAddForm} />
                </Switch> : null
            }
        </div>
    </div>
      </BrowserRouter>
  )
}
export default App;

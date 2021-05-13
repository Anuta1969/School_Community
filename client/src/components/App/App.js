import './App.css';
import React, {useEffect} from 'react';
import Nav from "../Nav";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import Post from "../Post";
import Profile from "../Profile";
import {useDispatch, useSelector} from "react-redux";
import {axiosAuth} from "../../redux/Thunk/Thunk";
import Student from "../Student";
import AdminList from "../AdminList";
import RequestStudent from "../RequestStudent";
import RequestStudentParams from "../RequestStudentParams";
import Vacantions from "../Vacantions";
import Search from "../Search";


function App() {
    const isAuth = useSelector(state => state.student.currentStudent.isAuth)
    const dispatch = useDispatch()
    const admin = useSelector(state =>state.student.currentStudent.admin)


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
                :
                <Switch>
                    <Route exact path="/" component={Profile}/>
                    <Route path='/search' component ={Search}/>
                    <Route path='/student' component ={Student} />
                </Switch>
            }
            {admin?
                <Switch>
                    <Route exact path='/adminList' component = {AdminList}/>
                    <Route path='/admin/student/:id' component ={RequestStudentParams}/>


                </Switch>:null

            }
        </div>
    </div>
      </BrowserRouter>
  )
}

export default App;

import './App.css';
import React, {useEffect} from 'react';
import Nav from "../Nav";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import Post from "../Post";
import Profile from "../Profile";
import Vacantion from "../Vacantions";
import {useDispatch, useSelector} from "react-redux";
import {axiosAuth} from "../../redux/Thunk/Thunk";
import Student from "../Student";
import AdminList from "../AdminList";


function App() {
    const isAuth = useSelector(state => state.student.isAuth)
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
                    {/*<Redirect to='/login'/>*/}
                </Switch>
                :
                <Switch>
                    <Route exact path="/posts" component={Post}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path='/student' component ={Student} />
                    <Route path='/vacantions' component ={Vacantion} />
                    <Redirect to="/posts"/>
                </Switch>
            }
            {admin?
                <Switch>
                    <Route path='/adminList' component = {AdminList}/>


                </Switch>:null

            }
        </div>
    </div>
      </BrowserRouter>
  )
}

export default App;

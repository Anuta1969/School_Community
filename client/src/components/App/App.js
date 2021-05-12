import './App.css';
import React, {useEffect} from 'react';
import Nav from "../Nav";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import Post from "../Post/Post";
import Profile from "../Profile";
import {useDispatch, useSelector} from "react-redux";
import {axiosAuth} from "../../redux/Thunk/Thunk";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()


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
                    <Redirect to="/posts"/>
                </Switch>
            }
        </div>
    </div>
      </BrowserRouter>
  )
}

export default App;

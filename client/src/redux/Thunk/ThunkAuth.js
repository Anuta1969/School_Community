import axios from "axios";
import {setUser} from "../actionCreators/actionCreatorAuth";

export const axiosAuth = () => {
    return (dispatch) => {
        try {
            axios.get(`${process.env.REACT_APP_URL}/auth`, {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
                .then((data) => dispatch(setUser(data.data)))
                .then((data) => localStorage.setItem("token", data.payload.token));
        } catch (e) {localStorage.removeItem("token")}
    };
};

export const thunkLogin = (email, password) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_URL}/login`,
            {email, password})
            .then(data => dispatch(setUser(data.data)))
            .then((data) => localStorage.setItem('token', data.payload.token))
        .catch(({response}) => alert(`${response.data.message}`))
    }
}

export const thunkRegister = (info, e) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_URL}/registration`, {
            method: "POST",
            body: info
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.student) {
                    alert(data.message)
                    e.target.reset()
                }

                else {
                    alert(data.errors.errors[0].msg)
                    // e.target.reset()
                }
            })
            // .catch((data) => console.log(data))

    }
}






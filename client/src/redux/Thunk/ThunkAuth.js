import axios from "axios";

import {addPhotoAC, updateUserProfileAC, addResumeUserAC} from "../actionCreators/actionCreatorUser";

import {setUser} from "../actionCreators/actionCreatorAuth";

export const axiosAuth = () => {
    return (dispatch) => {
        try {
            axios
                .get(`${process.env.REACT_APP_URL}/auth`, {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                })
                .then((data) => dispatch(setUser(data.data)))
                .then((data) => localStorage.setItem("token", data.payload.token));
        } catch (e) {
            localStorage.removeItem("token");
        }
    };
};

export const thunkLogin = (email, password) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_URL}/login`,
            {email, password})
            // .then(data => console.log(data.data))
            .then(data => dispatch(setUser(data.data)))
            .then((data) => localStorage.setItem('token', data.payload.token))
            // .catch((error) => alert(`status: ${error.response.status} , ${error.response.data.message}`))
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
                } else {
                    alert(data.errors.errors[0].msg)
                    e.target.reset()
                }
            })
            .catch((error) => alert(`status: ${error.response.status} , ${error.response.data.message}`))
    }
}







export const addPhotoUser = (idUser, dats) => {
    return (dispatch) => {
        fetch(`/student/addphoto/${idUser}`, {
            method: "POST",

            body: dats,
        })
            .then((res) => res.json())
            // .then(data=>console.log(data))
            .then((data) => dispatch(addPhotoAC(data.UserOne.photo)));
    };
};

export const updateUserProfile = (id, name, phone, email, year, group, city, stack, language, socialLinkedin, socialGitHab, placeWork) => {
    return (dispatch) => {
        fetch(`/student/changetext`, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                id,
                name,
                phone,
                email,
                year,
                group,
                city,
                stack,
                language,
                socialLinkedin,
                socialGitHab,
                placeWork,
            }),
        })
            .then((res) => res.json())
            // .then(data=>console.log(data))
            .then((data) => dispatch(updateUserProfileAC(data.UserOne)));
    };
};


export const addResumeUser = (idUser, dats) => {
    return (dispatch) => {
        fetch(`/student/addresume/${idUser}`, {
            method: "POST",

            body: dats

        })
            .then(res => res.json())
            // .then(data=>console.log(data))
            .then(data => dispatch(addResumeUserAC(data.UserOne)))
    }
}

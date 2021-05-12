import axios from "axios";
import {setUser} from "../actionCreators/actionCreator";


export const axiosAuth = () => {
    return (dispatch)=>{
        try {
            axios.get('/auth',
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
                .then(data => dispatch(setUser(data.data)))
                .then((data) => localStorage.setItem('token', data.payload.token))
        } catch (e) {
            localStorage.removeItem('token')
        }


    }
}



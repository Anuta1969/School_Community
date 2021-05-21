import {addPhotoAC, updateUserProfileAC, addResumeUserAC,updateUserFromAllState,addPhotoUserFromAllAC,addResumeUserFromAllAC} from "../actionCreators/actionCreatorStudent";

export const ThunkAddResumeUser = (id, dats) => {
    return async(dispatch) => {
       const response = await fetch(`${process.env.REACT_APP_URL}/student/addresume/${id}`, {
            method: "POST",
            body: dats
        })
            const result = await response.json()
            console.log("result",result);
            dispatch(addResumeUserAC(result.resume))
            dispatch(addResumeUserFromAllAC(result))
    }
}

export const ThunkAddPhotoUser = (id, dats) => {
    return async(dispatch) => {
      const response = await  fetch(`${process.env.REACT_APP_URL}/student/addphoto/${id}`, {
            method: "POST",
            body: dats,
        })
        const result = await response.json()
        dispatch(addPhotoAC(result.UserOne.photo))
        dispatch(addPhotoUserFromAllAC(result.UserOne))

          
    };
};



export const ThunkUpdateProfile = (id, name, lastName, phone, email, year, group, city, stack, language, socialTelegramm, socialGitHab,instagramm, placeWork) => {
    return async (dispatch) => {
      const response= await  fetch(`${process.env.REACT_APP_URL}/student/${id}`, {

            method: "PUT",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                name,
                lastName,
                phone,
                email,
                year,
                group,
                city,
                stack,
                language,
                socialTelegramm,
                socialGitHab,
                instagramm,                
                placeWork,
            }),
        })
        const result = await response.json()
        console.log("Прилетел с бека обновленный",result);
        // dispatch(updateUserProfileAC(result.UserOne))
        dispatch(updateUserFromAllState(result.UserOne ))
            
    };
};

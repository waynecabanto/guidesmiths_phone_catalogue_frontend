import {GET_PHONES, SELECTED_PHONE, PHONE_CLICKED, GET_PHONES_SUCCESS, GET_PHONES_LOADING, GET_PHONES_FAILED} from './types';
import axios from 'axios';


//gets the information of the phone selected. this is useful for PhoneDetails component.
export const selectPhone = (phone) => {
    return {
        type: SELECTED_PHONE,
        payload: phone
    }
}


//this sets store to clicked so the React can know when to redirect
//this gets triggered alongside with selectPhone action
export const phoneClicked = (clicked) => {
    return {
        type: PHONE_CLICKED,
        payload: clicked
    }
}

export const getPhones = () => {
    return function (dispatch) {
        dispatch(getPhonesLoading());
        axios.get('https://waynecabanto-guidesmiths.herokuapp.com/phones').then(res => {
            dispatch(getPhonesSuccess());
            dispatch({
                type: GET_PHONES,
                payload: res.data
            });
        }).catch(err => {
            dispatch(getPhonesFailed(err));
        });
        
    }
};


//updates store if the API Request is successful
export const getPhonesSuccess = () => {
    return {
        type: GET_PHONES_SUCCESS
    }
}


//updates store to loading. this is useful for UI state management
export const getPhonesLoading = () => {
    return {
        type: GET_PHONES_LOADING
    }
}


//updates store to failed if the API Request failed and updates state with the error message
export const getPhonesFailed = (err) => {
    return {
        type: GET_PHONES_FAILED,
        payload: err
    }
}
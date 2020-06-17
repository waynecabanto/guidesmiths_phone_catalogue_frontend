import {GET_PHONES, SELECTED_PHONE, PHONE_CLICKED, GET_PHONES_SUCCESS, GET_PHONES_LOADING, GET_PHONES_FAILED} from '../actions/types';

const initialState = {
    phones: [],
    selected_phone: {},
    clicked: 0,
    failed: false,
    success: false,
    loading: false,
    err: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PHONES:
            return {
                ...state,
                phones: action.payload
            }
        case SELECTED_PHONE:
            return{
                ...state,
                selected_phone: action.payload
            }
        case PHONE_CLICKED: 
            return{
                ...state,
                clicked: action.payload
            }
        case GET_PHONES_SUCCESS: 
            return{
                ...state,
                success: true,
                failed: false,
                loading: false
            }
        case GET_PHONES_LOADING: 
            return{
                ...state,
                success: false,
                failed: false,
                loading: true
            }
        case GET_PHONES_FAILED: 
            return{
                ...state,
                success: false,
                failed: true,
                loading: false,
                err: action.payload
            }
        default: 
            return state;
    }
}
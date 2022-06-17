import { combineReducers } from "redux";
import contactReducer from "./contacts";
import imageReducer from "./picsum";
import postReducer from "./posts";

const allReducers = combineReducers({
    contacts: contactReducer,
    images: imageReducer,
    posts: postReducer,
})

export default allReducers;
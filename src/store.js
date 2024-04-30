import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import taskReducer from "./reducers/tasksSlice";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
    reducer:{
        option:optionReducer,
        goals:goalReducer,
        tasks:taskReducer

    }
})
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import conatctSliceReducers from "./Slices/conatctSlice";
import dashboardSliceReducers from "./Slices/dashboardSlice";
import  taskSliceReducers  from "./Slices/taskSlice";

const rootReducer = combineReducers(
    {
        task : taskSliceReducers,
        contact : conatctSliceReducers,
        dashboard : dashboardSliceReducers,

    }
);

export const store = configureStore({
    reducer:rootReducer,
    middleware : getDefautMiddleware =>
    getDefautMiddleware({
        serializableCheck : false,
    }),
});
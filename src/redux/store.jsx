import {configureStore} from "@reduxjs/toolkit";
import ColorReducer from "./ColorTheme/ColorSlice";
import NoteReducer from "./Notes/NotesSlice";
import FilterReducer from "./Filter/FilterSlice";


export const store = configureStore({
    reducer: {
        colorTheme : ColorReducer,
        notes : NoteReducer,
        filterNote : FilterReducer,
    }
})
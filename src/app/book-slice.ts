import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CourseType } from "@/common/types";


type Course = CourseType

interface IBookmarkState {
    courses: Course[];
}

const initialState: IBookmarkState = {
    courses: []
}

const bookSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setBookmark(state: IBookmarkState, action: PayloadAction<Course>) {
            const courseMarked = state.courses.find(
                (course) => course.id === action.payload.id)
            if (!courseMarked) {
                state.courses.push(action.payload)
            }
        },
        removeBookmark(state: IBookmarkState, action: PayloadAction<number>) {
            const removeCourse = state.courses.filter(
                (course) => course.id !== action.payload)
            state.courses = removeCourse
        }
    }
});

export const bookActions = bookSlice.actions;

export default bookSlice;
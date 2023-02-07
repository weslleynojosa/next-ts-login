import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useState } from "react"
import { CourseType } from '@/common/types'
import { bookActions } from '@/app/book-slice'
import { Bookmark, Course, CourseImg, CourseTitle } from "./styles/Courses.styled"
import bookmark from '@/assets/bookmark.svg'
import bookmarkFilled from '@/assets/bookmark-filled.svg'

interface ICourseData {
    courseItem: CourseType
}

// https://dummyjson.com/docs/auth

const CourseItem: React.FC<ICourseData> = (props) => {
    const { id, name, img } = props.courseItem
    const { courses } = useAppSelector((state) => state.bookmark);
    const [bookmarked, setBookmark] = useState<boolean>(() => {
        const isBookmarked = courses.find((course) => course.id === id)
        return !!isBookmarked;
    });

    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (bookmarked) {
            dispatch(bookActions.removeBookmark(id))
            setBookmark((prevState) => !prevState)
        } else {
            dispatch(bookActions.setBookmark(props.courseItem))
            setBookmark((prevState) => !prevState)
        }
    }

    return (
        <Course>
            <div>
                <CourseImg src={img} />
                <Bookmark onClick={handleClick}><img src={bookmarked ? bookmarkFilled.src : bookmark.src} /></Bookmark>
            </div>
            <CourseTitle>
                <p>{name}</p>
            </CourseTitle>
        </Course>
    )
}

export default CourseItem
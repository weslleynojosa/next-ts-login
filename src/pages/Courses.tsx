import { authActions } from "@/app/auth-slice";
import { useAppDispatch } from "@/app/hooks";
import { courseList } from "@/common/courseList";
import CourseItem from "@/components/CourseItem";
import { CourseType } from '@/common/types'
import { CourseList } from "@/components/styles/Courses.styled";
import { Header } from "@/components/styles/Header.styled";
import logout from '../assets/logout.svg';


const Courses = () => {
    const dispatch = useAppDispatch()
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //dispath
        dispatch(authActions.logout())

    }
    return (
        <>
            <Header>
                <p>Aubay Learning</p>
                <button onClick={handleClick}><img src={logout.src} alt=''/></button>
            </Header>
            <CourseList>
                {courseList.map((data, index) => {
                    return (
                        <CourseItem courseItem={data} key={index} />
                    ) 
                })}
            </CourseList>
        </>
    )
}

export default Courses
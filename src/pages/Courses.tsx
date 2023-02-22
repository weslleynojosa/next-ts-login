import { authActions } from "@/app/auth-slice";
import { useAppDispatch } from "@/app/hooks";
import Api, { errorInterceptor, responseInterceptor } from "@/common/axios";
import { courseList } from "@/common/courseList";
import { ProductType } from "@/common/types";
import CourseItem from "@/components/CourseItem";
import { CourseList } from "@/components/styles/Courses.styled";
import { Header } from "@/components/styles/Header.styled";
import { useEffect, useState } from "react";
import logout from '../assets/logout.svg';

const Courses = () => {
    const [dummyProducts, setDummyProducts] = useState<ProductType[]>([])
    const dispatch = useAppDispatch()
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //dispath
        dispatch(authActions.logout())

    }

    useEffect(() => {
        Api.get('/products?limit=10&select=title,description,price,category,images')
        .then((res) => {
            console.log(res.data.products)
        })
        .catch((error) => {
            errorInterceptor(error)
        })
    }, [])

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
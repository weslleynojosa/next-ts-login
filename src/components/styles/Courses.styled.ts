import styled from "styled-components";

export const CourseList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    padding: 20px;
`

export const Course = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
    height: 200px;
    margin: 10px;
    width: 300px;

    div:first-child {
        height: 70%;
    }
`

export const CourseTitle = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    p {
        font-weight: 800;
        font-size: 12px;
        margin: 0;
        color: #ff451d;
    }
`

export const CourseImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Bookmark = styled.button`
    position: absolute;
    right: 8px;
    width: 35px;
    height: 35px;
    border: none;
    background: #FFF;
    top: 5px;
    border-radius: 100%;

    img {
        width: 100%;
    }
`
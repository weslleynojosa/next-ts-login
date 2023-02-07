import styled from 'styled-components'
import aubay from '../../assets/aubay.png'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${aubay.src});
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Login = styled.div`
    width: 600px;
    height: 500px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 13px 1px #4f4f4f;

    @media (max-width: 500px) {
        width: 70%;
        height: 60%;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;

    img {
        width: 150px;
    }

    p {
        font-size: 30px;
        font-weight: 800;
        color: #ff451d;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: stretch;
    width: 70%;

    label {
        font-size: 12px;
        margin-bottom: 5px;
        font-weight: 800;
        color: #ff451d;
    }

    input {
        margin-bottom: 10px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #C4C4C4;
        border: none;
        padding: 5px;
        background: rgba(196, 196, 196, 0.2);
        font-weight: 500;
        color: #4f4f4f;
    }

    input:focus-visible {
        outline: none;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: #ff451d;
        color: #FFF;
        text-transform: uppercase;
        font-weight: 900;
        padding: 10px;
        margin-top: 20px;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`
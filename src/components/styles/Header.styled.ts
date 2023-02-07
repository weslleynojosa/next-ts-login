import styled from "styled-components";

export const Header = styled.header`
    height: 50px;
    background: #ff451d;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 20px;
        font-weight: 800;
        color: #FFF;
        margin-left: 10px
    }

    button {
        background: none;
        border: none;
        width: 40px;

        img {
            width: 100%;
        }
    }
`
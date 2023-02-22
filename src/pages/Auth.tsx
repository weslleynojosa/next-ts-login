import { authActions } from "@/app/auth-slice";
import { useAppDispatch } from "@/app/hooks";
import aubayIcon from '../assets/aubayCopy.png'
import { Container, Form, Login, Header } from "@/components/styles/Container.styled";
import { useFormik } from "formik";
import Api, { errorInterceptor, responseInterceptor } from "@/common/axios";

interface IAuth {
    username: string,
    password: string
}

const Auth = () => {
    const dispatch = useAppDispatch();
    const initialValues: IAuth = { username: 'kminchelle', password: '0lelplR'}

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            Api.post('/auth/login', {
                username: values.username,
                password: values.password
            }).then(res => {
                responseInterceptor(res)
                dispatch(authActions.login())
            }).catch(error => errorInterceptor(error))
        }
    })
    return (
        <Container>
            <Login>
                <Header>
                    <img src={aubayIcon.src} alt=''/>
                    <p>Aubay Learning</p>
                </Header>
                <Form onSubmit={formik.handleSubmit}>
                    <label>Username or e-mail</label>
                    <input id='username' type='text' value={formik.values.username} onChange={formik.handleChange} />
                    <label>Password</label>
                    <input id='password' type='password' value={formik.values.password} onChange={formik.handleChange} />
                    <button type="submit">Login</button>
                </Form>
            </Login>
        </Container>
    )
}

export default Auth
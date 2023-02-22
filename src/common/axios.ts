import axios, { AxiosError, AxiosResponse } from "axios";

const Api = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const errorInterceptor = (error: AxiosError) => {
    if (error.response?.status === 400) {
        console.log('ERROR', error.response)
        alert('Credenciais inválidas')
    }

}

export const responseInterceptor = (response: AxiosResponse) => {
    console.log(response)
    return response
}

export default Api
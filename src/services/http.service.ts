import axios, { AxiosResponse, Method } from 'axios'
import DOMPurify from 'dompurify'
import { setError } from '../store/actions/app.actions';

export const httpService = {
    get<T, R>(endpoint: string, params?: T): Promise<R> {
        return ajax(endpoint, 'GET', params)
    },
    post<T, R>(endpoint: string, data?: T): Promise<R> {
        return ajax(endpoint, 'POST', data)
    },
    put<T, R>(endpoint: string, data?: T): Promise<R> {
        return ajax(endpoint, 'PUT', data)
    },
    delete<T, R>(endpoint: string, data?: T): Promise<R> {
        return ajax(endpoint, 'DELETE', data)
    }
}

const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosClient.interceptors.response.use(response => response,
    error => {
        const errorMessage = error.response?.data?.message || 'Network error';
        const errorId = error.response?.status || 0;

        console.log(`Error : ${errorId} with API call: `, errorMessage);

        setError({
            id: `${errorId}-${new Date().toISOString()}`,
            message: errorMessage,
            date: new Date(),
            code: errorId
        })

        return Promise.reject(error);
    }
)

async function ajax<T, R>(endpoint: string, method: Method = 'GET', data: T) {
    endpoint = DOMPurify.sanitize(endpoint)
    method = DOMPurify.sanitize(method)

    try {
        const res: AxiosResponse<R> = await axiosClient({
            url: endpoint,
            method,
            data: (method !== 'GET') ? data : null,
            params: (method === 'GET') ? data : null,
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data, err)
        throw err
    }
}



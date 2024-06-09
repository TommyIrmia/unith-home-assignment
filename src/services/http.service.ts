import axios, { AxiosResponse, Method } from 'axios'
import DOMPurify from 'dompurify'

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

// Can data by any other type?
async function ajax<T, R>(endpoint: string, method: Method = 'GET', data: T) {
    endpoint = DOMPurify.sanitize(endpoint)
    method = DOMPurify.sanitize(method)

    try {
        const res: AxiosResponse<R> = await axios({
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



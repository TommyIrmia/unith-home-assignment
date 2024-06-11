import DOMPurify from 'dompurify'
import axios, { AxiosResponse, Method } from 'axios'

import { setError } from '@/store/actions/app.actions'
import { AppError, IndexSignature } from '@/models/app.model'

export const httpService = {
    get<R, T = IndexSignature>(endpoint: string, params?: T): Promise<R> {
        return ajax(endpoint, 'GET', params)
    },
    post<R, T>(endpoint: string, data?: T): Promise<R> {
        return ajax(endpoint, 'POST', data)
    },
    put<R, T>(endpoint: string, data?: T): Promise<R> {
        return ajax(endpoint, 'PUT', data)
    },
    delete<R, T>(endpoint: string, data?: T): Promise<R> {
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
        const errorCode = error.response?.status || 0;
        const errorMessage = `${error.response.statusText || 'Network error'} :  ${error.response.data.error || error.response.data.detail}`;
        const requestUrl = error.response?.config.url || 'Unknown URL';
        console.log(`Error : ${errorCode} with API call to ${requestUrl} :`, errorMessage);

        const addedError: AppError = setError({ code: errorCode, message: errorMessage, additionalInfo: 'Path : ' + requestUrl })
        return Promise.reject(addedError);
    }
)

async function ajax<R, T>(endpoint: string, method: Method = 'GET', data: T): Promise<R> {
    endpoint = DOMPurify.sanitize(endpoint)
    method = DOMPurify.sanitize(method) as Method

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



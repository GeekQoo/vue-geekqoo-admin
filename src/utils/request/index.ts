import type { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import axios from "axios";
import { checkStatus } from "./checkStatus";

const service = axios.create({
    timeout: 30000,
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
});

// 请求拦截
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        let errorStatus: number | null = null;
        if (error && error.response) errorStatus = error.response.status;
        checkStatus(errorStatus);
        return Promise.reject(error.response);
    }
);

// 请求封装
export function httpRequest(url: string, method: Method, config?: object) {
    return service({
        url,
        method,
        ...config
    });
}

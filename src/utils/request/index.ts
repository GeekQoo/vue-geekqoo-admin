import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, Method } from "axios";
import axios from "axios";
import { checkStatus } from "./checkStatus";

let service: AxiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
});

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => config,
    (error) => Promise.reject(error)
);

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse<App.ResponseProps>) => response,
    (error) => {
        checkStatus(error?.response?.status);
        return Promise.reject(error.response);
    }
);

// 请求封装
export function httpRequest<T>(
    url: string,
    method: Method,
    config?: UnKnownObject
): Promise<AxiosResponse<App.ResponseProps<T>>> {
    return service({
        url,
        method,
        ...config
    });
}

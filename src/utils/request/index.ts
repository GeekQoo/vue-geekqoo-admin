import type { Method } from "axios";
import axios from "axios";
import { checkStatus } from "./checkStatus";

const service = axios.create({
    timeout: 30000,
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
});

// 请求拦截
service.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// 响应拦截
service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let errorStatus: number | null = null;
        if (error && error.response) errorStatus = error.response.status;
        checkStatus(errorStatus);
        return Promise.reject(error.response);
    }
);

// 请求封装
export function httpRequest(url: string, method: Method, config?: Record<string, any>) {
    return service({
        url,
        method,
        ...config
    });
}

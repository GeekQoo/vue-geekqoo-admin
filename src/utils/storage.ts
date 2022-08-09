// cookie
export function setCookie(c_name: string, value: any, expire: number) {
    let date = new Date();
    date.setSeconds(date.getSeconds() + expire);

    document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";
}

export function getCookie(c_name: string) {
    let arr,
        reg = new RegExp("(^| )" + c_name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return "";
}

export function delCookie(c_name: string) {
    setCookie(c_name, "", -1);
}

// LocalStorage
export function setLocalStorage(key: string, value: any) {
    clearLocalStorage(key);
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
    let value: any = localStorage.getItem(key);
    return JSON.parse(value);
}

// 清除 LocalStorage
export function clearLocalStorage(key: string) {
    return localStorage.removeItem(key);
}

// 设置 SessionStorage
export function setSessionStorage(key: string, value: any) {
    return sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key: string) {
    let value: any = sessionStorage.getItem(key);
    return JSON.parse(value);
}

//清除 SessionStorage
export function clearSessionStorage(key: string) {
    return sessionStorage.removeItem(key);
}

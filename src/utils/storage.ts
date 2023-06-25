// cookie
export function setCookie(name: string, value: string, expireSeconds: number): void {
    const date = new Date();
    const encodedValue = encodeURIComponent(value);
    date.setSeconds(date.getSeconds() + expireSeconds);
    document.cookie = `${name}=${encodedValue}; expires=${date.toUTCString()}; path=/`;
}

export function getCookie(name: string): string {
    return (
        document.cookie
            .split(";")
            .map((c) => c.trim())
            .find((c) => c.substring(0, name.length + 1) === `${name}=`)
            ?.substring(name.length + 1) || ""
    );
}

export function delCookie(name: string): void {
    const expires = new Date(0).toUTCString();
    document.cookie = `${name}=;expires=${expires};path=/`;
}

// LocalStorage
export function setLocalStorage<T = unknown>(key: string, value: T) {
    clearLocalStorage(key);
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
    try {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : "";
    } catch (error) {
        return "";
    }
}

// 清除 LocalStorage
export function clearLocalStorage(key: string) {
    return localStorage.removeItem(key);
}

// 设置 SessionStorage
export function setSessionStorage<T = unknown>(key: string, value: unknown) {
    return sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key: string) {
    try {
        let value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : "";
    } catch (error) {
        return "";
    }
}

//清除 SessionStorage
export function clearSessionStorage(key: string) {
    return sessionStorage.removeItem(key);
}

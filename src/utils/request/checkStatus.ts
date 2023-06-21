// 错误提示
let errorMessage = (message: string) => {
    console.log(message);
};

export function checkStatus(status: number | null, msg: string = "服务异常，请稍后再试") {
    switch (status) {
        case 401:
            errorMessage("登录状态失效，请重新登录");
            break;
        case 403:
            errorMessage("您没有权限操作");
            break;
        case 404:
            errorMessage("请求地址出错");
            break;
        case 408:
            errorMessage("请求超时");
            break;
        case 500:
            errorMessage("服务器发生错误，请检查服务器");
            break;
        case 501:
            errorMessage("服务未实现");
            break;
        case 502:
            errorMessage("网关错误");
            break;
        case 503:
            errorMessage("服务不可用");
            break;
        case 504:
            errorMessage("服务暂时无法访问，请稍后再试");
            break;
        case 505:
            errorMessage("HTTP版本不受支持");
            break;
        default:
            errorMessage(msg || "服务异常，请稍后再试");
            break;
    }
}

// 错误提示
const errorMessage = (message: string) => {
    console.log(message);
};

export function checkStatus(status: number | null, msg: string = "服务异常，请稍后再试") {
    switch (status) {
        case 401:
            errorMessage("登录状态失效，请重新登录");
            break;
        default:
            errorMessage(msg);
            break;
    }
}

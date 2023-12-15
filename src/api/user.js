import request from "@/utils/request";

export function getUserEvent(params) {
    return request({
        url:"/login/status",
        data:params
    })
}
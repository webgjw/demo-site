import request from '@/request'
// 用户基本信息
export const userInfo = (data) => {
    return request({
        url: 'personal/userinfo',
        method: 'get',
        data
    })
}
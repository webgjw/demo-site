import Mock from 'mockjs'
import config from '@/request/config'
import * as login from './modules/login'
import * as personal from './modules/personal'
const { baseURL, timeout } = config;
Mock.setup({ timeout })

const openMock = true

// 模拟所有模块
mockAll([login, personal], openMock)
function mockAll(modules, isOpen = true) {
    for (const k in modules) {
        mock(modules[k], isOpen)
    }
}

// 模拟单个模块
// mock(login, openMock)
// mock(personal, openMock)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启？
*/
function mock (mod, isOpen = true) {
    if (isOpen) {
        for (var key in mod) {
            ((res) => {
                if (res.isOpen !== false) {
                    let url = baseURL
                    if (!url.endsWith("/")) {
                        url = url + "/"
                    }
                    url = url + res.url
                    Mock.mock(new RegExp(url), res.method, (opts) => {
                        opts.data = opts.body ? JSON.parse(opts.body) : null
                        const resData = Mock.mock(typeof res.response === 'function' ? res.response(opts) : res.response)
                        console.log('%cmock拦截，请求：', 'color:blue', opts)
                        console.log('%cmock拦截，响应：', 'color:blue', resData)
                        return resData
                    })
                }
            })(mod[key]() || {})
        }
    }
}
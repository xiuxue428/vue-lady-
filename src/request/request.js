import axios from 'axios'

const server = axios.create({
    timeout:5000
})
//请求前拦截
server.interceptors.request.use(config=>{
    return config
},error => {
    return Promise.reject(error)
})

//请求返回结果后拦截
server.interceptors.response.use(result=>{
    return result
},error => {
    return Promise.reject(error)
})


export default server
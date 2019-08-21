import request from './request'
const preUrl = process.env.NODE_ENV === 'development' ? '/api/coding' : ''
export const LoginApi = (params) => request.post(`${preUrl}/tokens`,params)

// request.post('/api/coding/tokens',qs.stringify({
//     username:this.ruleForm2.username,
//     password:this.ruleForm2.pwd
// }))
//获取部门列表
export const getDepartments = (params) => request.get(`${preUrl}/departments`,{params:params})

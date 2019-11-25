import axios from 'axios'

/**
 * helloword测试
 * @param params
 */
export function hello(params) {
  axios.get('http://localhost:8082//hello', {
    params: params
  })
    .then(function(response) {
      console.log(response.data)
    })
    .catch(function(error) {
      console.log(error.data)
    })
    .then(function() {
      // always executed
    })
}

/**
 * 查询redis中蒙面识人的缓存
 * @param params
 */
export function searchMMSRSessionByRedis(params,vue) {
  console.log(params)
  axios.post('http://localhost:8082/mmsr/searchSessionByRedis',
    { 'sessionId': '4670759350771712' })
    .then(function(response) {
      console.log(response)
      vue.$data.mmsrSession = response
    })
    .catch(function(error) {
      console.log(error.data)
    })
}
axios.interceptors.response.use(function(response) {
  // Do something with response data
  const res = response.data
  return res
}, function(error) {
  // Do something with response error
  return Promise.reject(error)
})
// 添加请求拦截器
// axios.interceptors.request.use(function(config) {
//   // 在发送请求之前,格式化参数，增加token
//   const data = config.data
//   const params = new URLSearchParams()
//   for (var key in config.data) {
//     params.append(key, data[key])
//   }
//   // params.append("tokenStr", getTimes())
//   config.data = params
//   return config
// }, function(error) {
//   return Promise.reject(error)
// })

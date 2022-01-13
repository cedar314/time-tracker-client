import { default as mainAxios } from 'axios'
import { BACKEND_URL } from 'app/configs'

const axios = mainAxios.create({
  baseURL: BACKEND_URL,
})

// For common config
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export default axios

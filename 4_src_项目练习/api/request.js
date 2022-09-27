import axios from 'axios';

let serve = new axios.create({
    baseURL:"http://192.168.210.146:9527",
    timeout:3000
})

serve.interceptors.response.use(res=>{
    return res.data;
})
export default  serve;
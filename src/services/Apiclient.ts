import axios from "axios"

const ApiClient = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"4d993c4217b94ebcb970be690bc175d2"
    }
})
export default ApiClient
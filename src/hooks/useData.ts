
import  { useEffect, useState } from 'react'
import ApiClient from '../services/Apiclient'
import axios from "axios"
import {AxiosRequestConfig } from "axios"

interface FetchResponse<T>{
    count:number;
    results:T[];

}
const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[])=>{
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
            setIsLoading(true)
            ApiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
            .then((res:any)=>{
            setData(res.data.results)
            setIsLoading(false)
            }
            
            )
            .catch((err:any)=> {
                if (axios.isCancel(err)) return;
                setError(err.message)
                setIsLoading(false)

            })
                
            return ()=> controller.abort()
    
        },deps? [...deps] : [])
    return {data,error,isLoading}

}

export default useData
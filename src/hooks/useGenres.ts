
import  { useEffect, useState } from 'react'
import ApiClient from '../services/Apiclient'
import axios from "axios"
export interface Genre{
    id:number;
    name:string;
    
}
interface FetchGenresResponse{
    count:number;
    results:Genre[];

}
const useGenres = ()=>{
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
            setIsLoading(true)
            ApiClient.get<FetchGenresResponse>("/genres", {signal:controller.signal})
            .then((res:any)=>{
            setGenres(res.data.results)
            setIsLoading(false)
            }
            
            )
            .catch((err:any)=> {
                if (axios.isCancel(err)) return;
                setError(err.message)
                setIsLoading(false)

            })
                
            return ()=> controller.abort()
    
        },[])
    return {genres,error,isLoading}

}

export default useGenres
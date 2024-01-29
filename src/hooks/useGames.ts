import  { useEffect, useState } from 'react'
import ApiClient from '../services/Apiclient'
import axios from "axios"
interface Game{
    id:number;
    name:string;
    
}

interface FetchGamesResponse{
    count:number;
    results:Game[];

}
const useGames = ()=>{
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    useEffect(()=>{
        const controller = new AbortController()
            ApiClient.get<FetchGamesResponse>("/games", {signal:controller.signal})
            .then((res:any)=> setGames(res.data.results))
            .catch((err:any)=> {
                if (axios.isCancel(err)) return;
                setError(err.message)})
                
            return ()=> controller.abort()
    
        },[])
    return {games,error}


}


export default useGames
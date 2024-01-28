import  { useEffect, useState } from 'react'
import ApiClient from '../services/Apiclient'

interface Game{
    id:number;
    name:string;
    
}

interface FetchGamesResponse{
    count:number;
    results:Game[];

}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")



    useEffect(()=>{
        ApiClient.get<FetchGamesResponse>("/games")
        .then((res:any)=> setGames(res.data.results))
        .catch((err:any)=> setError(err.message))

    })
  return (
    <div>
      <ul>
        {
            games.map(g=><li key={g.id}>{g.name}</li>)
        }
      </ul>
    </div>
  )
}

export default GameGrid

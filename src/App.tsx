import { Box, Flex, Grid, GridItem ,Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import "./index.css"
import GameHeading from './components/GameHeading'

export interface GameQuery{
  genre:Genre;
  platform:Platform;
  sortOrder:string;
  searchText:string;

}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null >(null)
  const [gameQuery, setGameQuery]= useState<GameQuery>({} as GameQuery)

  return (
    
    <Grid
    // templateAreas={`"nav nav" "aside main"`}
    templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    
    
    }}
    templateColumns={{
      base:'1fr',
      lg:"200px 1fr"
    }}

    // gridTemplateRows={'50px 1fr 30px'}
    // gridTemplateColumns={'150px 1fr'}
    // h='200px'
    // gap='1'
    // color='blackAlpha.700'
    // fontWeight='bold'
    >

   
    <GridItem  area='nav'>
    <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
  </GridItem>
  <Show>

  <GridItem   area='aside' paddingX={5}>
   {/* <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={selectedGenre}/> */}
   <GenreList onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}/>

  </GridItem>
  </Show>
{/* Main */}
  <GridItem   area='main'>
    <Box paddingLeft={2}>
      <GameHeading gameQuery={gameQuery}/>
      <Flex  marginBottom={3}>
        <Box>
        <PlatformSelector selectedPlatform={gameQuery.platform}  onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        </Box>
        <Box marginLeft={4}>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </Box>
        </Flex>
    </Box>
    
   
    {/* <PlatformSelector selectedPlatform={selectedPlatform}  onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/> */}
    

   {/* <GameGrid selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre}/> */}
   <GameGrid gameQuery={gameQuery}/>

  </GridItem>
  </Grid>
   
  )
}

export default App


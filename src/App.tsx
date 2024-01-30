import { Grid, GridItem ,Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null)

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
    <Navbar/>
  </GridItem>
  <Show>

  <GridItem   area='aside' paddingX={5}>
   <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
  </GridItem>
  </Show>

  <GridItem   area='main'>
   <GameGrid selectedGenre={selectedGenre}/>
  </GridItem>
  </Grid>
   
  )
}

export default App


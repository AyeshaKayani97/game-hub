import { Grid, GridItem ,Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {

  return (
    
    <Grid
    // templateAreas={`"nav nav" "aside main"`}
    templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    
    
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

  <GridItem   area='aside'>
   <GenreList/>
  </GridItem>
  </Show>

  <GridItem   area='main'>
   <GameGrid/>
  </GridItem>
  </Grid>
   
  )
}

export default App


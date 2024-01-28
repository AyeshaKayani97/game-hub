import { Grid, GridItem ,Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'

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

  <GridItem  bg='gold' area='aside'>
    Aside
  </GridItem>
  </Show>

  <GridItem  bg='green.300' area='main'>
    Main
  </GridItem>
  </Grid>
   
  )
}

export default App


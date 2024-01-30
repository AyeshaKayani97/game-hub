import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {genres} = useGenres()
  return (
    <div>
      <List>
        {
            genres.map(gen =>
            <ListItem key={gen.id}>
                <HStack paddingY={5}>
                    <Image boxSize="32px" borderRadius={8} src={gen.image_background}/>
                    <Text fontSize="lg"> {gen.name}</Text>
                </HStack>
           
            
            </ListItem> )
        }
      </List>
    </div>
  )
}

export default GenreList

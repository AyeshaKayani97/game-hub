import { HStack, Image, List, ListItem,Spinner, Button } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"

interface Props{
onSelectGenre:(genre:Genre)=>void;
selectedGenre:Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
    const {data, isLoading, error} = useGenres()
    if(error) return null
    if(isLoading) return <Spinner/>
  return (
    <div>
      <List>
        {
            data.map(gen =>
            <ListItem key={gen.id}>
                <HStack paddingY={5}>
                    <Image boxSize="32px" borderRadius={8} src={gen.image_background}/>
                    <Button fontWeight={gen.id === selectedGenre ?.id ? "bold" : "normal" }      fontSize="lg" variant="link" onClick={()=>onSelectGenre(gen)}> {gen.name}</Button>
                    {/* <Button fontSize="lg" variant="link" onClick={()=>console.log(gen)}> {gen.name}</Button> */}

                </HStack>
           
            
            </ListItem> )
        }
      </List>
    </div>
  )
}

export default GenreList

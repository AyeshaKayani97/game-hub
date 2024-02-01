import { Card ,CardBody,HStack,Heading,Image} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";



interface Props{
    game:Game;
}
const GameCard = ({game}:Props) => {
  return (
   <Card>
    <Image src= {getCroppedImageUrl(game.background_image)}  />
    <CardBody>
      
      {/* {
        // game.parent_platforms.map(platform=> <Text key={platform.platform.id}>{platform.platform.slug}</Text>)
        game.parent_platforms.map(({platform})=> (<Text key={platform.id}>{platform.name}</Text>))

      } */}
      <HStack justifyContent="space-between" alignItems="center" marginY={3}>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
      </HStack>
      <Heading fontSize="2xl">{game.name}</Heading>

      
    </CardBody>
   </Card>
  )
}

export default GameCard

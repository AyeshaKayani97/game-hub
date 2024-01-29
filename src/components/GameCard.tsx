import { Card ,CardBody,HStack,Heading,Image} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";



interface Props{
    game:Game;
}
const GameCard = ({game}:Props) => {
  return (
   <Card borderRadius={10} overflow="hidden">
    <Image src={game.background_image}  />
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
      {/* {
        // game.parent_platforms.map(platform=> <Text key={platform.platform.id}>{platform.platform.slug}</Text>)
        game.parent_platforms.map(({platform})=> (<Text key={platform.id}>{platform.name}</Text>))

      } */}
      <HStack justifyContent="space-between" alignItems="center" marginY={2}>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
      </HStack>

      
    </CardBody>
   </Card>
  )
}

export default GameCard

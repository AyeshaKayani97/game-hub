import { Badge } from "@chakra-ui/react";

interface Props{
    score:number;
}

const CriticScore = ({score}:Props) => {
    let color = score >70 ? "green" : score<60 ? "yelow" : ""
  return (
    <>
    <Badge colorScheme={color}  fontSize="14px" borderRadius="4px" paddingX={4}>{score}</Badge>
      
    </>
  )
}

export default CriticScore

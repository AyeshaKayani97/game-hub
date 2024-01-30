import { Platform } from "../hooks/useGames"
import {HStack, Icon, Text} from "@chakra-ui/react";
import {
    FaPlaystation, 
    FaWindows,
    FaApple,
    FaLinux,
     FaXbox,
      FaAndroid} 
    from "react-icons/fa"
import {SiNintendo} from "react-icons/si"
import {MdPhoneIphone} from "react-icons/md"
import {BsGlobe} from "react-icons/bs"
import { IconType } from "react-icons";
  



interface Props {
    platforms:Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
    const iconMap: {[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xBox:FaXbox,
        android:FaAndroid,
        linux:FaLinux,
        mac:FaApple,
        nintendo:SiNintendo,
        web:BsGlobe,
        ios:MdPhoneIphone





    }
  return (
    <HStack marginY={1}>
      {
        // platforms.map((platform)=> (<Text key={platform.id}>{platform.name}</Text>))
        platforms.map((platform)=> (<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" ></Icon>))


      }
    </HStack>
  )
}

export default PlatformIconList

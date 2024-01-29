import {HStack, Image} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack p={4} justifyContent="space-between">
        <Image src={logo} boxSize="60px"/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
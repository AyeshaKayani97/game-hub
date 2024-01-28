import {HStack, Image} from "@chakra-ui/react"
import logo from "../assets/logo.jpg"
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack p={4} justifyContent="space-between">
        <Image src={logo} boxSize="60px" borderRadius="lg"/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
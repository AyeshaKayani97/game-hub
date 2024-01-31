import { Menu, MenuButton ,Button, MenuList, MenuItem} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
interface Props{

}
const SortSelector = ({}:Props) => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
    Order By: Relevence
    </MenuButton>
    <MenuList>
        <MenuItem  >Menu Item 1</MenuItem>
        <MenuItem  >Menu Item 2</MenuItem>
        <MenuItem  >Menu Item 3</MenuItem>
        <MenuItem  >Menu Item 4</MenuItem>
        <MenuItem  >Menu Item 5</MenuItem>  
    </MenuList>
   </Menu>
  )
}

export default SortSelector

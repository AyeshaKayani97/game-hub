import { Menu, MenuButton ,Button, MenuList, MenuItem} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string;

}
const sortOrders = [
    {
        value:"",
        label:"Relevence"
    },
    {
        value:"-added",
        label:"Date added"
    }, {
        value:"name",
        label:"Name"
    }, {
        value:"-released",
        label:"Release Date"
    }, {
        value:"-metacritic",
        label:"Popularity"
    }, {
        value:"-rating",
        label:"Average Rating"
    },
]

const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
    const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)
    // if(error)  return null
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
    Order By: { currentSortOrder?.label || "Relevence" }
    </MenuButton>
    <MenuList>
        {
            sortOrders.map(order =>  <MenuItem key={order.value} value={order.value} onClick={()=>onSelectSortOrder(order.value)}>{order.label}</MenuItem>)
        }

    </MenuList>
   </Menu>
  )
}

export default SortSelector

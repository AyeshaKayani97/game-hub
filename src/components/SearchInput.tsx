import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
  <Input type="text"  padding={6} borderRadius={30} placeholder='Search games.......' variant='filled' />
    
    </InputGroup>
  )
}

export default SearchInput

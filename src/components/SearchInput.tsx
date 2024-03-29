import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
interface Props{
onSearch:(searchText:string)=>void;

}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      // if(ref.current) console.log(ref.current.value)
      if(ref.current) onSearch(ref.current.value)

      }}>
      <InputGroup>
          <InputLeftElement children={<BsSearch/>}/>
        <Input type="text"  ref={ref}  borderRadius={30} placeholder='Search games.......' variant='filled' />
    
      </InputGroup>

    </form>

  )
}

export default SearchInput

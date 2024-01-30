import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {genres} = useGenres()
  return (
    <div>
      <ul>
        {
            genres.map(gen=> <li key={gen.id}>{gen.name}</li> )
        }
      </ul>
    </div>
  )
}

export default GenreList

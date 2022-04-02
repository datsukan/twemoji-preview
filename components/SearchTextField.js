import { SearchIcon } from "@heroicons/react/solid"
import { useSelector, useDispatch } from "react-redux"
import { set as setWords } from "@store/search"

export const SearchTextField = () => {
  const words = useSelector(state => state.words)
  const dispatch = useDispatch()
  const changeWords = e => {
    dispatch(setWords(e.target.value))
  }

  return (
    <div className="h-12 mx-4 w-full md:w-10/12 lg:w-2/3 xl:w-1/3 rounded-3xl px-5 border focus-within:shadow-lg hover:shadow-lg bg-white flex items-center gap-2 group">
      <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
      <input
        type="text"
        className="flex-1 outline-none text-primary"
        value={words}
        onChange={changeWords}
      />
    </div>
  )
}

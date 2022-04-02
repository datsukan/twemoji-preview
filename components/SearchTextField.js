import { SearchIcon, XIcon } from "@heroicons/react/solid"
import { useSelector, useDispatch } from "react-redux"
import { setWords } from "@store/search"

export const SearchTextField = ({ className = "" }) => {
  const words = useSelector(state => state.words)
  const dispatch = useDispatch()
  const changeWords = e => {
    dispatch(setWords(e.target.value))
  }
  const resetWords = () => {
    dispatch(setWords(""))
  }

  return (
    <div
      className={`rounded-3xl px-5 border focus-within:shadow-lg hover:shadow-lg bg-white flex items-center gap-2 group ${className}`}
    >
      <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
      <input
        type="text"
        className="flex-1 outline-none text-primary"
        value={words}
        onChange={changeWords}
      />
      {words.length > 0 && (
        <button onClick={() => resetWords()}>
          <XIcon className="h-5 w-5 text-gray-400 hover:text-gray-900" />
        </button>
      )}
    </div>
  )
}

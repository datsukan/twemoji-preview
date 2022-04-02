import { XCircleIcon } from "@heroicons/react/solid"

export const WordTags = ({ className = "", words, resetWords }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, i) => (
        <span
          key={i}
          className="px-3 border rounded-full text-primary bg-gray-200"
        >
          {word}
        </span>
      ))}
      {words.length > 0 && (
        <button onClick={() => resetWords()}>
          <XCircleIcon className="h-6 w-6 my-auto text-primary hover:text-gray-500" />
        </button>
      )}
    </div>
  )
}

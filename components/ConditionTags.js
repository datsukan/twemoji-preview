import { XCircleIcon } from "@heroicons/react/solid"

export const ConditionTags = ({
  className = "",
  words,
  category,
  subCategory,
  reset,
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="px-3 border rounded-full text-primary bg-gray-200"
        >
          {word}
        </span>
      ))}
      {category && (
        <span className="px-3 border rounded-full text-primary bg-gray-200">
          {category}
        </span>
      )}
      {subCategory && (
        <span className="px-3 border rounded-full text-primary bg-gray-200">
          {subCategory}
        </span>
      )}
      {(words.length > 0 || category || subCategory) && (
        <button onClick={() => reset()}>
          <XCircleIcon className="h-6 w-6 my-auto text-primary hover:text-gray-500" />
        </button>
      )}
    </div>
  )
}

import { ChevronDoubleDownIcon } from "@heroicons/react/solid"

export const AddShowItemButton = ({ onClick }) => {
  return (
    <button
      className="px-5 py-2 border bg-white rounded-md hover:border-black group flex items-center gap-2"
      onClick={() => onClick()}
    >
      <ChevronDoubleDownIcon className="w-4 h-4 text-gray-500 group-hover:text-black" />
      <span className="text-gray-500 group-hover:text-black text-sm font-bold">
        See More
      </span>
    </button>
  )
}

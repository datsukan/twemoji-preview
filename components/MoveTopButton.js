import { ChevronUpIcon } from "@heroicons/react/solid"

export const MoveTopButton = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-white hover:border hover:border-gray-900 rounded-full flex items-center justify-center group"
      onClick={() => scrollToTop()}
    >
      <ChevronUpIcon className="w-8 h-8 text-white group-hover:text-gray-900" />
    </button>
  )
}

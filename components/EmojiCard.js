import { useState } from "react"
import Image from "next/image"
import { EmojiModal } from "@components/EmojiModal"

export const EmojiCard = ({ emoji }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="p-2 w-24 h-24 aspect-square bg-white rounded-lg shadow hover:shadow-lg flex flex-col items-center justify-center gap-3 hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image src={emoji.url} width={40} height={40} alt="emoji" />
        <span className="text-gray-500 text-xs max-w-full line-clamp-1">
          {emoji.codes ?? emoji.key ?? emoji.name ?? "-"}
        </span>
      </div>
      <EmojiModal isOpen={isOpen} setIsOpen={setIsOpen} emoji={emoji} />
    </>
  )
}

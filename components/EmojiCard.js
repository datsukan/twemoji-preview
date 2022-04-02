import Image from "next/image"
import toast from "react-hot-toast"

export const EmojiCard = ({ emoji }) => {
  const notify = copyText => toast.success(`Emoji copied : ${copyText}`)
  const copyToClipboard = copyText => {
    navigator.clipboard.writeText(copyText)
    notify(copyText)
  }

  return (
    <div
      className="p-2 w-24 h-24 aspect-square bg-white rounded-lg shadow hover:shadow-lg flex flex-col items-center justify-center gap-3 hover:cursor-pointer"
      onClick={() => copyToClipboard(emoji.char)}
    >
      <Image src={emoji.url} width={40} height={40} alt="emoji" />
      <span className="text-gray-500 text-sm max-w-full line-clamp-1">
        {emoji.key ?? emoji.name ?? "-"}
      </span>
    </div>
  )
}

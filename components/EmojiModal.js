import toast from "react-hot-toast"
import { Modal } from "@components/Modal"

const omit = text => len => ellipsis =>
  [...ellipsis].length < len && [...text].length >= len
    ? text.slice(0, len - [...ellipsis].length) + ellipsis
    : text

const InfoItem = ({ label, text }) => {
  const notify = copyText => {
    const notifyText = omit(copyText)(30)("...")
    toast.success(`copied : ${notifyText}`)
  }
  const copyToClipboard = copyText => {
    navigator.clipboard.writeText(copyText)
    notify(copyText)
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-gray-500">{label}</label>
      <button
        className="mt-1 rounded-md bg-gray-800 hover:bg-gray-600 py-1 px-3 text-left"
        onClick={() => copyToClipboard(text)}
      >
        <span className="line-clamp-1 text-white">{text}</span>
      </button>
    </div>
  )
}

export const EmojiModal = ({ isOpen, setIsOpen, emoji }) => {
  const infoItems = generateInfoItems(emoji)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="rounded-xl bg-white p-4 shadow-md max-w-full max-h-full overflow-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-gray-200 p-6 mx-4 max-w-full">
            <img
              src={emoji.url}
              alt="Twemoji icon image"
              className="aspect-square w-full"
            />
          </div>
          <div className="flex w-[25rem] flex-col gap-2 max-w-full">
            {infoItems.map(infoItem => (
              <InfoItem key={infoItem.label} {...infoItem} />
            ))}
          </div>
        </div>
        <div className="mt-5 text-right">
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 border rounded-md hover:border-gray-900 group"
          >
            <span className="font-bold text-gray-500 group-hover:text-gray-900">
              Close
            </span>
          </button>
        </div>
      </div>
    </Modal>
  )
}

function generateInfoItems(emoji) {
  let items = []

  if (emoji.char) {
    items.push({
      label: "Emoji",
      text: emoji.char ?? "",
    })
  }
  if (emoji.name) {
    items.push({
      label: "Name",
      text: emoji.name ?? "",
    })
  }
  if (emoji.group) {
    items.push({
      label: "Category",
      text: emoji.group ?? "",
    })
  }
  if (emoji.subgroup) {
    items.push({
      label: "SubGroup",
      text: emoji.subgroup ?? "",
    })
  }
  if (emoji.key) {
    items.push({
      label: "Key",
      text: emoji.key ?? "",
    })
  }
  if (emoji.codes) {
    items.push({
      label: "Codes",
      text: emoji.codes ?? "",
    })
  }
  if (emoji.url) {
    items.push({
      label: "URL",
      text: emoji.url ?? "",
    })
  }

  return items
}

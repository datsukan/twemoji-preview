import { useEffect, useState } from "react"
import emojis from "@data/twemoji.json"
import { useSelector } from "react-redux"

import { DefaultLayout } from "@layouts/Default"
import { EmojiCardList } from "@components/EmojiCardList"
import { AddShowItemButton } from "@components/AddShowItemButton"

export default function Home() {
  const defaultLimit = 100
  const [limit, setLimit] = useState(defaultLimit)
  const words = useSelector(state => state.words)
  const matchEmojis = () => {
    return emojis.filter(emoji => {
      if (emoji.char.includes(words)) {
        return true
      }
      if ("key" in emoji && emoji.key.includes(words)) {
        return true
      }
      if ("name" in emoji && emoji.name.includes(words)) {
        return true
      }
      if ("description" in emoji && emoji.description.includes(words)) {
        return true
      }

      return false
    })
  }

  useEffect(() => {
    setLimit(defaultLimit)
  }, [words])

  return (
    <DefaultLayout>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8">
        <EmojiCardList emojis={matchEmojis().slice(0, limit)} />
      </div>
      {matchEmojis().length > limit && (
        <div className="h-20 flex items-end justify-center">
          <AddShowItemButton onClick={() => setLimit(limit + defaultLimit)} />
        </div>
      )}
    </DefaultLayout>
  )
}

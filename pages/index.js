import { useEffect, useState, useMemo } from "react"
import emojis from "@data/twemoji.json"
import { useSelector, useDispatch } from "react-redux"
import { set as setWords } from "@store/search"

import { DefaultLayout } from "@layouts/Default"
import { EmojiCardList } from "@components/EmojiCardList"
import { AddShowItemButton } from "@components/AddShowItemButton"
import { WordTags } from "@components/WordTags"

export default function Home() {
  const defaultLimit = 100
  const [limit, setLimit] = useState(defaultLimit)
  const wordsStr = useSelector(state => state.words)
  const words = useMemo(
    () =>
      typeof wordsStr === "string" && wordsStr.length > 0
        ? wordsStr
            .replaceAll("　", " ")
            .split(" ")
            .filter(v => v)
        : [],
    [wordsStr]
  )

  const matchEmojis = () => {
    return emojis.filter(emoji => {
      if (words.length === 0) return true

      const results = []
      words.map((word, i) => {
        if (emoji.char.includes(word)) {
          results[i] = true
          return
        }
        if ("key" in emoji && emoji.key.includes(word)) {
          results[i] = true
          return
        }
        if ("name" in emoji && emoji.name.includes(word)) {
          results[i] = true
          return
        }
        if ("description" in emoji && emoji.description.includes(word)) {
          results[i] = true
          return
        }

        results[i] = false
      })

      return results.every(result => result)
    })
  }

  const dispatch = useDispatch()
  const resetWords = () => {
    dispatch(setWords(""))
  }

  useEffect(() => {
    setLimit(defaultLimit)
  }, [words])

  return (
    <DefaultLayout>
      <div className="pb-4 flex items-center justify-between">
        <WordTags words={words} resetWords={resetWords} className="w-4/5" />
        <p>{`${matchEmojis().length} hits`}</p>
      </div>
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

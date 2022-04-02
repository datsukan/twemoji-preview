import { EmojiCard } from "@components/EmojiCard"

export const EmojiCardList = ({ emojis }) => {
  return (
    <>
      {emojis.map(emoji => {
        return <EmojiCard key={emoji.char} emoji={emoji} />
      })}
    </>
  )
}

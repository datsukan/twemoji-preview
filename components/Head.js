import NextHead from "next/head"

export const Head = () => {
  const title = "Twemoji Preview"
  const description = "Twemoji search and preview site."
  const image = "https://twemoji.datsukan.me/link-card.png"
  const type = "website"

  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta property="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og-title" />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta property="og:image" content={image} key="og-image" />
      <meta property="og:type" content={type} key="og-type" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta property="twitter:title" content={title} key="twitter-title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter-description"
      />
      <meta
        property="twitter:site"
        content="@datsukan_tech"
        key="twitter-site"
      />
      <meta property="twitter:image" content={image} key="twitter-image" />
    </NextHead>
  )
}

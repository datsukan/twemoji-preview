import Link from "next/link"

export const SiteLogo = () => {
  return (
    <Link href="/">
      <a>
        <div className="h-full flex items-center gap-3">
          <img src="/icon.svg" alt="site icon" className="h-6 w-6" />
          <h1 className="text-2xl font-bold text-white">Twemoji Preview</h1>
        </div>
      </a>
    </Link>
  )
}

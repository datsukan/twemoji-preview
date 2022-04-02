import { SearchTextField } from "@components/SearchTextField"

export const Header = () => {
  return (
    <div className="border-b border-gray-200 px-3">
      <div className="h-16 max-w-screen-xl mx-auto flex items-center gap-3">
        <img src="/icon.svg" alt="site icon" className="h-6 w-6 mb-1" />
        <h1 className="mb-2 text-2xl font-bold text-primary">
          Twemoji Preview
        </h1>
      </div>

      {/* 検索 */}
      <div className="h-40 flex justify-center items-center">
        <SearchTextField />
      </div>
    </div>
  )
}

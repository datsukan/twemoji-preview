import { SearchTextField } from "@components/SearchTextField"

export const Header = () => {
  return (
    <div className="border-b border-gray-200 px-3">
      <div className="h-16 max-w-screen-xl mx-auto flex items-center">
        <h1 className="pb-2 text-2xl font-bold text-primary">
          🐣 Twemoji Preview
        </h1>
      </div>

      {/* 検索 */}
      <div className="h-40 flex justify-center items-center">
        <SearchTextField />
      </div>
    </div>
  )
}

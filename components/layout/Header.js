import { SiteLogo } from "@components/SiteLogo"
import { SearchTextField } from "@components/SearchTextField"
import { useState } from "react"
import { useScrollPosition } from "@hooks/useScrollPosition"

export const Header = () => {
  const [visible, setVisible] = useState(false)
  const changeVisible = scrollTop => {
    setVisible(scrollTop > 100)
  }
  useScrollPosition(changeVisible)

  return (
    <>
      <div className="px-3 bg-gray-900 sticky top-0 z-10">
        <div className="h-16 max-w-screen-xl mx-auto flex items-center justify-between">
          <SiteLogo />
          {visible && (
            <SearchTextField className="h-9 w-1/2 lg:w-1/3 hidden sm:flex" />
          )}
        </div>
      </div>
      <div className="border-b border-gray-200 px-3">
        {/* 検索 */}
        <div className="h-40 flex justify-center items-center">
          <SearchTextField className="h-12 mx-4 w-full md:w-10/12 lg:w-2/3 xl:w-1/3" />
        </div>
      </div>
    </>
  )
}

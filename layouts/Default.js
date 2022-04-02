import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar"
import { Footer } from "@components/layout/Footer"
import { MoveTopButton } from "@components/MoveTopButton"
import { useState } from "react"
import { useScrollPosition } from "@hooks/useScrollPosition"

export const DefaultLayout = ({ children, className }) => {
  const [visible, setVisible] = useState(false)
  const changeVisible = scrollTop => {
    setVisible(scrollTop > 100)
  }
  useScrollPosition(changeVisible)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-gray-100 py-20 px-3">
        <div className="h-full max-w-screen-xl mx-auto flex gap-8">
          <Sidebar />
          <div className={`flex-1 ${className}`}>{children}</div>
        </div>
      </div>

      <Footer />

      {visible && <MoveTopButton />}
    </div>
  )
}

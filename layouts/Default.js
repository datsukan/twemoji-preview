import { Header } from "@components/layout/Header"
import { Sidebar } from "@components/layout/Sidebar"
import { Footer } from "@components/layout/Footer"

export const DefaultLayout = ({ children, className }) => {
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
    </div>
  )
}

import { CategoryList } from "@components/CategoryList"

export const Sidebar = () => {
  return (
    <div className="w-60 h-fit p-5 rounded-lg bg-white shadow hidden md:block">
      <CategoryList />
    </div>
  )
}

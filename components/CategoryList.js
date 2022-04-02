import { useState } from "react"
import emojis from "@data/twemoji.json"
import { useDispatch } from "react-redux"
import { setCategory, setSubCategory } from "@store/search"

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid"

const Category = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonClassName = "w-6 h-6 text-primary"

  const dispatch = useDispatch()
  const changeCategory = category => {
    dispatch(setCategory(category))
    dispatch(setSubCategory(null))
  }
  const changeSubCategory = (category, subCategory) => {
    dispatch(setCategory(category))
    dispatch(setSubCategory(subCategory))
  }

  return (
    <li>
      <div className="flex items-center gap-1">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronDownIcon className={buttonClassName} />
          ) : (
            <ChevronRightIcon className={buttonClassName} />
          )}
        </button>
        <button
          onClick={() => changeCategory(category.name)}
          className="hover:underline hover:text-gray-600"
        >
          {category.name}
        </button>
      </div>
      {category.subCategories.length > 0 && (
        <ul className="pl-5" hidden={!isOpen}>
          {category.subCategories.map(subCategory => (
            <li key={subCategory} className="mt-1">
              <button
                onClick={() => changeSubCategory(category.name, subCategory)}
                className="hover:underline hover:text-gray-600"
              >
                {subCategory}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export const CategoryList = () => {
  const categoryMap = {}
  emojis.map(emoji => {
    if ("group" in emoji) {
      if (!(emoji.group in categoryMap)) categoryMap[emoji.group] = []
      if ("subgroup" in emoji) categoryMap[emoji.group].push(emoji.subgroup)
    }
  })
  const categories = []
  for (const [name, beforeSubCategories] of Object.entries(categoryMap)) {
    const subCategories = [...new Set(beforeSubCategories)]
    const category = {
      name: name,
      subCategories: subCategories,
    }
    categories.push(category)
  }

  return (
    <ul className="grid grid-cols-1 gap-2">
      {categories.map(category => (
        <Category key={category.name} category={category} />
      ))}
    </ul>
  )
}

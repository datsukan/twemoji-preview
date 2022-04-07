import { useRef } from "react"

export const Modal = ({ isOpen, setIsOpen, children }) => {
  const ref = useRef()
  const onClick = e => {
    if (ref.current === e.target) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return

  return (
    <div
      className="fixed top-0 left-0 h-screen w-full z-10 overflow-hidden bg-gray-700/40 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClick}
      ref={ref}
    >
      <div className="cursor-auto max-w-full max-h-full">{children}</div>
    </div>
  )
}

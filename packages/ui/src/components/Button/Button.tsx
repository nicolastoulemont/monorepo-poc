import type { ComponentProps } from "react"

export type ButtonProps = ComponentProps<"button">
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 transition-colors"
      {...props}
    >
      {children}
    </button>
  )
}

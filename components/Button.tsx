import { ButtonHTMLAttributes } from 'react'

export const Button = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="flex h-8 w-8 items-center justify-center border border-white bg-gray-900 p-0 text-center">
    {children}
  </button>
)

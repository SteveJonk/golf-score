import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = { selected?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, selected, ...rest }: ButtonProps) => (
  <button
    className={clsx(
      selected && 'bg-white text-black',
      'flex h-8 w-8 items-center justify-center border border-white bg-gray-900 p-0 text-center'
    )}
    {...rest}
  >
    {children}
  </button>
)

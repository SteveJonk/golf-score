import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = { selected?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, selected, className, ...rest }: ButtonProps) => (
  <button
    className={clsx(
      selected && 'bg-gray-900 text-white dark:bg-white dark:text-black',
      className,
      'flex h-8 w-8 items-center justify-center border border-gray-900 p-0 text-center dark:border-white dark:bg-gray-900'
    )}
    {...rest}
  >
    {children}
  </button>
)

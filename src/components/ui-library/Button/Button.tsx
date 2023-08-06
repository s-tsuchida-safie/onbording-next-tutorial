import { ReactNode } from 'react'
import Styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={Styles['button-view']} onClick={onClick}>
      {children}
    </button>
  )
}

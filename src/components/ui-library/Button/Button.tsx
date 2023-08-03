import { ReactNode } from 'react'
import Styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  console.log('button')
  console.log(Styles['button-view'])
  return (
    <button className={Styles['button-view']} onClick={onClick}>
      {children}
    </button>
  )
}

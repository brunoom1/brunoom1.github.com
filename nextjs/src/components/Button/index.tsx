import { ButtonHTMLAttributes } from "react"
import { Roboto } from "next/font/google";

import styles from './style.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})

export const Button = ({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button { ...props } className={ [styles.button, roboto.className, className].join(' ') } />
}
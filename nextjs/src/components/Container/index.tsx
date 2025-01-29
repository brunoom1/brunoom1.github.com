import { PropsWithChildren } from "react"

import styles from "./styles.module.scss";

export const Container = ({children, variant, className}: PropsWithChildren<{
  variant?: 'full',
  className?: string
}>) => {
  return <div className={[
      styles.container, 
      styles[variant || ''],
      className
    ].join(' ')
  }>
    { children }
  </div>
}

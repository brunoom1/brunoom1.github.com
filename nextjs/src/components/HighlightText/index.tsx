import { Roboto_Condensed } from "next/font/google";
import styles from "./styles.module.scss";

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '900'
})

export const HighlightText = () => {
  return <div className={[
    styles.container,
    robotoCondensed.className
  ].join(' ')}>
    O impulso do seu negócio é tech. <br />
    E tech está no nosso coração.
  </div>
}
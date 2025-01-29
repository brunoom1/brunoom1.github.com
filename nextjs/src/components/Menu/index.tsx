import { Roboto_Condensed } from "next/font/google";

import styles from "./styles.module.scss";

const robotoCondensed = Roboto_Condensed({
  weight: '600',
  subsets: ['latin']
});

export const Menu = () => {
  return <div className={ styles.container }>
    <a href="" className={ robotoCondensed.className }> Currículo </a>
    <a href="" className={ robotoCondensed.className }> Contato </a>
  </div>
}
import { Roboto } from "next/font/google";
import styles from './style.module.scss';

const bigFont = Roboto({
  weight: '700',
  subsets: ['latin']
});

const smallFont = Roboto({
  weight: '300',
  subsets: ['latin']
});

export const PageConstructor = () => {
  return <>
    <div className={ styles.container }>
      <div className={ bigFont.className }>Página em Construção</div>
      <div className={ smallFont.className }> by: gabrielmendonca.com.br </div>
    </div>
  </>
}
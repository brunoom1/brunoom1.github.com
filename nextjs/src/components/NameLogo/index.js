import styles from './styles.module.scss';
import { Roboto } from 'next/font/google';

const robotBold = Roboto({
  weight: '700',
  subsets: ['latin']
});

export const NameLogo = () => {
  return <div>
    <div className={styles.name + ' ' + robotBold.className}>
      Gabriel Mendonça
    </div>
    <div className={styles.description}>
      software engine - fullstack web develop
    </div>
  </div>
}
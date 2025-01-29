import styles from './styles.module.scss';
import { Roboto, Roboto_Flex } from 'next/font/google';


const robotBold = Roboto({
  weight: '700',
  subsets: ['latin']
});

const robotoFlex = Roboto_Flex({
  weight: '100',
  subsets: ['latin']
});

export const NameLogo = () => {
  return <div>
    <div className={styles.name + ' ' + robotBold.className}>
      Gabriel Mendonça
    </div>
    <div className={styles.description + ' ' + robotoFlex.className }>
      software engine - fullstack web develop
    </div>
  </div>
}
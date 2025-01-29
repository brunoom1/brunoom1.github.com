import { Roboto_Condensed } from 'next/font/google';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

const robotoBlack = Roboto_Condensed({
  weight: '900',
  subsets: ['latin']
})

export const Title = ({ children }: PropsWithChildren) => {
  return <div className={ [styles.container, robotoBlack.className].join(' ') }>
    { children }    
  </div>
}
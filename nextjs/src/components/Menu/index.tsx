'use client'

import { Roboto_Condensed } from "next/font/google";

import styles from "./styles.module.scss";

const robotoCondensed = Roboto_Condensed({
  weight: '600',
  subsets: ['latin']
});

export const Menu = () => {

  const pname = location.pathname + location.hash;

  console.log('path:', pname)

  const locais = [
    ['/', 'Home'],
    ['/curriculo', 'Currículo'],
  ];

  const menuItem = locais.reverse().find(([name, label]) => {
    console.log("name: ", name);
    return pname.indexOf(name) !== -1}) || [null];


  return <div className={ styles.container }>
    { locais.map(local => 
      <a href={local[0]} 
        key={ local[0] }
        className={ 
          `robotoCondensed.className ${
            local[0] === menuItem[0]? styles.active : ''
          }`
        }> 
          { local[1] } 
      </a>
    )}
  </div>
}
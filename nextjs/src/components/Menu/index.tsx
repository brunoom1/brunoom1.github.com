'use client'

import styles from "./styles.module.scss";

export const Menu = () => {

  const isLocation = typeof(location) !== 'undefined';
  if (!isLocation) {
    return;
  }
  const pname = location.pathname + location.hash;

  const locais = [
    ['/', 'Home', 'home']
  ];

  const menuItem = locais.reverse().find(([name]) => {
    return pname.indexOf(name) !== -1
  }) || [null];

  return <div className={ styles.container }>
    { locais.map(([path, title, id]) => 
      <a href={ path } 
        key={ id }
        className={ 
          `robotoCondensed.className ${
            path === menuItem[0]? styles.active : ''
          }`
        }> 
          { title } 
      </a>
    )}
  </div>
}
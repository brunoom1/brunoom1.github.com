import React from 'react';

import styles from "./header-branding.module.scss";

export const HeaderBranding = () => {
  return <div className={["navbar-brand", styles.branding].join(' ')}>
    <a href="#">
      <strong>Gabriel Mendonça</strong>
      {' '}
      <span>
        (fullstack developer)
      </span>
    </a>
  </div>
}

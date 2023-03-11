import React, { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./card.module.scss";

interface CardProps extends PropsWithChildren{
  title: string;
  icon: ReactNode;
}

export const Card: FC<CardProps> = ({children, title, icon}) => {
  return <>
    <div className="container">

      <div className={ styles.card }>

        <div className="card-body">

          <div className={ styles.container }>
            <div className={styles.iconBar}>
              <div className={styles.blockIcon}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                { title }
              </div>
              <div className={styles.contentBody}>
                {children}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>

  </>
}
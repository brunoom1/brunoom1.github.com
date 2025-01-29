import { Container } from "../Container"
import { Menu } from "../Menu"
import { NameLogo } from "../NameLogo"

import styles from './styles.module.scss';

export const Header = () => {

  return <div className={styles.containerSuperior}>
    <Container className={ styles.container}>
      <NameLogo />
      <Menu />
    </Container>
  </div>
}
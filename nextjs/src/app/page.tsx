import { Container } from "@/components/Container";
import { HighlightText } from "@/components/HighlightText";
import { PageConstructor } from "@/components/PageConstructor";

import styles from "./style.module.scss";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_DEVELOPMENT) 
    return <PageConstructor />;

  return <div className={ styles.container }>
    <Container className={styles.marginTop}>
      <HighlightText />
    </Container>

    <div className={ styles.firstButton }>
      <div>
        Pronto para dar o próximo passo? Entre em contato!
      </div>
      <Button> Fale agora </Button>
    </div>

    <section className={ styles.techSection }>
      <Title> Tecnologias ao seu dispor </Title>
    </section>

  </div>
}

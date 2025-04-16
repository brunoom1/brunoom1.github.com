import { Container } from "@/components/Container";
import { HighlightText } from "@/components/HighlightText";

import styles from "./style.module.scss";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Home() {
  return <>
    <div className={ styles.container }>
      
      <Container className={styles.marginTop}>
        <HighlightText />
      </Container>

      <div className={ styles.firstButton }>
        <div>
          APPLICATIVOS, SOFTWARES, WEB SITES
        </div>
        <Button> Entre em contato </Button>
      </div>

      <section className={ styles.techSection }>
        {/* <div className={ styles.techContent }>
          <Container>
            <ul>
                <li> 
                  <span>Frontend</span> 
                  <ul>
                    <li> <a href="#frontend">Web apps </a></li>
                    <li><a href="#mobileapps"> Mobile apps </a></li>
                  </ul>
                </li>
                <li>
                  <span>Backend</span>
                  <ul>
                    <li><a href=""> Banco de dados </a></li>
                    <li><a href=""> PHP, Python, Node </a></li>
                  </ul>
                </li>
                <li>
                  <span>Infraestrutura</span>
                  <ul>
                    <li><a href=""> Server configuration </a></li>
                    <li><a href=""> CI/CD </a></li>
                  </ul>
                </li>
            </ul>
            <div className={ styles.content }>

              <section id="frontend">
                <hgroup>
                  <h2> Frontend </h2>
                  <h1> Web apps </h1>
                </hgroup>

                <div>
                  <p>
                    Bancos de dados são a espinha dorsal dos aplicativos modernos. Eles permitem o armazenamento, a gestão e a recuperação eficiente de informações essenciais, garantindo que dados cruciais, como usuários, transações e configurações, sejam acessados de forma rápida e segura. 
                  </p>
                  <p>
                    Em um mundo cada vez mais dependente de dados, ter uma estrutura robusta e escalável é fundamental para o sucesso de qualquer aplicativo. Sem um banco de dados eficiente, a experiência do usuário e o desempenho do app seriam comprometidos, tornando a tecnologia essencial para suportar a inovação e o crescimento de negócios.
                  </p>

                  <a href="">
                    Saber mais sobre esse assunto
                  </a>
                </div>                
              </section>

              <section id="mobileapps">
                <hgroup>
                  <h2> Frontend </h2>
                  <h1> Mobile Apps </h1>
                </hgroup>

                <div>
                  <p>
                    Bancos de dados são a espinha dorsal dos aplicativos modernos. Eles permitem o armazenamento, a gestão e a recuperação eficiente de informações essenciais, garantindo que dados cruciais, como usuários, transações e configurações, sejam acessados de forma rápida e segura. 
                  </p>
                  <p>
                    Em um mundo cada vez mais dependente de dados, ter uma estrutura robusta e escalável é fundamental para o sucesso de qualquer aplicativo. Sem um banco de dados eficiente, a experiência do usuário e o desempenho do app seriam comprometidos, tornando a tecnologia essencial para suportar a inovação e o crescimento de negócios.
                  </p>

                  <a href="">
                    Saber mais sobre esse assunto
                  </a>
                </div>                
              </section>

            </div>
          </Container>
        </div> */}
      </section>

      <section>
        <Container className={ styles.contact }>
          <Title> Contato </Title>

          <div className={ styles.socialIcons}>
            <ul>
              <li>
                <span>GITHUB</span>
                <img src="/images/github.png" alt="Github" />
              </li>
              <li>
                <span>E-MAIL</span>
                <img src="/images/email.png" alt="E-mail" />
              </li>
              <li>
                <span>LINKEDIN</span>
                <img src="/images/linkedin.png" alt="Linkedin" />
              </li>
              <li>
                <span>WHATSAPP</span>
                <img src="/images/phone.png" alt="Whatsapp" />
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section>
        <div className={ styles.contactForm }>
          <form>
            <div>
              <label htmlFor="name">Seu nome: </label>
              <input type="text" name="name" placeholder="Seu nome: " required />
            </div>

            <div>
              <label htmlFor="name">Seu e-mail: </label>
              <input type="text" name="email" placeholder="Seu e-mail" required />
            </div>

            <div>
              <label htmlFor="name">Fale conosco: </label>
              <textarea name="name" placeholder="Deixe uma mensagem" required></textarea>
            </div>

            <div>
              <Button> Fale agora </Button>
            </div>

          </form>
        </div>
      </section>

    </div>

    <div className={ styles.footer }>
      <Container>
          <a href="">by: gabrielmendonca.com.br | 2025</a>
      </Container>
    </div>

  </>
}

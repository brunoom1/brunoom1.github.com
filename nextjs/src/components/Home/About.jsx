import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import LaptopImg from "./../../app/assets/home-main.png";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Agora, vamos <span className="yellow"> falar </span> sobre mim!
                </h1>
                <p className="home-about-body">
                 Olá, meu nome é Gabriel Mendonça <span className="yellow"> Sou natural de Nova Friburgo - RJ, mas estou hoje em </span>
                 <span className="yellow"> Taboão da Serra - SP.</span>
                <br />
                <br />
                  Iniciei profissionalmente na área de tecnologia por volta de 2006 ganhando meu primeiro salário.
                <br />
                <br />
                  Meu aprendizado não foi nada tradicional pois sempre fui de estudar com conteúdods dispníveis na web e em livros técnicos, 
                  fiz poucos cursos, mas lí muitos tutoriais, muitas apostilas, vários livros, muitos podcasts e um pouco de vídeos. 
                <br />
                  Hoje trabalho como 
                  <b className="yellow"> Desenvolvedor Full-Stack </b>, e apesar de estar atuando mais com node e reactjs, tenho conhecimento em diversas áreas e linguagens.
                  <br />
                  <br />Sou proficiente em:  
                    <b className="yellow"> Javascript + Typescript,  </b>
                    e também em outras linguagens como: PHP, C, Java, Python,
                  <b className="yellow"> SQL e outras.</b>
                  <br />
                  <br />
                  Tenho muito interesse em novas tecnologias e desenvolver
                  <i>
                    <b className="yellow"> novas funcionalidades e produtos incríveis, </b>
                    inclusive, recentemente tenho me envolvido na área de 
                    <b className="yellow"> Inteligência Artificial.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <img src={LaptopImg.src} className="img-fluid" alt="avatar" />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>Estou ON</h1>
                <p>
                Por favor, vamos nos <span className="yellow">conectar.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/brunoom1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/brunoom1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/gabrielmendonca/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/gabrielmendonca/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
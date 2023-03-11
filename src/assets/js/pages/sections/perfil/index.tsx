import React from "react";
import { CardPerfil } from "../../../components/cards/card-perfil";
import Photo from "./../../../../images/foto-3x4.jpg";

import styles from "./style.module.scss";

export const Perfil = () =>         
<CardPerfil> 
  <div className={ styles.container }>
    <div>
      <img src={ Photo } />
    </div>
    <div>
      Desenvolvedor Fullstack Sênior com mais de 15 anos de experiência em projetos web. Minha base de conhecimento autodidata se deu por meio de livros e as mídias disponíveis na web, além de cursos livres realizados durante toda a minha carreira. Todo meu histórico profissional e estudo me permite atuar com diversas linguagens e tecnologias. Além disso, tenho experiência no desenvolvimento da aplicação desde a conceitualização, levantamento de requisitos e projeto até a programação do backend e frontend. Usando tecnologia de ponta. Me mantenho sempre atualizado com as nova tecnologias e possibilidades. Mantenho meu código dentro dos conceitos clean code e princípios SOLID. Realizo o planejamento dos meus projetos usando conceitos de desenvolvimento ágil. 
    </div>
    <div>

    </div>
  </div>
</CardPerfil>
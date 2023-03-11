import React from "react";
import { CardPerfil } from "../components/cards/card-perfil";
import { HomeTemplate } from "../templates/home-template"
import { Header } from "./../components/header";

import { Perfil } from "./sections/perfil";

export const Home = () => {

  return <HomeTemplate
    header={
      <Header />
    }
    body={
      <>

        <Perfil />
        
        <CardPerfil>

        </CardPerfil>
      </>
    }
    footer={
      <div className={"container"}>
        <div> footer bar </div>
      </div>
    }
  />
}
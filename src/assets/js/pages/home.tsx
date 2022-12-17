import React from "react";
import { HomeTemplate } from "../templates/home-template"
import { Header } from "./../components/header";

export const Home = () => {

  return <HomeTemplate
    header={
      <Header />
    }
    body={
      <h1> Hello world </h1>
    }
    footer={
      <div> footer bar </div>
    }
  />
}
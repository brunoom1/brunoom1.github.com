import React from "react";

import { Card } from "./card";

interface CardPerfilProps {
  children: any
}

export const CardPerfil = ({
  children
}: CardPerfilProps) => {
  return <>
    <Card 
      title={"Meu Perfil"}
      icon={'person'}
    >
      <p> {children} </p>
    </Card>

  </>
}
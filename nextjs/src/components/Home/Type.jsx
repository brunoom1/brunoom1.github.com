import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Desenvolvedor fullstack",
              "Diversas linguagens e frameworks",
              "Ferramentas mais utilizadas",
              "Foco em soluções"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type
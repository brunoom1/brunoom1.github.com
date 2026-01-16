import React from "react";

const StatusMessage = ({ done, notDone }) => {
  if (notDone) {
    return (
      <div style={{ color: "#dc3545", marginTop: "10px" }}>
        Por favor, preencha todos os campos
      </div>
    );
  }

  if (done) {
    return (
      <div style={{ color: "#28a745", marginTop: "10px" }}>
        Obrigado por contatar! Recebi seu e-mail e retornarei em breve.
      </div>
    );
  }

  return null;
};

export default StatusMessage;

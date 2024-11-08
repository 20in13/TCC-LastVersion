// components/Tabela.tsx
import React from "react";

interface TabelaProps {
  dados: { nome: string; serie: string }[];
}

const Tabela: React.FC<TabelaProps> = ({ dados }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #000",
                padding: "8px",
                backgroundColor: "#002060",
                color: "#fff",
              }}
            >
              Nome e Sobrenome
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "8px",
                backgroundColor: "#002060",
                color: "#fff",
              }}
            >
              Série
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {item.nome}
              </td>
              <td
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {item.serie}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;

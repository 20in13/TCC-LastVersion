'use client'
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const CadastroScreen = () => {
  const router = useRouter();

  return (
    <div className="fundo">
  {/* <div className="fundo">
    <main style={{ flexGrow: 1}}>
      <div className="container2">
        <header className="header">
        </header>
        </div>
        </main> */}
                    <button className="backButton" onClick={() => router.back()}>
                    <ArrowBackIcon 
                      style={{ fontSize: 24, color: 'white', transition: 'color 0.3s' }} 
                      onMouseEnter={(e) => e.target.style.color = '#CC3737'} 
                      onMouseLeave={(e) => e.target.style.color = 'white'} 
                    />
                    </button>
        {/* <div className="headerText">
          <h1>Space School</h1>
          <h2>Meu Perfil</h2>
        </div> */}
      <h1 className="title">Cadastre-se</h1>
      <div className="container">
        <input className="input" placeholder="Nome" />
        <input className="input" placeholder="E-mail Institucional" type="email" />
        <input className="input" placeholder="Senha" type="password" />
        <input className="input" placeholder="Confirme sua Senha" type="password" />
        <button className="button">
              <Text
                color="#FFF"
                fontSize={14}
                fontWeight={600}
                cursor="pointer"
              >
                Registrar
              </Text>
        </button>
      </div>
      <style jsx>{`
        .fundo {
          background-color: #44464f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        .title {
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
          color: white;
          font-weight: bold;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          background-color: white;
          border-radius: 15px;
          width: 400px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .input {
          height: 40px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
          padding: 0 10px;
          background-color: #e8e7ea;
          border-radius: 15px;
          width: 100%;
        }
        .button {
          background-color: #CC3737;
          padding: 12px 20px;
          border-radius: 15px;
          margin-bottom: 10px;
          margin-top: 5px;
          width: 105%;
          border: none;
        }
        .text {
          color: #3b0909;
          text-align: center;
          font-weight: bold;
          display: block;
        }
        .header {
  display: flex;
  justify-content: center; /* Centraliza o conteúdo */
  align-items: center; /* Centraliza verticalmente */
  background-color: #44464f;
  color: white;
  padding: 1.5rem 2rem;
  width: 100%;
  position: relative;
}
  .headerText {
  text-align: center;
  margin-top: -24px; /* Para centralizar o texto após o botão */
  align-items: center; /* Alinha o texto no centro horizontalmente */
    transform: translateY(50%); /* Centraliza verticalmente em relação ao header */
  top: 0;
  position: absolute;
}

.headerText h1 {
  margin: 0;
  font-size: 1.5rem;
  transform: translateX(-21%);
}

.headerText h2 {
  margin: 0;
  font-size: 1rem;
  color: #d3d3d3;
  transform: translateX(-21%);
}
.backButton {
  position: absolute;
  top: 50%; 
  left: 20px;
  transform: translateY(50%); /* Centraliza verticalmente em relação ao header */
  top: 0;
  background: none;
  border: none;
  cursor: pointer;
}
  .container2 {
  width: 90%;
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding: 6rem 5% 0 5%;
  display: grid;
  justify-items: center;
  align-items: center;
}

      `}</style>
      </div>
    // </div>
  );
};

export default CadastroScreen;
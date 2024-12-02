"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from "../../components/Card/page";
import SearchBar from "../../components/SearchBar";
import styles from "./page.module.css";
import NavigationRail from "../../components/NavRail/page";
import { IconButton } from "@mui/material";
import Image from "next/image";

import { useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";

export default function HomeW({ user }) {
  const [ambientes, setAmbientes] = useState([]);
  const router = useRouter();

  const goTo = () => {
    router.push("/screens/Perfil");
  };

  const theme = useTheme();
  const isAbove600px = useMediaQuery("(min-width:600px)");

  // Fetch data from the API

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmbientes = async () => {
      try {
        console.log("Base URL:", process.env.NEXT_PUBLIC_API_URL); // Verificar se a variável está sendo lida
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ambientes`);
        console.log("Resposta da API:", response.data); // Verificar o retorno da API
        if (response.data.sucesso) {
          setAmbientes(response.data.dados); // Atualizar estado com os dados da API
        } else {
          console.error("Erro na API:", response.data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar os ambientes:", error);
      } finally {
        setLoading(false); // Atualiza o estado de loading ao finalizar a requisição
      }
    };
  
    fetchAmbientes();
  }, []);
  
  

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: isAbove600px ? "80px" : "0" }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>
              <IconButton onClick={goTo}>
              <AccountCircleIcon
                          style={{ fontSize: 50, color: '#DDD' }}
                        />
                {/* {user.image ? (
                  <Image
                    src={user.image || "/img/default-avatar.png"}
                    alt="Profile Avatar"
                    width={50}
                    height={50}
                    className={styles.smallAvatar}
                  />
                ) : (
                  <AccountCircleIcon
                          style={{ fontSize: 50, color: '#777' }}
                        />
                )} */}
              </IconButton>
            </div>
          </header>

          <SearchBar />

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {loading ? (
                <p>Carregando ambientes...</p>
              ) :  ambientes.length > 0 ? (             
                ambientes.map((local) => (
                  <Card local={local} key={local.id_ambiente} isSmallCard={false} />
                )) 
              ) : (
                  <h1>Não foi possível carregar ambientes</h1>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

HomeW.defaultProps = {
  user: {
    name: "Fulano da Silva",
    email: "fulano.silva737@gmail.com",
    image: "",
  },
};

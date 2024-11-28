'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryCard from '../../components/Card/page';
import { useEffect, useState } from 'react';
import ambientes from '../../../data/ambientes.json';
import Card from '../../components/Card/page';

import api from '../../../services/api';

export default function Profile() {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [userData, setUserData] = useState(null);  // Dados do usuário
  const [loadingUser, setLoadingUser] = useState(true); // Carregamento do usuário
  const [loading, setLoading] = useState(true); // Estado para exibir carregamento

  useEffect(() => {
    // Tentando pegar os dados do usuário do sessionStorage
    const loggedUser = sessionStorage.getItem('loggedUser');
    
    if (loggedUser) {
      setUserData(JSON.parse(loggedUser));  // Se os dados existirem, setamos o estado
    } else {
      console.error('Nenhum usuário encontrado no sessionStorage.');
    }

    setLoadingUser(false);  // Termina o carregamento do usuário
  }, []);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/usuario?userId=${userData?.id_usu}`);
        if (response.ok) {
          const data = await response.json();
          setReservations(data);  // Atualiza as reservas
        } else {
          console.error('Erro ao buscar reservas:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao conectar com a API:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userData?.id_usu) {
      fetchReservations();  // Carrega as reservas do usuário logado
    }
  }, [userData]); // Rodar quando userData mudar

  return (
    <div className={styles.scrollView}>
      <main style={{ flexGrow: 1 }}>
        <div className={styles.container}>
          {/* Cabeçalho com botão de voltar */}
          <header className={styles.header}>
            <button
              className={styles.backButton}
              onClick={() => router.back()}
            >
              <ArrowBackIcon
                style={{ fontSize: 24, color: 'white', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#CC3737')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              />
            </button>
            <div className={styles.headerText}>
              <h1>Space School</h1>
              <h2>Meu Perfil</h2>
            </div>
          </header>

          {/* Avatar sobreposto ao cabeçalho */}
          <div className={styles.avatarWrapper}>
            {loadingUser ? (
              <p>Carregando...</p>
            ) : userData?.image ? (
              <Image
                src={userData.image}
                alt="Profile Avatar"
                width={150}
                height={150}
                className={styles.bigAvatar}
              />
            ) : (
              <AccountCircleIcon
                style={{
                  fontSize: 170,
                  color: '#777',
                  background: 'white',
                  borderRadius: '50%',
                }}
              />
            )}
          </div>

          <div className={styles.content}>
            {/* Seção de Informações Pessoais */}
            {loadingUser ? (
              <p>Carregando informações do usuário...</p>
            ) : (
              <>
                <h3 className={styles.titulo}>
                  Bem-vindo, {userData?.name || 'Usuário'}
                </h3>
                <p className={styles.subtitulo}>
                  Gerencie suas informações, privacidade e segurança para que o
                  Space School atenda suas necessidades.
                </p>

                <section className={styles.infoSection}>
                  <h2>Informações pessoais</h2>
                  <div className={styles.infoCard}>
                    <div className={styles.infoItem}>
                      <span className={styles.fototxt}>Foto de Perfil</span>
                      {userData?.image ? (
                        <Image
                          src={userData.image}
                          alt="Profile Avatar"
                          width={50}
                          height={50}
                          className={styles.smallAvatar}
                        />
                      ) : (
                        <AccountCircleIcon
                          style={{ fontSize: 50, color: '#777' }}
                        />
                      )}
                    </div>
                    <div className={styles.infoItem}>
                      <span>Nome</span>
                      <span>{userData?.name || 'Nome não disponível'}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span>E-mail</span>
                      <span>{userData?.email || 'E-mail não disponível'}</span>
                    </div>

                    <button className={styles.manageBtn}>
                      Alterar suas informações
                    </button>
                  </div>
                </section>
              </>
            )}

            <section className={styles.reservationsSection}>
              <h2 className={styles.minRe}>Minhas Reservas</h2>
              <div className={styles.reservationsContainer}>
                {loading ? (
                  <p>Carregando reservas...</p>
                ) : reservations.length > 0 ? (
                  reservations.map((reservation, index) => (
                    <LibraryCard
                      key={index}
                      data={reservation}
                      onDelete={() => console.log(`Reserva ${reservation.id} deletada`)} 
                      isSmallCard={true}
                    />
                  ))
                ) : (
                  <p>Você não tem reservas no momento.</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Victor Nascimento, Gabriel Henrique e João Paulo - TCC 2024</p>
      </footer>
    </div>
  );
};

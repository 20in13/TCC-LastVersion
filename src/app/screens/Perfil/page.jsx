
'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryCard from '../../components/Card/page';
import { useEffect, useState } from 'react';

export default function Profile({ user }) {
  const router = useRouter();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Simulação de uma chamada ao banco de dados para buscar reservas
    const fetchReservations = async () => {
      const response = await fetch(`/api/reservations?userId=${user.id}`);
      const data = await response.json();
      setReservations(data); // Atualiza o estado com as reservas recuperadas
    };

    fetchReservations();
  }, [user.id]);

  return (
    <div className={styles.scrollView}>
      <main style={{ flexGrow: 1}}>
        <div className={styles.container}>
          {/* Cabeçalho com botão de voltar */}
          <header className={styles.header}>
                  <button className={styles.backButton} onClick={() => router.back()}>
                    <ArrowBackIcon style={{ fontSize: 24 }} />
                  </button>
                  <div className={styles.headerText}>
                    <h1>Space School</h1>
                    <h2>Meu Perfil</h2>
                  </div>
          </header>

            {/* Avatar sobreposto ao cabeçalho */}
            <div className={styles.avatarWrapper}>
              {user.image ? (
                <Image
                  src={user.image}
                  alt="Profile Avatar"
                  width={150}
                  height={150}
                  className={styles.bigAvatar}
                />
              ) : (
                <AccountCircleIcon style={{ fontSize: 150, color: '#777' }} />
              )}
            </div>


            <div className={styles.content}>
              {/* Seção de Informações Pessoais */}
        
          <h3 className={styles.titulo}>Bem vindo, {user.name}</h3>
          <p className={styles.subtitulo}>Gerencie suas informações, privacidade e segurança para que o Space School atenda suas necessidades.</p>
  
          <section className={styles.infoSection}>
            <h2>Informações pessoais</h2>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
              
                <span className={styles.fototxt}>Foto de Perfil</span>
                {user.image ? (
                  <Image
                    src={user.image || '/img/default-avatar.png'}
                    alt="Profile Avatar"
                    width={50}
                    height={50}
                    className={styles.smallAvatar}
                  />
                ) : (
                  <AccountCircleIcon style={{ fontSize: 50, color: '#777' }} />
                )}
              </div>
              <div className={styles.infoItem}>
                <span>Nome</span>
                <span>{user.name}</span>
              </div>
              <div className={styles.infoItem}>
                <span>E-mail</span>
                <span>{user.email}</span>
              </div>
              
              <button className={styles.manageBtn}>Alterar suas informações</button>
            </div>
          </section>

          <section className={styles.reservationsSection}>
            <h2>Minhas Reservas</h2>
            <div className={styles.reservationsContainer}>
            {reservations && reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <LibraryCard 
                  onDelete={() => console.log("Deleted")} 
                  isSmallCard={false} 
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
        <p> Victor Nasc. e Gabriel Henrique - TCC 2024</p>
      </footer>
    </div>
  );
};

Profile.defaultProps = {
  user: {
    name: 'Fulano da Silva',
    email: 'fulano.silva737@gmail.com',
    image: '/perfilVitu.jpg',
  },
};



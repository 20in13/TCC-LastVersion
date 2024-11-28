'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryCard from '../../components/Card/page';
import useUser from '../../../services/hooks/useUser';
import useReservations from '../../../services/hooks/useReservas';

export default function Profile() {
  const router = useRouter();
  const { userData, loading: loadingUser } = useUser();
  const { reservations, loading: loadingReservations, error } = useReservations(userData?.id_usu);

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
                  Bem-vindo, {userData?.nome_usu || 'Usuário'}
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
                      <span>{userData?.email_usu || 'E-mail não disponível'}</span>
                    </div>
{/* 
                    <button className={styles.manageBtn}>
                      Alterar suas informações
                    </button> */}
                  </div>
                </section>
              </>
            )}

            <section className={styles.reservationsSection}>
              <h2 className={styles.minRe}>Minhas Reservas</h2>
              <div className={styles.reservationsContainer}>
                {loadingReservations ? (
                  <p>Carregando reservas...</p>
                ) : error ? (
                  <p>{error}</p>
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

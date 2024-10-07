'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Profile({ user }) {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
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

      {/* Seção de Informações Pessoais */}
      <section className={styles.infoSection}>
        <h3>Bem vindo, {user.name}</h3>
        <p>Gerencie suas informações, privacidade e segurança para que o Space School atenda suas necessidades.</p>

        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <h4>Informações pessoais</h4>
            
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

      {/* Seção de Reservas */}
      <section className={styles.reservationsSection}>
        <h4>Minhas Reservas</h4>
        <div className={styles.reservationCard}>
          <Image
            src="/img/sala-tematica.jpg"
            alt="Sala Temática"
            width={100}
            height={100}
          />
          <div className={styles.reservationDetails}>
            <p>Sala Temática</p>
            <button className={styles.deleteBtn}>Excluir</button>
          </div>
        </div>
        {/* Outras reservas podem ser adicionadas */}
      </section>
    </div>
  );
}

Profile.defaultProps = {
  user: {
    name: 'Fulano da Silva',
    email: 'fulano.silva737@gmail.com',
    image: '/perfilVitu.jpg',
  },
};

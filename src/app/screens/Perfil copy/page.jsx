"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Profile({ user }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        <ArrowBackIcon style={{ fontSize: 24 }} />
      </button>
      <h1 className={styles.title}>Space School</h1>
      <h2 className={styles.subtitle}>Meu Perfil</h2>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          <div className={styles.avatarWrapper}>
            {user.image ? (
              <Image
                src={user.image}
                alt="Profile Avatar"
                width={150}
                height={150}
                className={styles.avatar}
              />
            ) : (
              <AccountCircleIcon style={{ fontSize: 150, color: '#777' }} />
            )}
          </div>
          <div className={styles.profileBox}>
            <h3 className={styles.name}>{user.name}</h3>
            <p className={styles.email}>{user.email}</p>
            <p><button className={styles.manageBtn}>Gerenciar sua conta</button></p>
            <button className={styles.logoutBtn}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simulação de um usuário (teste)
Profile.defaultProps = {
  user: {
    name: 'Fulano da Silva',
    email: 'fulano.silva737@gmail.com',
    image: '', 
  },
};

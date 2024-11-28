// hooks/useUser.ts
import { useEffect, useState } from 'react';
import api from '../api';

interface User {
  id_usu: string;
  nome_usu: string;
  email_usu: string;
  // Adicione outros campos conforme sua API.
}

const useUser = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUser = sessionStorage.getItem('loggedUser');
    if (loggedUser) {
      setUserData(JSON.parse(loggedUser));
    } else {
      console.error('Nenhum usuário encontrado no sessionStorage.');
    }
    setLoading(false);
  }, []);

  return { userData, loading };
};

export default useUser;

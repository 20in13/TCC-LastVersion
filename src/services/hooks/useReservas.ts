// hooks/useReservations.ts
import { useEffect, useState } from 'react';
import api from '../api'; // Use a instância configurada do Axios

interface Reservation {
  id: string;
  title: string;
  description: string;
  date: string;
  // Outros campos que a reserva pode ter
}

const useReservations = (userId: string | undefined) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const response = await api.get(`/usuario?userId=${userId}`);
        setReservations(response.data);
      } catch (error: any) {
        setError('Erro ao carregar reservas.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [userId]);

  return { reservations, loading, error };
};

export default useReservations;

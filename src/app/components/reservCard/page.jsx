// ReservationCard.jsx
import styles from './page.module.css'; // Supondo que você tenha um arquivo CSS separado
import ambientes from '../../../data/ambientes.json';

export default function ReservationCard({ image, title, date, onDelete }) {
  return (
    <div className={styles.reservationCard}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.reservationDetails}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>Excluir</button>
    </div>
  );
}

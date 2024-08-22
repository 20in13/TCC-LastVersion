import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Links</h1>
      <Link  href={"/"}><p className={styles.linkTemp}>Login</p></Link>
      <Link  href={"/screens/Cadastro"}><p className={styles.linkTemp}>Cadastro</p></Link>
      <Link  href={"/screens/HomeW"}><p className={styles.linkTemp}>Home web</p></Link>
      <Link  href={"/screens/Agendamento"}><p className={styles.linkTemp}>Agendamento</p></Link>
      <Link  href={"/screens/Testes"}><p className={styles.linkTemp}>⚡Testes⚡</p></Link>
    </div>
  );
}

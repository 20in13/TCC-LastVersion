import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Card.module.css';
import biblioteca from '../../../public/biblioteca.png';

const Card = () => {


  return (
    <div className={styles.cardContainerWrapper}>
      <div className={styles.cardContainer} >
        <Image
          src={biblioteca}
          alt="Biblioteca"
          className={styles.cardImage}
        />
        <div className={styles.cardOverlay}>
          <div className={styles.cardTextContainer}>
            <span className={styles.cardText}>Biblioteca</span>
            <button className={styles.likeButton}>
              <FaRegHeart size={22} className={styles.iconeLike} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

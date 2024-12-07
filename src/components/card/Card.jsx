import styles from './Card.module.css';
import Image from 'next/image';

export default function Card({nome, categoria, preco, descricao, imagem}) {
  return (
    <div className={styles.main_container}>

      <Image src={imagem} alt='Categoria do prato' className={styles.image}/>

      <div className={styles.info_container}>
        <h3 className={styles.title}>{nome}</h3>
        <small className={styles.category}>{categoria}</small>
        <p className={styles.description}>{descricao}</p>
        <span className={styles.price}>{`R$ ${preco}`}</span>
      </div>

    </div>
  )
}
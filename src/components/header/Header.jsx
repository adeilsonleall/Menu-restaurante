import styles from './Header.module.css';
import Image from 'next/image';
import imgBanner from '../../../public/banner.png'

export default function Header() {
  return (
    <header className={styles.main_container}>

      <figure>
        <Image src={imgBanner} alt='Banner' className={styles.imgBanner}/>
      </figure>

      <div className={styles.title_container}>
        <h1 className={styles.title}>RESTAURANTE</h1>
        <p className={styles.description}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>     
      </div>

    </header>
  );
}
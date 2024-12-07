import styles from './SearchField.module.css';
import Image from 'next/image';
import imgLupa from '../../../public/lupa.png';

export default function SearchField() {
  return (
    <div className={styles.main_container}>

      <Image src={imgLupa} alt='Lupa' className={styles.lupa}/>

      <input
        type="text" 
        placeholder='Pesquise aqui um de nossos produtos do cardápio'
        className={styles.input}
      />

    </div>
  )
}
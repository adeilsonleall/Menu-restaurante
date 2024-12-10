'use client';

import styles from './SearchField.module.css';
import Image from 'next/image';
import imgLupa from '../../../public/lupa.png';
import { useState } from 'react';

export default function SearchField({searchProduct, typedText, setTypedText}) {

  return (
    <div className={styles.main_container}>
      <Image src={imgLupa} alt='Lupa' className={styles.lupa}/>
      <input
        type="text"
        value={typedText}
        onChange={(ev) => searchProduct(ev.target.value)}
        placeholder='Pesquise aqui um de nossos produtos do cardápio'
        className={styles.input}
      />
    </div>
  )
}
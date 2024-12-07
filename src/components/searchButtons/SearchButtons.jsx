'use client';

import styles from './SearchButtons.module.css';
import Image from 'next/image';
import { buttonsCategory } from '@/data/buttons';
import { useState } from 'react';

export default function SearchButtons({selectedCategory}) {
  
  const [activeButton, setActiveButton] = useState('Entradas');

  const handleClick = (bt) => {  
    setActiveButton(bt);
    selectedCategory(bt);
  };

  return (
    <div className={styles.main_container}>

      { // CRIA BOTÕES DE ACORDO COM A SEQUENCIA CRIADA NO ARQUIVO DATA BOTÕES.
        buttonsCategory.map((button, index) =>{
          return <button 
                    onClick={()=>handleClick(button.nome)} 
                    key={index} 
                    className={`${styles.button} ${activeButton == button.nome ? styles.active : ''}`} 
                    >{button.nome}
                    <Image src={button.imagem} alt='Icone do botão' className={styles.img}/>
                  </button>
        })
      }

    </div>
  );
}
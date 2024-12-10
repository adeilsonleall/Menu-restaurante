'use client';

import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import SearchButtons from "@/components/searchButtons/SearchButtons";
import SearchField from "@/components/searchField/SearchField";
import { shearchProduct, filterProducts, filterEntries } from '@/services/produtos';
import { useState } from "react";

export default function Home() {

  const [activeButton, setActiveButton] = useState('Entradas');
  const [produtos, setProdutos] = useState(filterEntries);
  const [typedText, setTypedText] = useState('');
  
  const handleFilterProduts = (category) => {
    setProdutos(filterProducts(category));
    setTypedText('');
  }

  const handleShearchProduct = (text)=> {
    setTypedText(text);    
    if(text.length>2){
      setProdutos(shearchProduct(text));
      clearCategory();
    }  
  }

  const clearCategory = () => {
    setActiveButton('');
  }

  return (
    <div className={styles.main_container}>

      <Header />
      <SearchButtons 
        selectedCategory={handleFilterProduts} 
        activeButton={activeButton} 
        setActiveButton={setActiveButton}
      />
      <SearchField 
        searchProduct={handleShearchProduct}
        typedText={typedText}
        setTypedText={setTypedText}      
      />
      <Menu produtos={produtos} />

    </div>
  );
}

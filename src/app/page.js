'use client';

import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import SearchButtons from "@/components/searchButtons/SearchButtons";
import SearchField from "@/components/searchField/SearchField";
import { filterProducts, allProducts, filterEntries } from '@/services/produtos';
import { useState } from "react";

export default function Home() {

  const [produtos, setProdutos] = useState(filterEntries);
  
  const handleFilterProduts = (category) => {
    setProdutos(filterProducts(category));
  }

  return (
    <div className={styles.main_container}>

      <Header />
      <SearchButtons selectedCategory={handleFilterProduts} />
      <SearchField />
      <Menu produtos={produtos} />

    </div>
  );
}

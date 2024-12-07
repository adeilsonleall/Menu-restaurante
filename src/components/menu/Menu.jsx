import Card from '../card/Card';
import styles from './Menu.module.css';

export default function Menu({produtos}) {

  return (
    <main className={styles.main_container}>

      {/* Title */}
      <h2 className={styles.title}>Cardápio</h2>

      {/* Cards produtos */}
      <div className={styles.card_container}>
        {
          produtos.map((produto) => {
            return <Card 
              key={produto.id} 
              nome={produto.nome}
              categoria={produto.categoria}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem={produto.imagem}
            />
          })
        }
      </div>

    </main>
  )
}
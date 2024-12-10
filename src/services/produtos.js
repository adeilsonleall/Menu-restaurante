import { produtos } from '@/data/data_produtos';

export const filterEntries = () => {
  return produtos.filter((produto) => produto.categoria === 'Entradas');
}

export const filterProducts = (category) => {
  return produtos.filter((produto) => produto.categoria === category);
}

export const shearchProduct = (typedText) => {
  return produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(typedText.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(typedText.toLowerCase())
  )
}
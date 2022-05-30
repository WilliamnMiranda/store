import React from 'react'
import { ContainerSubMenu, ContainerMenu, ContainerLista, ItemLista } from './style'
const SubHeader = () => {
  const itemsMenu = ['TODOS OS DEPARTAMENTOS','Lançamentos', 'Destaques', 'PC gamer', 'Eletronicos', 'Seja Prime', 'Cartao Store', 'BAIXE O APP']
  return (
    <ContainerSubMenu>
      <ContainerMenu>
        <ContainerLista>
          {
            itemsMenu.map((item)=>{
              return <ItemLista><a href={item}>{item.toUpperCase()}</a></ItemLista>
            })
          }
        </ContainerLista>
      </ContainerMenu>
    </ContainerSubMenu>
  )
}

export default SubHeader
import React from 'react'
import { ContainerTimeLine, Progresso, ItemTimeLine, ContainerArrow } from './style'
import { FaShoppingCart, FaUserAlt, FaAddressCard,FaLongArrowAltRight } from "react-icons/fa";
const index = ({stage}) => {
    const icons = [<FaShoppingCart />, <FaUserAlt />, <FaAddressCard />]
    const style = {
      color: '#FF6500'
    }
    return (
        <ContainerTimeLine>
            <Progresso></Progresso>
            {
              icons.map((item,index) => {
                return (
                  <ItemTimeLine style={stage >= index ? style : {} }key={index}>
                    {item}
                    {index  !== icons.length-1  && <ContainerArrow> <FaLongArrowAltRight /> </ContainerArrow>}
                  </ItemTimeLine>
                )
              })
            }
        </ContainerTimeLine>
    )
}

export default index
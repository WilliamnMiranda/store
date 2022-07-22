import React from 'react'
import { ContainerTimeLine, Progresso, ItemTimeLine, ContainerArrow } from './style'
import { FaShoppingCart, FaUserAlt, FaAddressCard, FaEye, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
const index = () => {
    const icons = [<FaShoppingCart />, <FaUserAlt />, <FaAddressCard />,  <FaEye />, <FaCheckCircle />]
    return (
        <ContainerTimeLine>
            <Progresso> </Progresso>
            {
              icons.map((item,index) => {
                return (
                  <ItemTimeLine>
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
import React from 'react'
import { ContainerHome,BannerHome,ContainerMain } from './style'
import Banner from '../../imgs/banner.jpg'
const HomePage = () => {
  return (
    <ContainerHome>
        <BannerHome> 
            <img src={Banner} alt='banner do site em promo'/>
        </BannerHome>
        <ContainerMain>

        </ContainerMain>
    </ContainerHome>
  )
}

export default HomePage
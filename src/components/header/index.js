import React from 'react'
import { ContainerHeader } from './style'
import PrimaryHeader from './PrimaryHeader'
import SubHeader from './subHeader'
import Drawer from '../Drawer'
const Header = () => {
  return (
    <ContainerHeader>
        <PrimaryHeader/>
        <SubHeader />
    </ContainerHeader>
  )
}

export default Header
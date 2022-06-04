import React from 'react'
import { ContainerHeader } from './style'
import PrimaryHeader from './PrimaryHeader'
import SubHeader from './subHeader'
import Drawer from '../Drawer'
const Header = () => {
  return (
    <ContainerHeader>
        <Drawer />
        <PrimaryHeader/>
        <SubHeader />
    </ContainerHeader>
  )
}

export default Header
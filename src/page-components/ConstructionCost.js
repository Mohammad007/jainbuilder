import React from 'react'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import ConstructionBanner from './sub-component/constructionCost/ConstructionBanner'
import ConstructionMain from './sub-component/constructionCost/ConstructionMain'

const ConstructionCost = () => {
  return (
    <>
    <Header/>
<ConstructionBanner/>
<ConstructionMain/>
    <Footer/>
    </>
  )
}

export default ConstructionCost
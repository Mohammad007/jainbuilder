import React from 'react'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import ApprovalBanner from './sub-component/ApprovalCost/ApprovalBanner'
import ApprovalMain from './sub-component/ApprovalCost/ApprovalMain'

const ApprovalCost = () => {
  return (
    <>
    <Header/>
    <ApprovalBanner/>
    <ApprovalMain/>

    <Footer/>
    </>
  )
}

export default ApprovalCost
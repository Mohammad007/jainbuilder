import React from 'react'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import ContactBanner from './sub-component/contact/Contact_banner'
import ContactMain from './sub-component/contact/Contact_main'

export default function Contact() {
  return (
    <>
    <Header/>
<ContactBanner/>
<ContactMain/>
    <Footer/>
    </>
  )
}

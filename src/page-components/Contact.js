import React from 'react'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import Contact_banner from './sub-component/contact/Contact_banner'
import Contact_main from './sub-component/contact/Contact_main'

export default function Contact() {
  return (
    <>
    <Header/>
<Contact_banner/>
<Contact_main/>
    <Footer/>
    </>
  )
}

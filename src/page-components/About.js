import React, { useEffect } from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import About_banner from './sub-component/about/About_banner';
import About_main from './sub-component/about/About_main';

export default function About() {
  return (
    <>
    <Header/>
    <About_banner/>
    <About_main/>
    <Footer/>
    </>
  )
}

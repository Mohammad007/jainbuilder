import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import AboutBanner from './sub-component/about/About_banner';
import AboutMain from './sub-component/about/About_main';

export default function About() {
  return (
    <>
    <Header/>
    <AboutBanner/>
    <AboutMain/>
    <Footer/>
    </>
  )
}

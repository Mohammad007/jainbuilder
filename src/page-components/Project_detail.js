import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import Project_detailBanner from './sub-component/project-detail/Project_detailBanner';
import Project_detailMain from './sub-component/project-detail/Project_detailMain';

export default function Project_detail() {
  return (
    <>
    <Header/>
    <Project_detailBanner/>
    <Project_detailMain/>
    <Footer/>
    </>
  )
}

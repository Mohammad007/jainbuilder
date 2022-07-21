import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import ProjectDetailBanner from './sub-component/project-detail/Project_detailBanner';
import ProjectDetailMain from './sub-component/project-detail/Project_detailMain';

export default function Project_detail() {
  return (
    <>
    <Header/>
    <ProjectDetailBanner/>
    <ProjectDetailMain/>
    <Footer/>
    </>
  )
}

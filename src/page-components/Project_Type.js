import React from 'react';
import Header from '../main-components/Header';
import Footer from '../main-components/Footer';
import ProjectsTypeBanner from './sub-component/projects-type/Projects_typeBanner';
import ProjectTypeMain from './sub-component/projects-type/Project_typeMain';



export default function Project_Type() {
  return (
    <>
    <Header/>
<ProjectsTypeBanner/>
<ProjectTypeMain/>
    <Footer/>
    </>
  )
}

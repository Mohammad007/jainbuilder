import React from 'react';
import Header from '../main-components/Header';
import Footer from '../main-components/Footer';
import Projects_typeBanner from './sub-component/projects-type/Projects_typeBanner';
import Project_typeMain from './sub-component/projects-type/Project_typeMain';



export default function Project_Type() {
  return (
    <>
    <Header/>
<Projects_typeBanner/>
<Project_typeMain/>
    <Footer/>
    </>
  )
}

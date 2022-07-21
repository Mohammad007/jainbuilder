import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../page-components/About';
import ApprovalCost from '../page-components/ApprovalCost';
import ConstructionCost from '../page-components/ConstructionCost';
import Contact from '../page-components/Contact';
import FAR from '../page-components/FAR';
import Home from '../page-components/Home';
import Products from '../page-components/sub-component/Redevelopment/ReDev';
import Residential from '../page-components/sub-component/Residential/Residential';
import Projects from '../page-components/Projects';
import Project_detail from '../page-components/Project_detail';
import Project_Type from '../page-components/Project_Type';
import Services from '../page-components/Services';
import SingleProduct from '../page-components/sub-component/Redevelopment/ReDevDesc';
import ReDevelopment from '../page-components/sub-component/projects-type/ReDevelopment';
import SingleResidential from '../page-components/sub-component/Residential/SingleResidential';
import Commercial from '../page-components/sub-component/Commercial/Commercial';
import SingleCommercial from '../page-components/sub-component/Commercial/SingleCommercial';


export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/about' exact element={<About/>}></Route>
                <Route path='/contact' exact element={<Contact/>}></Route>
                <Route path='/services' exact element={<Services/>}></Route>
                <Route path='/projects' exact element={<Projects/>}></Route>
                <Route path='/projects-type' exact element={<Project_Type/>}></Route>
                <Route path='/far-calculator' exact element={<FAR/>}></Route>
                <Route path='/approval-cost' exact element={<ApprovalCost/>}></Route>
                {/* <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route> */}
          {/* <Products/> */}
          <Route path='/redevelopment-projects' element={<Products/>}></Route>          
          <Route path='/redevelopment-projects/:productId' element={<SingleProduct/>}></Route>

          <Route path='/residential-projects' element={<Residential/>}></Route>   
          <Route path='/residential-projects/:productId' element={<SingleResidential/>}></Route>

          <Route path='/Commercial-projects' element={<Commercial/>}></Route>   
          <Route path='/Commercial-projects/:productId' element={<SingleCommercial/>}></Route>


                <Route path='/construction-cost' exact element={<ConstructionCost/>}></Route>
                <Route path='/redevelopment' element={<ReDevelopment/>}></Route>
                <Route path='/project-detail/:productId' element={<Project_detail/>}></Route>
                </Routes>
        </Router>
    </div>
  )
}

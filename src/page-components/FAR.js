import React, { useEffect } from 'react';
import Header from '../main-components/Header';
import Footer from '../main-components/Footer';
import FarBanner from './sub-component/far/FarBanner';
import FarMain from './sub-component/far/FarMain';
import { useDispatch } from 'react-redux';
import { base_url } from '../baseURL';
import { fardetailsData, faroursData } from '../redux/sliceData/sliceData';

const FAR = () => {
  const dispatch = useDispatch()

  useEffect(() => {

      // FAR Function
      ;(async () => {

          const response1 = await fetch(`${base_url}/farours`)
          const data1 = await response1.json()
          dispatch(faroursData(data1.farours))

          const response2 = await fetch(`${base_url}/fardetails`)
          const data2 = await response2.json()
          dispatch(fardetailsData(data2.fardetails))

      })()
  },[])
  return (
    <>
    <Header/>
    <FarBanner/>
    <FarMain/>
    <Footer/>
    </>
  )
}

export default FAR
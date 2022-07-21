import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { base_url } from '../baseURL';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import { ourservicesData, servicelistData, servicesmarksData, whatweoffersData } from '../redux/sliceData/sliceData';
import Services_banner from './sub-component/services/Services_banner';
import Services_main from './sub-component/services/Services_main';

export default function Services() {
  const dispatch = useDispatch()

  useEffect(() => {
      // Service Function
      ;(async () => {
          const response1 = await fetch(`${base_url}/whatweoffers`)
          const data1 = await response1.json()
          dispatch(whatweoffersData(data1.whatweoffers))

          const response2 = await fetch(`${base_url}/serviceslist`)
          const data2 = await response2.json()
          dispatch(servicelistData(data2.serviceslist))

          const response3 = await fetch(`${base_url}/ourservices`)
          const data3 = await response3.json()
          dispatch(ourservicesData(data3.ourservices))

          const response4 = await fetch(`${base_url}/servicesmarks`)
          const data4 = await response4.json()
          dispatch(servicesmarksData(data4.servicesmarks))
      })()
  },[])

  return (
    <>
    <Header/>
    <Services_banner/>
    <Services_main/>

    <Footer/>
    </>
  )
}

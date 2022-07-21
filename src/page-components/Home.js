import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { base_url } from '../baseURL';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import { blogAddData, categoriesAddData, collapsesAddData, interiorsAddData, serviceAddData, settingAddData, welcomeAddData } from '../redux/sliceData/sliceData';
import Banner from './sub-component/home/Banner';
import HomeMain from './sub-component/home/Home_main';


export default function Home() {

const dispatch = useDispatch();

  useEffect(() => {

    ;(async () => {
      const response = await fetch(`${base_url}/settings`);
      const data = await response.json();
      dispatch(settingAddData(data.settings));

      const response1 = await fetch(`${base_url}/colspan`);
      const data1 = await response1.json();
      dispatch(collapsesAddData(data1.colspan));

      const response2 = await fetch(`${base_url}/blog`);
      const data2 = await response2.json();
      dispatch(blogAddData(data2.blog));

      const response3 = await fetch(`${base_url}/welcomes`);
      const data3 = await response3.json();
      dispatch(welcomeAddData(data3.welcomes));

      const response4 = await fetch(`${base_url}/services`);
      const data4 = await response4.json();
      dispatch(serviceAddData(data4.services));

      const response5 = await fetch(`${base_url}/interiors`);
      const data5 = await response5.json();
      dispatch(interiorsAddData(data5.interior));

      const response6 = await fetch(`${base_url}/categories`);
      const data6 = await response6.json();
      dispatch(categoriesAddData(data6.categories));
    })();

  }, []);

  return (
    <>
    <Header/>
    <Banner/>
  
    <HomeMain/>
   <Footer/>
    </>
  )
}

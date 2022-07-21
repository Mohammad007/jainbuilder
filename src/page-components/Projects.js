import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { base_url } from '../baseURL'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import { amenitiesData, projectdiscoverData, projectlistData, projectsdetailsData, projectserviceData } from '../redux/sliceData/sliceData'
import ProjectsBanner from './sub-component/projects/Projects_banner'
import ProjectsMain from './sub-component/projects/Projects_main'

export default function Projects() {
  const dispatch = useDispatch()

  useEffect(() => {

      // Project Function
      ;(async () => {

          const response1 = await fetch(`${base_url}/projectdiscover`)
          const data1 = await response1.json()
          dispatch(projectdiscoverData(data1.projectdiscover))

          const response2 = await fetch(`${base_url}/projectlist`)
          const data2 = await response2.json()
          dispatch(projectlistData(data2.projectlist))

          const response3 = await fetch(`${base_url}/amenities`)
          const data3 = await response3.json()
          dispatch(amenitiesData(data3.amenities))

          const response4 = await fetch(`${base_url}/projectservice`)
          const data4 = await response4.json()
          dispatch(projectserviceData(data4.projectservice))

          const response5 = await fetch(`${base_url}/projectdetails`)
          const data5 = await response5.json()
          dispatch(projectsdetailsData(data5.projectdetails))

      })()
  },[])
  return (
    <>
    <Header/>
<ProjectsBanner/>
<ProjectsMain/>
    <Footer/>
    </>
  )
}

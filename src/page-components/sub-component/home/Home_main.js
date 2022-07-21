import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import VisibilitySensor from "react-visibility-sensor";
// import Pannellum from './Pannellum';
// import Pannellum1 from './Pannellum';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';
import { useSelector } from 'react-redux';






export default function Home_main() {
  const settingData = useSelector(state => state.sliceData.settings);
  const collspan = useSelector(state => state.sliceData.collapses);
  const blogData = useSelector(state => state.sliceData.blogs);
  const welcomeData = useSelector(state => state.sliceData.welcomes);
  const serviceData = useSelector(state => state.sliceData.services);
  const interiorData = useSelector(state => state.sliceData.interiors);
  const categoriesData = useSelector(state => state.sliceData.categoriesAddData);

  const [focus, setFocus] = React.useState(false);

  const[toggleState, setToggleState] =useState(1);
  const toggleTab = (index)=>{
    setToggleState(index);
  };
  const nextIcon = '<i class="fa fa-angle-right"></i>';
  const prevIcon = '<i class="fa fa-angle-left"></i>';
  const options ={
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      prevIcon,
      nextIcon
    ],
    autoPlay: true,
    autoplaySpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        // nav:false
      },
      992: {
        items: 3,
        nav: true,
        // loop:false
      }
    }
  }

  return (
    <>
      <section className="welcome mt-140 mb-140">
        <div className="container">
          
          <div className="row">
            <div className="col-md-6 pad-small">
              <div className="welcome-txt">
                <h6>Welcome to</h6>
                <h4>{welcomeData?.title}</h4>
                <p className="mt-5">{welcomeData?.message}</p>
                <div className="btn-x mt-5">
                  <Link to="/about" className="btn-more">MORE</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end px-0">
              <div className="welcome-img">
                <img src="assets/Images/68d7e283892779.5d4a82db92bc6-766x1024.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- amenities starts --> */}
      <section className="amenities1">
        <div className="row">
          <div className="col-md-3 am-bg">

            <div className="amenities">
              <h4>
                Our <br /> Services
              </h4>
            </div>
            <div className="background-overlay2"></div>
          </div>
          <div className="col-md-9 bg-n-clr">
            <div className="carous-indicators ">
              <div className="carousel-indicators mb-0">
                <button className={toggleState === 1 ? "active": ""} onClick={()=> toggleTab(1)}  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                   aria-current="true" aria-label="Slide 1"><i className="fa-solid fa-trowel-bricks me-1"></i>{serviceData[0]?.title}</button>
                <button className={toggleState === 2 ? "active": ""} onClick={()=> toggleTab(2)}   type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"><i className="fa-solid fa-handshake me-2"></i> {serviceData[1]?.title}</button>
                {/* <!-- <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
							aria-label="Slide 3"><i className="fa-solid me-1 fa-beer-mug-empty"></i> Lounge</button> --> */}
              </div>
            </div>
            <div id="carouselExampleIndicators" data-bs-interval="false" className="carousel slide  three" data-bs-ride="carousel">

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                      <div className="welcome-txt p-60">

                        <h4>{serviceData[0]?.title}</h4>
                        <p>{serviceData[0]?.content}</p>

                        <div className="p-60 counting nums text-center d-flex justify-content-between flex-wrap">
                          <div className="group-1">
                            <span className="num" data-goal="12">
                              <CountUp start={focus ? 0 : null} end={settingData[19]?.value} duration={2} redraw={true}>
                                {({ countUpRef }) => (
                                  <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                  }}>
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                            </span>
                            <p>Instructors</p>
                          </div>
                          <div className="group-1">
                            <span className="num" data-goal="42">
                            <CountUp start={focus ? 0 : null} end={settingData[18]?.value} duration={2} redraw={true}>
                                {({ countUpRef }) => (
                                  <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                  }}>
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                            </span>
                            <p>Treadmills</p>
                          </div>
                          <div className="group-1">
                            <span className="num" data-goal="35">
                            <CountUp start={focus ? 0 : null} end={settingData[17]?.value} duration={2} redraw={true}>
                                {({ countUpRef }) => (
                                  <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                  }}>
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                            </span>
                            <p>Cross Trainers</p>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className="col-md-6 order-1 order-md-2 car-img"><img src="assets/Images/slide-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>

                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6 "><img src="assets/Images/slide-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="welcome-txt p-60">

                        <h4>{serviceData[1]?.title}</h4>
                        <p>{serviceData[1]?.content}</p>

                        <div className="car-buttons ">

                          <Link to="" className="butn1 d-block">LEARN MORE</Link>
                          <Link to="" className="btn-more d-block">GALLERY</Link>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <!-- amenities ends --> */}

      {/* <!-- gif sec starts --> */}

      <section className="gif-sec">
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-60">
              <div className="welcome-txt text-center text-md-start">

                <h4>Get FAR Calculator</h4>
                <div className="btn-x mt-5">
                  <Link to="/far-calculator" className="btn-more">CALCULATE</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-30">
              <div className="gif-img">
                <img src="assets/Images/1f219d81152957.5cf69e49e062e.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- gif section ends --> */}
      <section className="grid-sec">
        <div className="row">
          <div className="col-lg-8 grid-sec-1 pe-0">
            <div className="row-container">
              <div className="row me-0 ">

                {categoriesData?.map((item, index) => (
                <div className="col-md-6 d-flex align-items-center" key={index}>
                  <div className="box-cont">
                    <div className="d-flex flex-row align-items-center">
                      <div className="grid-icon d-flex align-items-center">
                        <i className="fas fa-home"></i>
                      </div>
                      <div className="grid-txt ">
                        <h3><Link to="/redevelopment-projects">{item.title}</Link></h3>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 grid-sec-2">

          </div>
        </div>
      </section>



      <section className="slider-sec">
        <div className="row">
         
          <div className="col-lg-8 mb-0 pe-0 order-2 order-lg-1">
            {/* <!-- Banner links starts here --> */}

            <div className="owl-caro ">
            <OwlCarousel className='owl-carousel portfolio-carousel  owl-theme' {...options}>
              <div className="item item1">
                <div className="owl-img">

                  <img src="assets/Images/592a2c85302995.5d77d5d8e49c6.jpg" className="img-responsive portfolio-image"
                    alt="" />

                </div>
              </div>
              <div className="item item2">
                <div className="owl-img">

                  <img src="assets/Images/0e07a485282611.5d776baa14a6e.jpg" className="img-responsive portfolio-image"
                    alt="" />

                </div>
              </div>
              <div className="item item3">
                <div className="owl-img">

                  <img src="assets/Images/6edc5069160839.5b76b19b4dcd9.jpg" className="img-responsive portfolio-image"
                    alt="" />

                </div>
              </div>
              <div className="item item4">
                <div className="owl-img">

                  <img src="assets/Images/46a1ed85332653.5d7988a1d0e66.jpg" className="img-responsive portfolio-image"
                    alt="" />

                </div>
              </div>

              </OwlCarousel>
            </div>


            {/* <!-- banner links ends here --> */}
          </div>
          
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="welcome-txt p-90">

              <h4>{interiorData[0]?.title}</h4>

              <p className="mt-3">
                {interiorData[0]?.content}
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* <!-- panaroma starts --> */}
      {/* <section className="slider-sec">
        <div className="row">
          <div className="col-lg-4">
            <div className="welcome-txt p-60">

              <h4>Panorama <br /> Street View</h4>
              <p className="mt-3">It is ideally situated on a very private lot along a whisper quiet street. The level
                entry open concept main floor features large wood frame windows, a very affordable master
                bedroom with double car garage, high coved ceilings.
              </p>
            </div>
          </div>
          <div className="col-lg-8 mb-0 pe-0 "> */}
            
            {/* <!-- Banner links starts here --> */}
            {/* <div className='pano-image' id="pano-image"></div> */}
{/* <Pannellum1/> */}

            {/* <!-- banner links ends here --> */}
          {/* </div>
        </div>
      </section> */}

      {/* <!-- Panaroma ends --> */}
      {/* <!-- collapse-map starts --> */}
      <section className="collapse-map">
        <div className="background-overlay"></div>
        <div className="collapse-cont">
          <div className="row">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="accordion" id="myAccordion">

                {collspan?.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target={`#collapseOne${index}`} aria-expanded="true"><i
                        className="fas fa-home me-2"></i>{item?.title}</button>
                  </h2>
                  <div id={`collapseOne${index}`} className="accordion-collapse collapse"
                    data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>{item?.content}</p>
                    </div>
                  </div>
                </div>
                ))}

                {/* <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"><i className="fas fa-shopping-bag me-2"></i> Map Sanction</button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>Just two streets away exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"><i className="fas fa-tree me-2"></i> Front Elevation Design
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>Just two streets away exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"><i className="fas fa-school me-2"></i> Structure Completion</button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>Just two streets away exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"><i className="fas fa-school me-2"></i> Interior Work</button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>Just two streets away exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"><i className="fas fa-school me-2"></i> FInal Product</button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <p>Just two streets away exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="map2">
                <img width="100%" src="assets/Images/adbfbc82313425.5d1a09dc61612-1300x919.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- collapse-map ends --> */}
      {/* <!-- Parallax area starts --> */}
      <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/8fa8ff66810479.5b22c41bc3afb.jpg" opacity="0.5">
      <section className="contact-bg parallax">

        <div className="social-bg parallax-window">
          {/* <!-- <h1 className="info" style="color: #ffffff">Contact Us</h1> --> */}
          <div className="parallax-container">
            <div className="container text-center">
              <div className="heading1">
                <h2>We are always available to talk to you!</h2>
              </div>
              <div className="seperator"></div>

              <div className="btn-x mt-5">
                <Link to="/contact" className="btn-more2">Contact Us</Link>
              </div>

            </div>
          </div>
          <div className="overlay3 "></div>
        </div>

      </section>
      </Parallaximg>



</ParallaxProvider>
      {/* <!-- Parallax area ends --> */}



      {/* <!-- Blog section starts --> */}
      <section className="blog">

        <div className="blog-heading mb-5">
          <h2>From Our Blog</h2>
        </div>
        <div className="elementor-element elementor-element-6b078c2 elementor-widget-divider--separator-type-pattern elementor-widget elementor-widget-divider"
          data-id="6b078c2" data-element_type="widget" data-widget_type="divider.default">
          <div className="elementor-widget-container">
            {/* <div className="elementor-divider"
              style={{"--divider-pattern-url: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 20 16' stroke='%23f4ba10' stroke-width='1' fill='none' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cg transform='translate(-12.000000, 0)'%3E%3Cpath d='M28,0L10,18'/%3E%3Cpath d='M18,0L0,18'/%3E%3Cpath d='M48,0L30,18'/%3E%3Cpath d='M38,0L20,18'/%3E%3C/g%3E%3C/svg%3E&quot;);"> */}
            <span className="elementor-divider-separator">
            </span>
          </div>
          {/* </div> */}
        </div>
        <div className="blog-boxes">
          <div className="row">
            {blogData?.map((item, index) => (
            <div className="col-lg-4 col-md-6 pg-2" key={index}>
              <div className="blog-card">
                <div className="blog-image"></div>
                <div className="blog-card-body text-center">
                  <h6 className="blog-date">{item?.created_at}</h6>
                  <Link className="heading-link" to="">
                    <h3>{item?.title}</h3>
                  </Link>
                  <p className="description">
                   {item?.content}
                  </p>
                  <div className="read">
                    <Link className="btn-more3" to="">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Blog section ends --> */}

    </>
  )
}

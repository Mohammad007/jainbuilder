import { Link, useParams } from 'react-router-dom';
import Footer from '../../../main-components/Footer';
import Header from '../../../main-components/Header';

import products from '../data/commercial_data';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg2';
const SingleCommercial = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, desc } = product;
  return (
    <>
    <Header/>
    <ParallaxProvider>
                <Parallaximg imgsrc="../assets/Images/pexels-jean-van-der-meulen-1457842.jpg" opacity="0.5">
    <section className="contact-bg parallax abt-parallax">

<div className="social-bg parallax-window1">
    <div className="wrapper1">
        <div className="rel-bx">
            <div className="breadcrumb-border">

            </div>
        </div>
        <div className="pt-5 ps-5">
            <div className="swipe">
                <h1>{name}</h1>
            </div>
        </div>
        
    </div>
    <div className="wrapper23">
        <div className="rel-bx z-ind">
<div className="line-1"></div>
<div className="line-2"></div>
<div className="line-3"></div>
        </div>
        <div className="box-121">

        </div>
    </div>
   
</div>
</section>
</Parallaximg>



</ParallaxProvider>
     

      <section className="inside">
        <div className="row">
          {/* <h4>{title}</h4> */}
          <div className="col-lg-5">
            <div className="inside-desc inside-pad">
              <div className="inside-txt">

                {/* <h4>{id}</h4> */}
                <p>{desc}


                </p>
              </div>
              <div className="inside-list mb-40">
                <ul>
                  <li>
                    <span className="inside-check"><i className="fa-solid fa-check"></i></span>
                    <span className="inside-detail">Floor: 5</span>
                  </li>
                  <li>
                    <span className="inside-check"><i className="fa-solid fa-check"></i></span>
                    <span className="inside-detail">AREA: 500M2</span>
                  </li>
                  <li>
                    <span className="inside-check"><i className="fa-solid fa-check"></i></span>
                    <span className="inside-detail">ROOMS: 12</span>
                  </li>
                  <li>
                    <span className="inside-check"><i className="fa-solid fa-check"></i></span>
                    <span className="inside-detail">BATHROOMS: 3</span>
                  </li>
                  <li>
                    <span className="inside-check"><i className="fa-solid fa-check"></i></span>
                    <span className="inside-detail">OPEN AREA: 200M2</span>
                  </li>
                </ul>
              </div>
              <div className="inside-button">
                <button className="btn-more d-block">MORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 my-auto">
            <div className="inside-img">
              <img width="100%" src={image} alt="" />
            </div>

          </div>
        </div>
      </section>


      {/* <!-- hello section starts --> */}

      <section className="hello bg-white pt-140 pb-140">
  <div className="container ">
    <div className="hello-container">
      <div className="hello-txt">
        <h4>Say hello to your new home.</h4>
        <p>Credentials onboarding agile reach. Copy deck push the envelope on your plate responsive behavior
          cross platform whiteboard value proposition. Proposed cross platform segment high-level.
          Affiliate marketing target audience take a stab at it mock up strategic engagement retainer.
          Synergy streamline bandwidth dev environment. Next steps tackle it optimize leverage gear up.
          Usability lead generation next steps hackathon retainer ROI on your plate lean.</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- Hello section ends --> */}

<section>
  <div className="row">
    <div className="col-lg-4">
      <div className="inside-slider">
        <div id="carouselExampleIndicators" data-bs-pause="false" className="carousel slide"
          data-bs-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../assets/Images/item1.jpg" className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="../assets/Images/item2.jpg" className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="../assets/Images/item3.jpg" className="d-block" alt="..."/>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="col-lg-8 ps-0">
      <div className="p-140">

        <div className=" over-cont">


          <div className="row">
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i className="fa-solid fa-water-ladder"></i>
                </div>

                <div className="contact-desc2">
                  <h6>Waterside Pool</h6>
                  <p>Activities for all ages and abilities.</p>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i
                    className="fa-solid fa-champagne-glasses"></i></div>

                <div className="contact-desc2">
                  <h6>Lounge Area</h6>
                  <p>Comfort, tranquility and relaxation.

                  </p>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i className="fa-solid fa-bath"></i></div>

                <div className="contact-desc2">
                  <h6>Stylish Bathroom</h6>
                  <p>Trendy and modern.</p>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i className="fa-solid fa-sack-dollar"></i>
                </div>

                <div className="contact-desc2">
                  <h6>Low Maintenance Upkeep</h6>
                  <p>Suitable for every budget. </p>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i className="fa-solid fa-square-parking"></i>
                </div>

                <div className="contact-desc2">
                  <h6>Allocated Parking</h6>
                  <p>Easy access for your car.</p>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="heading-box2 phone d-flex">
                <div className="review-icon2 my-md-auto pt-2"><i className="fa-solid fa-tree-city"></i>
                </div>

                <div className="contact-desc2">
                  <h6>Open Spaces</h6>
                  <p>For that much deserved break.</p>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</section>

<section className="inside-footprint">
  <img width="100%" height="100%" src="../assets/Images/inside-footprint.jpg" alt=""/>
</section>

{/* <!-- Parallax area starts --> */}
<ParallaxProvider>
                <Parallaximg imgsrc="../assets/Images/parallax2.jpg" opacity="0.5">
<section className="contact-bg parallax">

  <div className="social-bg parallax-window">
    {/* <!-- <h1 className="info" style="color: #ffffff">Contact Us</h1> --> */}
    <div className="parallax-container">
      <div className="container text-center">
        <div className="heading2">
          <h2>You Like this Place?</h2>
          <p>Contact us and we will get in touch with you immediately.</p>
        </div>


        <div className="btn-x ">
          <Link to="/contact" className="parallax-btn">CONTACT US</Link>

        </div>
      </div>
    </div>
    <div className="overlay-white"></div>

  </div>

</section>
</Parallaximg>



</ParallaxProvider>
{/* <!-- Parallax area ends --> */}




{/* <!-- modal section starts --> */}
<section className="modal-sec">
  <div className="row">
    <div className="col-lg-4">
      <div className="modal-sec-txt px-150 ">
        <div className="welcome-txt">
          <h4>Take a Look Inside</h4>
        </div>
        <div className="far-txt">
          <p>Synergy streamline bandwidth dev environment. Next steps tackle it optimize leverage gear up.
            Usability lead generation next steps hackathon retainer ROI on your plate lean.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="modal-gallery">
        <div className="row">

          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item1.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item2.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal3" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item3.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal4" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item2.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal5" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item3.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <Link to="" data-bs-toggle="modal" data-bs-target="#exampleModal6" className="modal-link">
              <div className="modal-gal-img">
                <img src="../assets/Images/item1.jpg" alt=""/>
                <div className="modal-overlay"></div>
              </div>

            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <!-- modal section ends --> */}



{/* <!-- Modal 1 starts --> */}
<div className="modal modal1 fade" id="exampleModal1"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item1.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- modal 1 ends --> */}


{/* <!-- Modal 2 starts --> */}
<div className="modal modal1 fade" id="exampleModal2"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item2.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 2 ends --> */}
{/* <!-- Modal 3 starts --> */}
<div className="modal modal1 fade" id="exampleModal3"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item3.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 3 ends --> */}
{/* <!-- Modal 4 starts --> */}
<div className="modal modal1 fade" id="exampleModal4"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item2.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 4 ends --> */}
{/* <!-- Modal 5 starts --> */}
<div className="modal modal1 fade" id="exampleModal5"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item3.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 5 ends --> */}
{/* <!-- Modal 6 starts --> */}
<div className="modal modal1 fade" id="exampleModal6"  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog  modal-xl">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center fltt">
              <img src="../assets/Images/item1.jpg" className="img-responsive img-centered" alt=""/>
              <h2>CORPORATE DESIGN</h2>
              <hr className="colored"/>
            </div>
            <div className="col-lg-2"></div>



          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 6 ends --> */}



      <Footer/>
{/* <Footer/> */}
      {/* <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section> */}
    </>

  );
};

export default SingleCommercial;
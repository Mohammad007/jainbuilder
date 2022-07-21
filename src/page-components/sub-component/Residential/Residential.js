import { Link } from 'react-router-dom';
import Footer from '../../../main-components/Footer';
import Header from '../../../main-components/Header';
import products from '../data/residential_data';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg1';

const Residential = () => {
  return (
    <>
      <Header />
      <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/pexels-jean-van-der-meulen-1457842.jpg" opacity="0.5">
    <section className="contact-bg parallax abt-parallax">

<div className="social-bg parallax-window1">
    <div className="wrapper1">
        <div className="rel-bx">
            <div className="breadcrumb-border">

            </div>
        </div>
        <div className="pt-5 ps-5">
            <div className="swipe">
                <h1>Residential Projects</h1>
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
     

      {/* cards starts */}

      <section className="projects pt-140 ">
        <div className="container">
          <div className="row">
            {products.map((product) => {
              return (
                <div key={product.id} className="col-md-6 mb-80 pe-100">
                  <Link to={`/residential-projects/${product.id}`} className="project-hover">
                    <div className="project-box">
                      <div className="project-img">
                        <img width="100%" src={product.image} alt="" />
                      </div>
                      <div className="project-desc">
                        <p>{product.subtitle}</p>
                        <span>{product.name}</span>
                      </div>
                    </div>
                  </Link>

                </div>
              );
            })}


          </div>
        </div>
      </section>

      {/* cards ends */}

      {/* <!-- panaroma starts --> */}
      <section className="slider-sec bg-white">
        <div className="row">
          <div className="col-lg-5 my-auto order-2 order-lg-1">
            <div className="welcome-txt px-90">

              <h4>We Are Always Here for You</h4>
              <p className="mt-3">Whether you are a first time buyer, investor, or looking for a pied de terre have a
                look at this one! This is by far the most fantastic floorplan in the entire development!
              </p>
            </div>
          </div>
          <div className="col-lg-7 mb-0 pe-0 order-1 order-lg-2">
            {/* <!-- Banner links starts here --> */}

            <div className="abt-img-cont">
              <img src="assets/Images/here.jpg" alt="" />
            </div>

            {/* <!-- banner links ends here --> */}
          </div>
        </div>
      </section>

      <Footer />
      {/* <!-- Panaroma ends --> */}

      {/* <section className='section'>
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section> */}
    </>

  );
};

export default Residential;
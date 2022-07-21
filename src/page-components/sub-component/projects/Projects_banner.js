import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';
// import img1 from './bung.jpg'

const Projects_banner = () => {
    return (
        <>
            <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/ba696e81242285.5d271a287eea6.jpg" opacity="0.5">
                    <section className="contact-bg parallax abt-parallax">

                        <div className="social-bg parallax-window1">
                            <div className="wrapper1">
                                <div className="rel-bx">
                                    <div className="breadcrumb-border">

                                    </div>
                                </div>
                                <div className="pt-5 ps-5">
                                    <div className="swipe">
                                        <h1>Projects</h1>
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
        </>
    )
}
export default Projects_banner
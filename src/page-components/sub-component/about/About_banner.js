import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';

export default function About_banner() {
  return (
    <>
    <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/pexels-jean-van-der-meulen-1457842.jpg" opacity="0.5">
    <section className="contact-bg parallax abt-parallax">

<div className="social-bg parallax-window1">
    <div className="wrapper1  z-ind-2">
        <div className="rel-bx">
            <div className="breadcrumb-border">

            </div>
        </div>
        <div className="pt-5 ps-5">
            <div className="swipe">
                <h1>About Us</h1>
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

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './skyscraper_white.png';
import img2 from './profile.jpg';
import { useSelector } from 'react-redux';

export default function Footer() {
	const settingData = useSelector(state => state.sliceData.settings);
  return (
    <>
    <section className="footer">
		<div className="row">
			<div className="col-lg-3 col-md-12 order-4 order-lg-1">
				<div className="footer-part-1">
					<div className="footer-box-1">
						<div className="footer-logo">
							<img src={img1} alt=""/>
						</div>
						<div className="footer-desc">
							<p>{settingData[13]?.value}</p>
						</div>
						<div className="footer-social">
							<div className="d-inline-block">
								<span><Link target="_blank" to={settingData[14]?.value} className="fb"><i className="fab fa-facebook"></i></Link></span>
								<span><Link target="_blank" to={settingData[15]?.value} className="fb"><i className="fab fa-twitter"></i></Link></span>
								<span><Link target="_blank" to={settingData[16]?.value} className="fb"><i className="fab fa-instagram"></i></Link></span>

							</div>
						</div>
						<div className="copyright">
							<p>Copyright { new Date().getFullYear() }</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-3 foot-bg-sec order-3 order-lg-2">

			</div>

			<div className="col-lg-4 col-md-8 footer-form-bg d-flex align-items-center order-2 order-lg-3">
				<div className="footer-form">
					<div className="footer-profile d-flex">
						<span><img width="80px" src={img2} alt=""/></span>
						<span className="pro-2">
							<h4>Rajat Jain</h4>
							<p>CEO</p>
						</span>
					</div>
					<form action="">
						<div className="row">

							<div className="col-md-6 ">
								<div className="mb-3">
									<label className="">Your Name*</label>
									<input type="text" className=""/>
								</div>
							</div>
							<div className="col-md-6 ">
								<div className="mb-3">
									<label className="">Your Email*</label>
									<input type="email"/>

								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
									<label className="">Your Subject*</label>
									<input type="text" className=""/>
								</div>
							</div>
							<div className="col-md-12 mb-5 ">

								<label >Comments</label>
								<textarea className=""></textarea>


							</div>


						</div>

						<Link className="btn-send" to="">Send</Link>

					</form>
				</div>
			</div>
			<div className="col-lg-2 col-md-4 footer-yellow d-flex align-items-center order-1 order-lg-4">
				<div className="footer-links ">
					<ul>
						<li><Link to="/about"> About</Link></li>
						<li><Link to="/contact"> Contact</Link></li>
						<li><Link to=""> Privacy Policy</Link></li>
						<li><Link to=""> Terms &amp; Conditions</Link></li>
						<li><Link to=""> FAQs</Link></li>
					</ul>
				</div>

			</div>
		</div>
	</section>
    </>
  )
}

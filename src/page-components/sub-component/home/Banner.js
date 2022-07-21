import React from 'react';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';

export default function Banner() {
	const settingData = useSelector(state => state.sliceData.settings);
  return (
    <>
        <div className="banner three">
		<div id="carouselExampleSlidesOnly" data-bs-pause="false" data-interval="1000"
			className="carousel slide carousel-fade" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img className="main-bg d-block w-100" src="assets/Images/pexels-jean-van-der-meulen-1457842.jpg" 
						alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="assets/Images/pexels-vecislavas-popa-1571459.jpg" className="d-block w-100" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="assets/Images/pexels-vecislavas-popa-1643383.jpg" className="d-block w-100" alt="..."/>
				</div>
			</div>
		</div>
		<div className="text-container ">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-md-6 line">
								<div className="sky-head text-center">
									<h2>{settingData[20]?.value}</h2>
								</div>
							</div>
							<div className="col-md-6">
								<div className="sky-para text-center text-md-start">
									<p>{settingData[21]?.value}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-4">

							</div>
							<div className="col-lg-4 col-md-6 banner-low  text-center">
								<div className="banner-icon">
									<i className="far fa-building"></i>
								</div>
								<div className="banner-number nums">
									<h3><span className="num" ><CountUp end={settingData[22]?.value} duration={2}/></span>+ <br/> Houses</h3>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 banner-low text-center">
								<div className="banner-icon">
									<i className="fas fa-chart-area"></i>
								</div>
								<div className="banner-number nums">
									
									<h3><span className="num"><CountUp end={settingData[23]?.value} duration={2}/></span>+ <br/> Grass Area</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'

export default function Services_main() {

	const whatweoffers = useSelector(state => state.sliceData.whatweoffers)
	const serviceslist = useSelector(state => state.sliceData.servicelist)
	const ourservices = useSelector(state => state.sliceData.ourservices)
	const servicesmarks = useSelector(state => state.sliceData.servicesmarks)

  return (
    <>
    	<section className="bg-white">
		<div className="row">
			<div className="col-lg-4 tower-bg">
				<div className="">

				</div>
			</div>
			<div className="col-lg-8 ps-0">
				<div className="p-140">

					<div className=" over-cont">

						
						<div className="row">
							{serviceslist?.map((item, index) => (
							<div className="col-md-4" key={index}>
								<div className="heading-box2 phone d-flex">
									<div className="review-icon2 my-md-auto pt-2"><i className={item?.classname}></i></div>
										<div className="contact-desc2">
											<h6>{item?.title}</h6>
											<p>{item?.content}</p>

										</div>
									
								</div>
							</div>
							))}
						</div>


					</div>
				</div>
			</div>
		</div>

	</section>


	<section className="bg-white">
		<div className="row">
			
			<div className="col-lg-8 ps-0 rel-container">
				<div className="image-overlay"></div>
				<div className="p-140">

					<div className=" over-cont">

						<div className="abt-welcome-txt services-txt">
							<h6>our services</h6>
							<h4>{ourservices?.title}</h4>
							<p className="mt-3">{ourservices?.content}</p>
						</div>
						<div className="row checkpoints">
							<div className="col-md-6 px-40">
								<ul>
								{servicesmarks?.map((item, index) => (
									<li className="d-flex" key={index}>
										<span className="check-icon"><i className="fa-regular fa-square-check"></i></span>
										<span className="check-text">{item?.title}</span>
									</li>
									))}
								</ul>
							</div>
						</div>


					</div>
				</div>
			</div>
			<div className="col-lg-4 tower-bg2">
				<div className="">

				</div>
			</div>
		</div>

	</section>



	{/* <!-- What we offer --> */}
{/* <!-- video section starts --> */}

<section className="offer-bg">
	
	<div className="p-140 test-co ">
		<div className="reviews">
			<div className="heading-box d-flex">
				
				<div>
					<div className="review-txt">
						{/* <!-- <h6>a word from our clients</h6> --> */}
						<h4>What We Offer</h4>
						<p>Enjoy the country living on this .53 acre mini estate and be only minutes from all amenities.</p>
					</div>
				</div>
			</div>
		</div>

		<div className="row pt-30">
			{whatweoffers.map((item, index) => (
			<div className="col-md-4 mb-20" key={index}>
				<div className="testimonial-box bg-white text-center p-40">
					<div className="round-icon-box mb-4">
						<span className="round-icon"><i className={item?.classname}></i></span>
					</div>
					<div className="offer-text">
						<h6 className="mb-4">{item?.title}</h6>
						<p>{item?.content}</p>
					</div>
				</div>
			</div>
			))}
		</div>

	</div>
	<div className="wallpaper-overlay"></div>
</section>
{/* <!-- video section ends --> */}
    </>
  )
}

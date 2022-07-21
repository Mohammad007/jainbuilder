import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Projects_main() {

	const projectdiscover = useSelector(state => state.sliceData.projectdiscover);
	const projectlist = useSelector(state => state.sliceData.projectlist);
	const amenities = useSelector(state => state.sliceData.amenities);
	const projectservice = useSelector(state => state.sliceData.projectservice);
	const projectsdetails = useSelector(state => state.sliceData.projectsdetails);

  return (
    <>
	<section className="project-first">
		<div className="row">

			<div className="col-md-8 ps-0 rel-container order-2 order-md-1">

				<div className="p-140">

					<div className=" over-cont">

						<div className="abt-welcome-txt services-txt">
							<h6>let's discover together</h6>
							<h4>{projectdiscover?.title}</h4>
							<p className="mt-3">{projectdiscover?.content}</p>
						</div>

					</div>
				</div>
			</div>
			<div className="col-md-4 pb-100 order-1 order-md-2 p-sm-60">
				<div className="project-pic-box d-flex align-items-center justify-content-md-start justify-content-center">
					<div className="project-pic">
						<img height="100%" width="100%" src="assets/Images/021-condominium_color_nocloud.svg" alt=""/>
					</div>
				</div>
			</div>
		</div>

	</section>


	{/* <!-- confer section starts --> */}
	<section className="confer pb-140">
		<div className="container-fluid">
			<div className="row">

				{projectlist?.map((item, index) => (
				<div className="col-md-4" key={index}>
					<Link className="codef" to={`#${item?.title}`}>
						<div className="poster">
							<div className="poster-img1">
								<div className="poster-overlay">

								</div>
							</div>
							<div className="poster-content-wrapper">
								<div className="poster-contet text-center ">
									<h2 className="confer-title">
										{item?.title}
									</h2>
									<p>
										{item?.content}
									</p>
									<div>
										<Link to={`#${item?.title}`} className="parallax-btn">See More</Link>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
				))}
			</div>
		</div>
	</section>
	{/* <!-- confer section ends --> */}


	{/* <!-- parallax-img starts --> */}
<section className="parallax-img">

</section>
	{/* <!-- parallax-img ends --> */}

	{/* <!-- two side image section starts --> */}
<section className="twoside">
	<div className="row">
		<div className="col-lg-2 col-md-6 twoside-1"></div>
		<div className="col-lg-4 col-md-6 pad-120">
			<div className="twoside-title">
				<h5>Amenities</h5>
			</div>
			<div className="twoside-desc">
				{amenities?.map((item, index) => (
				<p key={index}>{item?.title}</p>
				))}
			</div>
		</div>
		<div className="col-lg-4 col-md-6 pad-120">
			<div className="twoside-title">
				<h5>Services</h5>
			</div>
			<div className="twoside-desc">
				{projectservice?.map((item, index) => (
				<p key={index}>{item?.title}</p>
				))}
			</div>
		</div>
		<div className="col-lg-2 col-md-6 twoside-2"></div>
	</div>
</section>
	{/* <!-- two side image section ends --> */}


{/* <!-- room detail starts --> */}
<section className="room-detail">
	<div className="row">
		<div id="room" className="col-md-6 room1">

		</div>
		<div className="col-md-6 d-flex align-items-center">
			<div className="room-txt px-90">

				<h4>{projectsdetails[0]?.title}</h4>
				<p className="mt-3">{projectsdetails[0]?.content}</p>
			</div>
		</div>
		<div id="pool" className="col-md-6 d-flex align-items-center">
			<div className="room-txt px-90">

				<h4>{projectsdetails[1]?.title}</h4>
				<p className="mt-3">{projectsdetails[1]?.content}</p>
			</div>
		</div>
		<div className="col-md-6 room2">

		</div>
		
		<div id="courtyard" className="col-md-6 room3">

		</div>
		<div className="col-md-6 d-flex align-items-center">
			<div className="room-txt px-90">

				<h4>{projectsdetails[2]?.title}</h4>
				<p className="mt-3">{projectsdetails[2]?.content}</p>
			</div>
		</div>
	</div>
</section>
{/* <!-- room detail ends --> */}

	{/* <!-- parallax-overlay starts --> */}
<section className="parallax-img2 d-flex align-items-center justify-content-center">
	<div className="parallax-overlay2"></div>
	<div className="parallax-container1 ">
		<div className="container text-center ">
			<div className="heading1">
				<h2>Do You Like What You See?</h2>
				
			</div>

			<div className="seperator my-5"></div>
			<div className="btn-x ">
				<Link to="" className="parallax-btn">CONTACT US</Link>

			</div>
		</div>
	</div>
</section>
	{/* <!-- parallax overlay ends --> */}
    </>
  )
}

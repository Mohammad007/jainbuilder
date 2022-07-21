import React from 'react';
import { Link } from 'react-router-dom';

export default function Project_typeMain() {
  return (
    <>
    	<section className="projects pt-140 ">
		<div className="container">
			<div className="row">
				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project1.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>
				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project2.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>
				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project3.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>

				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project4.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>
				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project5.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>
				<div className="col-md-6 mb-80 pe-100">
					<Link to="/project-detail" className="project-hover">
						<div className="project-box">
							<div className="project-img">
								<img width="100%" src="assets/Images/project6.jpg" alt=""/>
							</div>
							<div className="project-desc">
								<p>Condo</p>
								<span>Luxury Residence</span>
							</div>
						</div>
					</Link>

				</div>
				
			</div>
		</div>
	</section>

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
					<img src="assets/Images/here.jpg" alt=""/>
				</div>

				{/* <!-- banner links ends here --> */}
			</div>
</div>
	</section>
	{/* <!-- Panaroma ends --> */}
    </>
  )
}

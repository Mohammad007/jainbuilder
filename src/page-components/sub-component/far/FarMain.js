import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const FarMain = () => {

	const farours = useSelector(state => state.sliceData.farours);
	const fardetails = useSelector(state => state.sliceData.fardetails);

  return (
    <>
    
	{/* <!-- collapse-map starts --> */}
	<section className="collapse-ma pt-140 pb-140">
		<div className="welcome-txt text-center mb-5"><h4>Calculate New FAR in Delhi</h4></div>
		<div className="far-cont container">
			
			<div className="row">
				<div className="col-lg-4 order-2 order-lg-1">
					<div className="accordion pt-md-80" id="myAccordion">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<button type="button"  className="accordion-button collapsed" data-bs-toggle="collapse"
									data-bs-target="#collapseOne" aria-expanded="true"><span className="hidd-span"><i className="fa-solid fa-location-dot"></i></span>Delhi</button>
							</h2>
							<div id="collapseOne" className="accordion-collapse collapse show"
								data-bs-parent="#myAccordion">
								<div className="card-body">
									<ul>
										<li><Link to="/far-calculator">FAR Calculator</Link></li>
										<li><Link to="/construction-cost">Construction Cost Calculator</Link></li>
										<li><Link to='/approval-cost'>Approval Fee Calculator</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"><span className="hidd-span"><i className="fa-solid fa-location-dot"></i></span>Noida</button>
							</h2>
							<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
								<div className="card-body">
									<ul>
                                    <li><Link to="/far-calculator">FAR Calculator</Link></li>
										<li><Link to="/construction-cost">Construction Cost Calculator</Link></li>
										<li><Link to='/approval-cost'>Approval Fee Calculator</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingThree">
								<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
									data-bs-target="#collapseThree"><span className="hidd-span"><i className="fa-solid fa-location-dot"></i></span>Gurgaon
								</button>
							</h2>
							<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
								<div className="card-body">
									<ul>
									<li><Link to="/far-calculator">FAR Calculator</Link></li>
										<li><Link to="/construction-cost">Construction Cost Calculator</Link></li>
										<li><Link to='/approval-cost'>Approval Fee Calculator</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingFour">
								<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
									data-bs-target="#collapseFour"><span className="hidd-span"><i className="fa-solid fa-location-dot"></i></span>Faridabad</button>
							</h2>
							<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
								<div className="card-body">
									<ul>
                                    <li><Link to="/far-calculator">FAR Calculator</Link></li>
										<li><Link to="/construction-cost">Construction Cost Calculator</Link></li>
										<li><Link to='/approval-cost'>Approval Fee Calculator</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="col-lg-8 order-1 order-lg-2 pt-5 pb-4 px-4 bg-white shadow">
					<div className="far-form">
						<form action="" className="">
							<div className="row">
	
								<div className="col-md-6 ">
									<div className="mb-5">
										<label className="">Your Name*</label>
										<input type="text" className=""  required/>
									</div>
								</div>
								<div className="col-md-6 ">
									<div className="mb-5">
										<label className="">Your Email*</label>
										<input type="email"  required/>
	
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="mb-5">
										<label className="mb-3">When do you plan to start construction? <br/>(select one from dropdown)</label>
									<select className="form-selec" aria-label="Default select example">
										<option className="d-none"></option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									  </select>
									  </div>
								</div>
								<div className="col-md-6">
									<div className="mb-5">
										<label className="mb-3">From where you hear about us? (select one from dropdown)</label>
									<select className="form-selec" aria-label="Default select example">
										<option className="d-none"></option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									  </select>
									  </div>
								</div>
								<div className="col-md-6">
									<div className="mb-5">
										<label className="">Mobile No.*</label>
										<input  type="text" className=""  required/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="mb-5">
										<label className="">Plot Size*</label>
										<input placeholder="1000" type="number" className="" required/>
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="mb-5 d-flex justify-content-between">
										<div className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
											<label className="form-check-label" >
											  Square Yard 
											</label>
										  </div>
										  <div className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
											<label className="form-check-label" >
											  Square Meters
											</label>
										  </div>
									</div>
								</div>
								
								
	
	
							</div>
	
							<div className="col-md-12 text-center">
								
									<button className="btn-more3"  href="">Calculate FAR</button>
								
							</div>
	
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- collapse-map ends --> */}


	<section className="far-boxes">
		<div className="container">
			<div className="welcome-txt text-center"><h4>Our Delhi FAR Calculator will give you</h4></div>
			<div className="row pt-30">
				{farours?.map((item, index) => (
				<div className="col-md-3 mb-20" key={index}>
					<div className="testimonial-box  text-center p-40">
						<div className="round-icon-box mb-4">
							<span className="round-icon"><i className={item?.classname}></i></span>
						</div>
						<div className="offer-text2">
							<p>{item?.content}</p>
						</div>
					</div>
				</div>
				))}
			</div>
		</div>
	</section>

{/* <!-- Text Starts --> */}
{fardetails?.map((item, index) => (
<section className={`bg-white pt-60 pb-60`} key={index}>
	<div className="container">
		<div className="welcome-txt text-center mb-5"><h4>{item?.title}</h4></div>
		<div className="room-txt">
			<p>{item?.content}</p>
		</div>
	</div>
</section>
))}


{/* <!-- Text Ends --> */}
    </>
  )
}

export default FarMain
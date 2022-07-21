import React from 'react'

const ApprovalMain = () => {
  return (
    <>
    	{/* <!-- collapse-map starts --> */}
	<section className="collapse-ma pt-140 pb-140">
		<div className="welcome-txt text-center mb-5"><h4>Approval Fee Calculator</h4></div>
		<div className="far-cont container">
			
			<div className="row">
				<div className="col-lg-6 p-5 order-2 order-lg-1">
					<div className="approve-txt text-center mb-3"><h4>With Jain Builder's Approval Fee calculator you will get to know:</h4></div>
					<div className="far-txt pt-md-80">
						
					<ul>
						<li><p className="d-flex">
							<span className="li-style">►</span>
							<span>
								Which are the different approvals you have to get for your home construction?
				</span>
				</p>
					</li>
					<li>
						<p className="d-flex">
							<span className="li-style">►</span>
							<span>
								How much MCD/HUDA fee has to be paid?
					</span>
				</p>

					</li>
					<li>
						<p className="d-flex">
							<span className="li-style">►</span>
							<span>
								How much will be the Electricity Department fee?
				</span>
				</p>
					</li>
					<li>
						<p className="d-flex">
							<span className="li-style">►</span>
							<span>
								What fee will be paid to the Water Department?
				</span>
				</p>
					</li>
					<li>
						<p className="d-flex">
							<span className="li-style">►</span>
							<span>
								What will be the charges for Sewerage services?
				</span>
				</p>
					</li>
					</ul>	
					</div>
				</div>
				<div className="col-lg-6 order-1 order-lg-2 pt-5 pb-4 px-4 bg-white shadow">
					<div className="far-form">
						<div className="approve-txt text-center mb-5"><h4>Use our Approval Fee Calculator for Delhi, Gurgaon and Faridabad.</h4></div>
						<form action="" className="">
							<div className="row">
								<div className="col-md-12 ">
									<div className="mb-5">
										<label className="">Your Name*</label>
										<input type="text" className=""  required/>
									</div>
								</div>
								<div className="col-md-12 ">
									<div className="mb-5">
										<label className="">Your Email*</label>
										<input type="email"  required/>
	
									</div>
								</div>
								
								
								
								<div className="col-md-12">
									<div className="mb-5">
										<label className="">Mobile No.*</label>
										<input  type="text" className=""  required/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="mb-5">
										<label className="">Plot Size*</label>
										<input placeholder="1000" type="number" className="" required/>
									</div>
								</div>
								<div className="col-md-12">
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
										<label className="mb-3">City*</label>
									<select className="form-selec" aria-label="Default select example" required>
										<option className="d-none"></option>
										<option value="1">120</option>
										<option value="2">140</option>
										<option value="3">160</option>
									  </select>
									  </div>
								</div>
								<div className="col-md-6">
									<div className="mb-5">
										<label className="mb-3">Colorny or Locality</label>
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
										<div className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
											<label className="form-check-label" for="exampleRadios1">
											  Stilt Only
											</label>
										  </div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="mb-5">
										<div className="form-check">
											<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
											<label className="form-check-label" for="exampleRadios2">
											  Basement + Stilt
											</label>
										  </div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="mb-5">
										<label className="">Number of Electricity Meters</label>
										<input  type="number" className="" required/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="mb-5">
										<label className="">Number of Water Meters</label>
										<input  type="number" className="" required/>
									</div>
								</div>
								
								
								  
								
								
								
								
	
	
							</div>
	
							<div className="col-md-12 text-center">
								
									<button className="btn-more3"  href="">Calculate FEE</button>
								
							</div>
	
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- collapse-map ends --> */}
    </>
  )
}

export default ApprovalMain
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../projects-type/reDevData';

const Project_detailMain = () => {
	const {id1}=useParams();
	const product=products.find((product)=>product.id === id1);

	const{title}=product;
	// const product=
  return (
	
    <>
    <section className="inside">
		<div className="row">
			<h4>{title}</h4>
			<div className="col-lg-5">
				<div className="inside-desc inside-pad">
					<div className="inside-txt">

					{/* <h4>{id}</h4> */}
						<p>Alway in fashion empire of the sun, myki queues footy fed square melbourne cricket ground
							melbourne central, lions bar.


						</p>
					</div>
					<div className="inside-list mb-40">
						<ul>
							<li>
								<span className="inside-check"><i className="fa-solid fa-check"></i></span>
								<span className="inside-detail">Floor: 5</span>
							</li>
							<li>
								<span className="inside-check"><i className="fa-solid fa-check"></i></span>
								<span className="inside-detail">AREA: 500M2</span>
							</li>
							<li>
								<span className="inside-check"><i className="fa-solid fa-check"></i></span>
								<span className="inside-detail">ROOMS: 12</span>
							</li>
							<li>
								<span className="inside-check"><i className="fa-solid fa-check"></i></span>
								<span className="inside-detail">BATHROOMS: 3</span>
							</li>
							<li>
								<span className="inside-check"><i className="fa-solid fa-check"></i></span>
								<span className="inside-detail">OPEN AREA: 200M2</span>
							</li>
						</ul>
					</div>
					<div className="inside-button">
						<button className="btn-more d-block">MORE</button>
					</div>
				</div>
			</div>
			<div className="col-lg-7 my-auto">
				<div className="inside-img">
					{/* <img width="100%" src={img} alt=""/> */}
				</div>

			</div>
		</div>
	</section>
    </>
  );
}

export default Project_detailMain;

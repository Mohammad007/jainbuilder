import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import img1 from './skyscraper_white.png';
import img2 from './skyscraper.png';

export default function Header() {
  return (
    <>
    <header className="header">
		<nav className="navbar navbar-expand-lg ">
			<div className="container">
				<Link className="navbar-brand" to="/"><img className="im-1" src={img1} alt=""/><img
						className="im-2" src={img2} alt=""/> </Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">

					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} aria-current="page" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/about">About Us</NavLink>
						</li>
						
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/services">Services</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/projects">Projects</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/far-calculator">FAR Calculator</NavLink>
						</li>

				
						<li className="nav-item">
							<NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="/contact">Contact Us</NavLink>
						</li>
					</ul>

				</div>
			</div>
		</nav>
	</header>
    </>
  )
}

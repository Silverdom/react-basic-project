import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Our Application</h4>
  	 			<ul>
  	 				<li><Link to="#">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to="#">FAQ</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<Link to="#"><i className="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i className="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i className="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </>
  )
}

export default Footer

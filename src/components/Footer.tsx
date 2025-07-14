import React from 'react'
import './Footer.css'; 
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-branding">
          <Image src="footer-logo.svg" width={187} height={57} alt="footer-logo" className="footer-logo" /> 
          <p className="description">
            CineSphere is your go-to platform for a world of entertainment, offering a vast library of films, TV shows, and exclusive content.  
          </p>
          <div className="flex gap-2">
            <div className='bg-white rounded flex items-center justify-center'>
              <img src="facebook.png" width={36.48} height={36.48} alt="facebook" className="facebook" />
            </div>
            <Image src="twitter.svg" width={36.48} height={36.48} alt="twitter" className="twitter" />
            <Image src="instagram.svg" width={36.48} height={36.48} alt="instagram" className="instagram" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
            </ul>
        </div>
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Acoount & Billing</a></li>
          </ul>
        </div>
            
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; All Rights Reserved. 2024 Cinesphere Movies</p>
        </div>
          
          
      </footer>

      
  );
};




export default Footer;
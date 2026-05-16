import '../index.css';


const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>About Internshala</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Grievance</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2026 Internshala Clone. All rights reserved.</p>
    </div>
  </footer>
);


export default Footer;
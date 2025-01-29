import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 My Website</p>
        </div>
        <div className="footer-center">
          <p>Follow us:</p>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Contact: contact@mywebsite.com</p>
        </div>
      </div>
    </footer>
    );
}
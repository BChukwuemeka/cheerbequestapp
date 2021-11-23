import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";








const Footer = () => {
    return ( 
        <footer className="footer">

        <div className="footer-header">
            <h3 className="color2">CHEER BEQUEST LIMITED</h3>
            <p>  The Crowdfunding that got you covered, Always Secure and Transparent.</p>
              <p>  Get started with us today and raise funds for your emergencies and dreams</p>
        </div>

        <div className="list">
        <div className="learn-more">
            <h4 className="color2">Learn more</h4>
            <ul>
                <li>
                    <a href="cheerbequest.com">SaveLives@Livestars</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Success Stories</a>
                </li>
                <li>
                    <a href="cheerbequest.com">FAQ</a>
                </li>
            </ul>

        </div>
        <div className="funds-for">
            <h4 className="color2">Funds for</h4>
            <ul>
                <li>
                    <a href="cheerbequest.com">Health</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Education</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Agriculture</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Community Development</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Youth Empowerment</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Elders Intervention</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Girls Child</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Less Privilege</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Disaster Intervention</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Sports Support</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Religion</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Politics</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Hospitality</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Crisis-Peace Intervention</a>
                </li>
                
            </ul>

        </div>
        <div className="resources">
            <h4 className="color2">Resources</h4>
            <ul>
                <li>
                    <a href="cheerbequest.com">About Us</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Contact Us</a>
                </li>
                
                <li>
                    <a href="cheerbequest.com">Privacy Policy</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Terms & Conditions</a>
                </li>
                <li>
                    <a href="cheerbequest.com">Partnership</a>
                </li>
            </ul>
        </div>
    </div>

<div className="copyright">
       <div>
           <p>Copyright &copy; <a href="cheerbequest.com" target="_blank" title="CHEER BEQUEST LIMITED">CHEER BEQUEST LIMITED</a> </p>
        </div>
            <div className="social_icons">
            
            <a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
              </div>

        </div>

    </footer>
     );
}
 
export default Footer;
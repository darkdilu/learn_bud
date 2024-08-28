
import './Footer.css'; // Import the CSS for the footer
import { FaRegCompass } from 'react-icons/fa';
import { IoMdContacts, IoMdHome } from 'react-icons/io';
import { FaRegMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
      <span><IoMdHome/></span>
      <span><FaRegCompass /></span>
      <span><IoMdContacts /></span>
      <span><FaRegMessage /></span>
      </nav>
    </footer>
  );
};

export default Footer;

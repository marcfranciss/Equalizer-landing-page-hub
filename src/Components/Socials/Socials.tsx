import "./socials.css";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";

const Socials = () => {
  return (
    <nav className='social-icons'>
      <img src={facebook} alt='facebook icon' />
      <img src={instagram} alt='instagram icon' />
      <img src={twitter} alt='twitter icon' />
    </nav>
  );
};

export default Socials;

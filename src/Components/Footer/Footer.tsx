import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-texts'>
        <Logo />
        <p className='preset-500'>
          All rights reserved © Equalizer 2021
          <br />
          Have any problems? Contact us via social media or email us at
          <br />
          <strong className='preset-500-bold'>equalizer@example.com</strong>
        </p>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;

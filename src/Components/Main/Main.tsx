import "./main.css";
import appImage from "../../assets/illustration-app.png";
import Button from "../Button/Button";

const main = () => {
  return (
    <main>
      <section id='hero' className='slide-in'>
        <h1 className='preset-100'>We make your music sound extraordinary</h1>
        <p className='preset-400'>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </section>
      <section id='call-to-action' className='slide-in'>
        <div className='container'>
          <div className='left-container'>
            <img
              className='cta-img'
              src={appImage}
              alt='sample equalizer app view in cellphone'
            />
          </div>
          <div className='right-container'>
            <div className='cta-card'>
              <h2 className='preset-300'>Premium EQ</h2>
              <p className='preset-400 texts'>
                Get expert-level control with a robust equalizer, volume mixer,
                and spatial audio. Take your listening experience to a whole new
                level and access all our incredible features!
              </p>
              <div className='amount'>
                <span className='preset-200'>$4 </span>
                <p className='preset-400'>/ month</p>
              </div>
              <div className='cta-buttons'>
                <Button text='iOS Download' type='dark' icon='apple' />
                <Button text='Android Download' type='light' icon='android' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default main;

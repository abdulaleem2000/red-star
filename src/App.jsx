/* eslint-disable react/no-unescaped-entities */
import "./styles/components/navbar.scss";
import "./styles/components/hero.scss";
import "./styles/components/different.scss";
import "./styles/components/services.scss";
import "./styles/components/clients.scss";
import "./styles/components/sdlc.scss";
import "./styles/components/pos.scss";

import Logo from "./assets/red-logo.png";
import Hamburger from "./assets/hamburger.png";
import Hero from "./assets/hero-desk.png";
import Quality from "./assets/quality-image.png";
import Mamta from "./assets/Mamta.webp.jpg";
import Saving from "./assets/savings.svg";
import Tool from "./assets/tools.svg";
import Turn from "./assets/turn.svg";
import ServiceHeader from "./assets/service-header.png";
import Spm from "./assets/spm.png";
import Sba from "./assets/sba.png";
import Sqa from "./assets/sqa.png";
import UiUx from "./assets/uiux.png";
import WebDev from "./assets/web-dev.png";
import MobDev from "./assets/mob-dev.png";
import Blue from "./assets/blue.png";
import Sdlc from "./assets/sdlc.png";
import Pos from "./assets/pos.png";
import Laptop from "./assets/laptop.png";
import PosPhone from "./assets/pos-phone.png";

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <nav className="navbar__container wrapper">
          <a href="#" className="navbar__logo">
            <img src={Logo} alt="red star logo" />
          </a>

          <ul>
            <li>
              <a href="#">
                <h5>Home</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>Services</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>Portfolio</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>Hire a Pro</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>Careers</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>About Us</h5>
              </a>
            </li>
            <li>
              <a href="#">
                <h5>Contact Us</h5>
              </a>
            </li>
          </ul>

          <div className="navbar__btn">
            <a href="#">
              <button className="btn">Lets Connect</button>
            </a>
          </div>

          <div className="navbar__menu">
            <img src={Hamburger} alt="hamburger-logo" />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__container wrapper">
          <div className="hero__image">
            <img src={Hero} alt="hero" />
          </div>
          <div className="hero__text">
            <h1>Transforming </h1>
            <h1>businesses with custom</h1>
            <h1>product innovation</h1>
            <h3>
              Welcome to Red Star Technologies, where we transform ideas into
              cutting-edge software solutions that drive success.
            </h3>
            <div className="hero__btn">
              <a href="#">
                <button className="btn white-button">Lets Connect</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* different section */}
      <section className="different">
        <div className="different__container wrapper">
          <div className="different__image">
            <div className="different__mamta">
              <img src={Mamta} className="mamta1" alt="mamta" />
              <img src={Quality} className="mamta2" alt="quality-image" />
            </div>
          </div>
          <div className="different__quality">
            <h1>
              What makes <span>Red Star</span> different?
            </h1>
            <div className="different__features">
              <div className="feature">
                <img src={Tool} alt="tool" />
                <h4>client Centric</h4>
                <p>
                  We prioritize your unique needs and goals, crafting
                  tailor-made solutions.
                </p>
                <div className="different__btn">
                  <a href="#">
                    <button className="btn">Lets Connect</button>
                  </a>
                </div>
              </div>

              <div className="feature">
                <img src={Turn} alt="turn" />
                <h4>Top Tier Expertise</h4>
                <p>
                  Our seasoned professionals bring a wealth of experience to
                  every software project.
                </p>
              </div>

              <div className="feature">
                <img src={Saving} alt="saving" />
                <h4>Unwavering Quality</h4>
                <p>
                  We deliver nothing less than excellence, ensuring software
                  that stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="different__btn2">
          <a href="#">
            <button className="btn">Lets Connect</button>
          </a>
        </div>
      </section>

      {/* Services section */}
      <section className="services">
        <div className="services__container wrapper">
          <div className="services__header">
            <div className="header-text">
              <p className="header-head">Services</p>
              <h2>Empowering Your Digital Success</h2>
            </div>
            <div className="header-logo">
              <img src={ServiceHeader} alt="Services logo" />
            </div>
          </div>
          <p className="header-para">
            Unlock the full potential of your digital vision with Red Star
            Technologies. Our comprehensive suite of services empowers your
            journey towards software excellence. At Red Star Technologies, we're
            your dedicated partners in innovation. Explore our range of services
            designed to transform your ideas into exceptional software
            solutions.
          </p>

          <div className="services__types">
            <div className="row1">
              <div className="type">
                <img src={Spm} alt="spm" />
                <img src={Sba} alt="sba" />
                <img src={UiUx} alt="uiux" />
              </div>
            </div>
            <div className="row1">
              <div className="type">
                <img src={WebDev} alt="web" />
                <img src={MobDev} alt="mob" />
                <img src={Sqa} alt="sqa" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients">
        <div className="clients__container wrapper">
          <div className="clients__projects">
            <div>
              <h1>
                45 <span>+</span>
              </h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1>
                37 <span>+</span>
              </h1>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h1>
                20 <span>+</span>
              </h1>
              <p>Skilled Professionals</p>
            </div>
            <div>
              <h1>
                6 <span>+</span>
              </h1>
              <p>Years OF Experience</p>
            </div>
          </div>
        </div>
        <div className="clients__blue">
          <img src={Blue} alt="blue" />
        </div>
      </section>

      {/* SDLC */}
      <section className="sdlc">
        <div className="sdlc__container wrapper">
          <div className="services__header">
            <div className="header-text">
              <p className="header-head">How Red Star Technologies Work</p>
              <h2>Software Development Life Cycle at Red Star Technologies</h2>
            </div>
          </div>
          <div className="sdlc__image">
            <img src={Sdlc} alt="sdlc" />
          </div>
        </div>
      </section>

      {/* POS */}
      <section className="pos">
        <div className="pos__container wrapper">
          <div className="services__header">
            <div className="header-text">
              <p className="header-head">Our Product</p>
              <h2>
                Make your life easier with our Owner’s Point of Sale System
              </h2>
              <p className="pos-para">
                We take pride in our flagship product, Owner's POS. It reflects
                our commitment to innovation and solving real-world business
                challenges while embodying our company culture of excellence and
                customer-centricity.
              </p>
            </div>
          </div>
          {/* desktop */}
          <div className="pos__cont-image">
            <img src={Pos} alt="pos" />

            <div className="overlay-content">
              <div className="image-column">
                <img src={Laptop} alt="laptop" className="lp-img" />
              </div>
              <div className="content-column">
                <h1>Owner's POS</h1>
                <p>
                  At Redstar Technologies, we're dedicated to provide reliable,
                  easy-to-use, and affordable POS solution for businesses of all
                  sizes. Our mission is to help our customers streamline their
                  operations and grow their businesses.
                </p>
                <br />
                <p>
                  Our team of experienced professionals is committed to
                  providing exceptional customer service and support. We're
                  always here to answer your questions, provide training and
                  guidance, and help you make the most of your POS system.
                </p>
                <div className="different__btn">
                  <a href="#">
                    <button className="btn posb">Visit Website</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="pos__cont-image-phone">
            <img src={PosPhone} alt="pos" />

            <div className="overlay-content-phone">
              <div className="image-column-phone">
                <img src={Laptop} alt="laptop" className="lp-img-phone" />
              </div>
              <div className="content-column-phone">
                <h1>Owner's POS</h1>
                <p>
                  At Redstar Technologies, we're dedicated to provide reliable,
                  easy-to-use, and affordable POS solution for businesses of all
                  sizes. Our mission is to help our customers streamline their
                  operations and grow their businesses.
                </p>
                <br />
                <p>
                  Our team of experienced professionals is committed to
                  providing exceptional customer service and support. We're
                  always here to answer your questions, provide training and
                  guidance, and help you make the most of your POS system.
                </p>
                <div className="different__btn">
                  <a href="#">
                    <button className="btn posb-phone">Visit Website</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

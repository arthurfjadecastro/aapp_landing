import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Features from "./components/Features";
import Descriptions from "./components/Descriptions";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import Switcher from "./components/Switcher";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import Aux from "./hoc/Aux_";

class HomeNine extends React.Component {
  render() {
    var mystyle = { position: "absolute" };
    return (
      <Aux>
        {/* Navbar Component*/}
        <Navbar />
        <section className="section bg-home height-100vh" id="home">
          <div className="bg-overlay" />
          <div className="">
            <div className="">
              <div className="container slidero">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-white text-center">
                    <h1 className="home-title">
                      We help startups launch their products
                    </h1>
                    <p className="padding-t-15 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum className at
                      a euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <p className="play-shadow margin-t-30 margin-l-r-auto">
                      {" "}
                      <Link
                        to="http://vimeo.com/99025203"
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Particles
            style={mystyle}
            params={{
              particles: {
                number: {
                  value: 200
                },
                size: {
                  value: 4
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
        </section>

        {/* Services Component*/}
        <Services />

        {/* Features Component*/}
        <Features />

        {/* Descriptions Component*/}
        <Descriptions />

        {/* Contact Component*/}
        <Contact />

        {/* SocialMedia Component*/}
        <SocialMedia />

        {/* Footer Component*/}
        <Footer />

        {/* FooterLinks Component*/}
        <FooterLinks />

        {/* Switcher Component*/}
        {/* <Switcher /> */}
      </Aux>
    );
  }
}

export default HomeNine;

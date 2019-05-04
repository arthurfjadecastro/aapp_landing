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
                    <h1 className="home-title">Bem vindo ao AAPP</h1>
                    <p className="padding-t-15 home-desc">
                      O Aplicativo que eSAEASEASEA do Alcoolismo
                    </p>
                    <p className="play-shadow margin-t-30 margin-l-r-auto">
                      {" "}
                      <Link
                        to="https://vimeo.com/334185943"
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
                  value: 160,
                  density: {
                    enable: true
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.2
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  }
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0
                  },
                  repulse: {
                    distance: 400,
                    duration: 2
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
        {/* <SocialMedia /> */}

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

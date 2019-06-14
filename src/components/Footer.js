import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 margin-t-20 adjustColSocialNetwork">
              <h4>Redes sociais</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-inline social ">
                  <li className="list-inline-item">
                    <a
                      className="social-icon"
                      href="https://www.linkedin.com/in/arthurfjadecastro/"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon"
                      href="http://arthurfjadecastro.com"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className="mdi mdi-account-plus" />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className="social-icon"
                      href="https://github.com/arthurfjadecastro"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className="mdi mdi-github-circle" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <h4>Parceiros</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <Link to="JavaScript:Void(0);">
                      Orientador - Mário Braga
                    </Link>
                  </li>
                  <li>
                    <Link className="margin-t-5" to="JavaScript:Void(0);">
                      Elane - LVG Psicologia
                    </Link>
                  </li>
                  <li>
                    <Link className="margin-t-5" to="JavaScript:Void(0);">
                      Rede de Clínicas de reabilitação
                    </Link>
                  </li>
                  <li>
                    <Link className="margin-t-5" to="JavaScript:Void(0);">
                      CATI/DF - Comitê para Assuntos de Tecnologia Integrada
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <h4>Suporte</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <p className="margin-b-0  text-center">
                    <i className="pe-7s-call" /> &nbsp;+55 61 996 907 025
                  </p>
                  <p className=" text-center margin-t-20">
                    <i className="pe-7s-mail-open" />
                    &nbsp; arthurfjadecastro@gmail.com
                  </p>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 margin-t-20"> */}
            {/* <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                        </div>
                        <form className="form subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <Link to="JavaScript:Void(0);" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                        </form> */}
            {/* </div> */}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

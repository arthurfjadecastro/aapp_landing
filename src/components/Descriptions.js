import React from "react";
import { Link } from "react-router-dom";

class Descriptions extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-web-desc">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-white">Title</h2>
              <p className="padding-t-15 home-desc">
                Texto grande adicionado aqui para fazer sentido em conformidade
                a imagem inserida e download na loja da Apple Store
              </p>
              <Link
                to="JavaScript:Void(0);"
                className="btn  margin-t-30 waves-effect waves-light mb-5 d-block"
              >
                <img
                  className="img-fluid maxWidth-20"
                  src="images/appstore3.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img src="images/bg-pattern.png" alt="" />
        </div>
      </section>
    );
  }
}
export default Descriptions;

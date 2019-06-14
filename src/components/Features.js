import React from "react";
import { Link } from "react-router-dom";

class Features extends React.Component {
  render() {
    return (
      <section className="section bg-light" id="features">
        <div className="container">
          <div className="row vertical-content">
            <div className="col-lg-5">
              <div className="features-box">
                <h3>Vantagens</h3>
                <p className="text-muted web-desc">
                  AAPP tenta elevar o nível de usabilidade na busca de
                  informacões para qualquer usuário que necessite dos grupos de
                  Alcoólicos Anônimos, seja para sí mesmo ou para ajudar o
                  próximo.
                </p>
                <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                  <li className="">Anonimato 100%</li>
                  <li className="">Fácil de usar</li>
                  <li className="">Sem cadastro</li>
                  <li className="">Em qualquer lugar do Brasil</li>
                </ul>
                <Link
                  to="JavaScript:Void(0);"
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Veja mais <i className="mdi mdi-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img features-right text-right">
                <img
                  src="images/phonemarker.png"
                  alt="macbook image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;

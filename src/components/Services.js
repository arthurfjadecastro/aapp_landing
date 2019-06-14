import React from "react";

class Services extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Serviços</h1>
              <div className="section-title-border margin-t-20" />
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                AAPP é um projeto que oferece serviços que facilita a busca de
                informações sobre os <br /> Alcooólicos Anônimos.
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-map-marker text-custom" />
                <h4 className="padding-t-15">Mapa</h4>
                <p className="padding-t-15 text-muted">
                  Com o mapa será possível navegar e verificar onde estão
                  localizados os grupos mais próximos de você.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-info text-custom" />
                <h4 className="padding-t-15">Encontros</h4>
                <p className="padding-t-15 text-muted">
                  Com comodidade, praticidade e de forma simples, tenha acesso
                  aos dias e horários das reuniões.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-news-paper text-custom" />
                <h4 className="padding-t-15">Biblioteca AA</h4>
                <p className="padding-t-15 text-muted">
                  Conheça os princípios e a aplicação deles, e também tenha
                  acesso a plataformas oficiais da loja virtual e da revista
                  para Alcoólicos Anônimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;

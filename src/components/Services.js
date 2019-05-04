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
                Aqui você poderá encontrar os grupos e reuniões mais próximos de
                você
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-map-marker text-custom" />
                <h4 className="padding-t-15">Mapa</h4>
                <p className="padding-t-15 text-muted">
                  Com o mapa será possível navegar e verificar onde existe
                  grupos e reunioes de A.A
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-news-paper text-custom" />
                <h4 className="padding-t-15">12 Passos</h4>
                <p className="padding-t-15 text-muted">
                  Conheça os ritos e tradicoes dos grupos e perca o medo de se
                  envolver
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-info text-custom" />
                <h4 className="padding-t-15">Reunioes</h4>
                <p className="padding-t-15 text-muted">
                  Tenha acesso aos dias e horários das reunioes dos grupos mais
                  próximos a você
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

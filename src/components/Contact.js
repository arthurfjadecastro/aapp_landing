import React from "react";
import AbstractedButton from "./abstractedButton";

class Contact extends React.Component {
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Entre em contato</h1>
              <p className="text-center section-title">🤗</p>
              <div className="section-title-border margin-t-20" />
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                Para qualquer assunto, entre em contato com os envolvidos no
                projeto.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="custom-form mt-4 pt-4">
                <div id="message" />
                <form
                  method="post"
                  action="home-one"
                  name="contact-form"
                  id="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Nome"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Assunto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Mensagem..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <input
                        type="submit"
                        id=""
                        name="send"
                        className=" btn btn-custom"
                        value="Enviar mensagem"
                      />
                      <div id="simple-msg" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;

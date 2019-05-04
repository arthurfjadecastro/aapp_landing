import React from "react";

class FooterLinks extends React.Component {
  render() {
    return (
      <div className="footer-alt text-center ">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-12">
              <div className=" ">
                <p className="copy-rights text-muted">
                  {new Date().getFullYear()} © AAPP - Arthur de Castro
                </p>
              </div>
              <div className="">
                {/* <img src="images/payment.png" alt="payment-img" height="36" /> */}
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterLinks;

import React from "react";
import CountUp from 'react-countup';
import asaanQarz1 from '../../Images/image7.jpg'
import asaanQarz2 from '../../Images/image8.jpg'

const WhyChooseAkhuwat = () => {
  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">WHAT WE DO</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Just why should you get a loan from Akhuwat Foundation?
            </h2>
            <p>
Akhuwat Foundation is unique because it is the only group in Pakistan that gives people in need interest-free loans (Qarz-e-Hasna). In contrast to most banks, Akhuwat puts helping people ahead of making money by funding important areas like healthcare, education, and business. Their services are clear, easy to use, and don't have any handling or hidden fees. You can fill out an application online or at a centre near you. Their goal is to reduce poverty by giving people easy, approachable, and empowering ways to manage their money that make their lives better. 

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={asaanQarz1}
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-success text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={asaanQarz2}
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;

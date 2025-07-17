import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Get in Touch with Us – Akhuwat Foundation Loans</h1>

              <p className="mb-4">
                At Akhuwat Foundation Loan, we're dedicated to providing excellent customer service and making sure that your financial journey goes smoothly and without any problems. At every step of the way, from the beginning of the application process to when you need help with your ongoing loan, our expert team is here to help.
              </p>

              <p className="mb-4">
                We care about your happiness, which is why we make it a priority to answer all of your questions quickly and correctly.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Get in Touch with Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Help by email</h3>
                  <p>
                    Do you need help or have a question? If you send us an email, someone from our customer service team will get back to you that same day. We respond clearly and quickly, whether you need help with your loan application or are just looking for advice.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                    Would you rather talk to someone directly? Our helpline is open Monday through Friday from 9 AM to 6 PM (Pakistan Standard Time). Call us to find out more about the types of loans we offer, the requirements for getting one, or to find out how your application is going. We're always happy to help.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                    You are welcome to come to our store near Islamabad if you need help in person. Talk to a loan advisor directly. They will be able to understand your position and give you specific financial advice.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png"
                  alt="Office Location Map"
                  className="img-fluid rounded p-5"
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Set up a free loan consultation today.</h3>
                <p>
                  We offer free, one-on-one loan consultations, whether you're ready to apply or just want to learn more about your choices. Get in touch with us to get a plan made just for your cash needs. We'll answer all of your questions and walk you through every step of the interest-free loan process.
                </p>
                <p>
                  <strong>Allow us to begin.</strong><br />
                  Get in touch with us right away to take the first step towards financial independence. The Dasti Loan from Akhuwat Foundation makes it easier than ever to reach your financial goals.
                </p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

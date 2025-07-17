import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz18 from '../Images/image23.jpg';

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
                We value your trust very much at Akhuwat Foundation Loan. We will do everything we can to keep your personal information private. When you visit our website or use our services, this policy tells you how we gather, use, and keep your information safe. You agree to the things said in this policy when you use our site.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz18}
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">1. Personal Information We Collect</h2>
              <p className="mb-4">
                <strong>Personal Information:</strong> When you apply for a loan, we may ask for your full name, phone number, CNIC, information about your income, job, and financial information. This can be gathered in person, through online forms, or by calling customer service.
              </p>
              <p className="mb-4">
                <strong>Non-Personal Data:</strong> To help make your browsing experience better, we may also collect technical data such as your IP address, browser type, device details, and usage trends through cookies and other tracking technologies.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. What is done with your information</h2>
              <p className="mb-4">
                We need to know about you in order to process and decide on your loan requests, help customers, make our services better, and follow the law. You might get marketing emails, but you can stop getting them at any time.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Shared data</h2>
              <p className="mb-4">
                Your personal information may be given to reputable outside companies that help us with our services, like those who process loans. We may also share information when the law says so or when there are changes in the business, like when a company merges. Ads and companies will never buy or rent your information from us.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Safety and protection of data</h2>
              <p className="mb-4">
                Your personal information is sent safely using encryption and kept in safe places that only authorised staff can get to. We do regular security checks to make sure there are no holes. Even though we use the most up-to-date security standards, no digital site is completely risk-free.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. How to Use Cookies</h2>
              <p className="mb-4">
                Cookies help you have a better time on our site by remembering your choices, tracking your behaviour, and making services more relevant to you. Based on how you've used our site in the past, some cookies may be used to show you ads that are more relevant to you.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Your rights to privacy</h2>
              <p className="mb-4">
                You can see, change, or fix your personal information whenever you want. Please get in touch with us using the information below if any of your information is wrong or out of date.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. How Long to Store Data</h2>
              <p className="mb-4">
                We will only keep your information for as long as it takes to do what it was received for and as long as it's required by law and business needs.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to Some Other Sites</h2>
              <p className="mb-4">
                There may be links to other pages on our website. We are not in charge of their material or how they handle privacy. Before giving them any personal information, you should read their rules.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. Changes to this policy</h2>
              <p className="mb-4">
                If we need to, we can change this privacy policy. Any important changes will be shared on our website or by email, so you always know how your data is being used.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>
              <ul className="fw-light mx-5">
                <li>Email: support@AsaanQarzloanschemepk.com</li>
                <li>Phone: +92 0346 0760718</li>
                <li>Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan.</li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

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

export default PrivacyPolicy;

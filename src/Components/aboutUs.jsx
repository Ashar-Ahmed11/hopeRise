import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz15 from '../Images/image21.jpg';
import asaanQarz16 from '../Images/image22.jpg';
import asaanQarz17 from '../Images/image20.jpg';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '21px' }}>
      <div className="row g-0">
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>
              <p className="mb-4">
                Welcome to Akhuwat Foundation Loan, your reliable source for quick and fair financial help in Pakistan. Dr. Amjad Saqib started Akhuwat Foundation Loan in 2023 to help people and companies get financial help that they could afford with no interest. Akhuwat is dedicated to providing you with clear, reliable financial solutions that are specifically designed to meet your needs, whether you're trying to reach personal goals or grow your business.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={asaanQarz15}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>
              <p className="mb-4">
                We at Akhuwat Foundation Loan have a simple goal: to help people who need money the most. We think that everyone, no matter how much money they have, should be able to get loans in a fair and cheap way. We want to give people the tools they need to take charge of their finances and improve their quality of life through our no-interest loans and open payment plans.
              </p>
              <p className="mb-4">
                We know how hard it can be to get loans, especially for people in Pakistan who are having a hard time with money. That's why our process is easy, quick, and stress-free, so all applications have the same chances to get the help they need.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Should You Get an Akhuwat Foundation Loan?</h2>
              <ol className="fw-light mx-5">
                <li>Quick approvals for loans</li>
                <p>Our streamlined process makes sure that your loan is accepted quickly, without the wait times that you usually see at traditional banks.</p>
                <li>Open to Everyone</li>
                <p>We have different kinds of loans for different types of needs, such as personal, school, business, and emergency loans.</p>
                <li>Fully open and honest</li>
                <p>There are no fees or small print that you need to read. All of the rules and terms are made clear from the start.</p>
                <li>Help tailored to your needs</li>
                <p>Because every case is different, our team takes the time to figure out the best loan amount and payment plan for you.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Get to know our founder, Dr. Amjad Saqib.</h2>
              <p className="mb-4">
                Dr. Amjad Saqib is a well-known and recognised social leader and visionary. He started Akhuwat Foundation Loan with the goal of giving underserved communities fair and honest financial solutions. His goal in life has always been to fight poverty and give everyone a chance. Akhuwat has become a well-known name in microfinance in Pakistan thanks to his leadership.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz16}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
                Dr. Saqib created dignity-based lending, which are interest-free and affordable loans that have given thousands of people more power. He did this out of compassion and a knowledge of Pakistan's economic problems.
              </p>

              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>
              <ul className="fw-light mx-5">
                <li><strong>Transparency:</strong> We keep the lines of communication open and build trust by being honest about every part of the loan process.</li>
                <li><strong>Targeting the customer:</strong> We care most about your financial health. We really care about you, listen to what you need, and help you find the best answer.</li>
                <li><strong>Innovation:</strong> We are always making our services better by using new technology to make them easier for everyone to use.</li>
                <li><strong>Impact on the Community:</strong> Our work isn't just about money. Our long-term goal is to improve communities, make chances available, and make Pakistan's economy stronger.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Help with Loans</h2>
              <ul className="fw-light mx-5">
                <li><strong>Personal loans:</strong> Flexible ways to get money for things like school, health care, or sudden personal needs.</li>
                <li><strong>Business loans:</strong> Give founders and small business owners the money they need to start up, run, or grow their businesses.</li>
                <li><strong>Student loans:</strong> Loans that don't charge interest and help students pay for school and fees.</li>
                <li><strong>Emergency loans:</strong> Quick ways to get money for things that come up out of the blue.</li>
                <li><strong>Shariah-Compliant Loans:</strong> Loans with no interest that are designed to help low-income families without adding to their financial stress.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>
              <p className="mb-4">
                Akhuwat Foundation Loan is happy to help people get ahead and improve their communities. Our goal is to make Pakistan a safer and more welcoming place for everyone by providing clear, affordable, and easy-to-reach banking services.
              </p>
              <p className="mb-4">
                We're here to help you on your way, whether you want to keep going to school, start a business, or deal with a personal cash problem.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz17}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">Join the Akhuwat family.</h2>
              <p className="mb-4">
                And when you choose Akhuwat Foundation Loan, you get more than just money—you get a partner who wants you to succeed. We're here to help you move forward by giving you honest, dependable, and empowering answers.
              </p>
              <p className="mb-4">
                Apply now to see what makes Akhuwat different. You can reach your goals more easily than ever before with fast, safe, and reliable services.
              </p>
            </article>
          </main>
        </div>

        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: "0", paddingRight: "22px" }}>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

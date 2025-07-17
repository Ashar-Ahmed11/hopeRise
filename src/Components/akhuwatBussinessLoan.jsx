import React from 'react';
import CountUp from 'react-countup';
import asaanQarz11 from '../Images/image16.jpg';
import asaanQarz12 from '../Images/image17.jpg';

const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Business Loan: Helping Business Owners All Over Pakistan</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          The Business Loan program from the Akhuwat Foundation is designed to help both new and existing business owners across the country. Akhuwat offers reliable, interest-free loans to help you stay on track, whether you're opening a store, providing services, or increasing production.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          With Akhuwat, it's easy to get a loan and the terms of repayment are open. This lets you grow your business without having to worry about money, and it also helps local economies.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Should You Get an Akhuwat Business Loan?</h2>
          <p>You can get money without putting up collateral. This is a safe and easy-to-use choice that was made with your needs in mind.</p>
          <ul>
            <li><strong>Interest-Free Financing:</strong> You can grow your business without having to deal with normal bank interest rates.</li>
            <li><strong>Choices for Flexible Repayment:</strong> Choose a payment schedule that works with how much money you make and how fast your business grows.</li>
            <li><strong>Designed for small businesses:</strong> Helps create jobs and boosts entrepreneurship in the neighbourhood.</li>
            <li><strong>Inclusive Financial Access:</strong> Made especially for people who aren't getting enough help with their finances, promoting fair economic growth.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6">
          <img
            src={asaanQarz11}
            alt="Business Loan Support"
            className="img-fluid wm-105 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={14} duration={3} suffix="K+" />
            </h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">How to Get a Business Loan in Akhuwat</h2>
          <p>To get your business ideas off the ground with Akhuwat, just follow these simple steps:</p>
          <ul>
            <li><strong>Review Your Eligibility:</strong> Make sure you meet the basic requirements to make sure you're eligible and avoid delays that aren't required.</li>
            <li><strong>Gather Required papers:</strong> To speed up the process, get important papers like your CNIC, proof of residence, and business-related information ready.</li>
            <li><strong>Finish Your Application:</strong> Send in the loan application with all the correct details so that the process goes smoothly.</li>
            <li><strong>Approval and Payment of the Loan:</strong> Once accepted, you'll get your loan quickly and can start carrying out your plans.</li>
            <li><strong>Process of Repayment:</strong> Make regular payments according to the agreed-upon plan to keep your ability to get another loan.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 p-3">
          <img
            src={asaanQarz12}
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={8000} duration={3} suffix="+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">What Makes Akhuwat Business Loans Unique?</h2>
          <p>
            Akhuwat's business financing is meant to get rid of financial problems and give entrepreneurs at all times real chances to grow.
          </p>
          <p>
            People don't just gain from these loans; they also help communities by creating jobs, boosting local businesses, and making everyone wealthier.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Take part in the Akhuwat Movement</h2>
          <p>
            Want your business to grow? Akhuwat Business Loans is ready to help you reach your goals. Now is the time to start building your future. Go to the Akhuwat Foundation office closest to you or apply online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;

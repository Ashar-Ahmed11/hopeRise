import React from 'react';
import CountUp from 'react-countup';
import asaanQarz9 from '../Images/image14.jpg';
import asaanQarz10 from '../Images/image15.jpg';

const akhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize: "22px" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Loan Services in Pakistan: Making Your Dreams Come True and Your Progress Possible</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          The Akhuwat Foundation helps people and businesses become financially independent by giving them personalised loans with no interest. Akhuwat makes it easy and helpful to move forward, whether you want to go to college, grow your business, or buy a house.
        </p>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans can help you reach important goals in your life</h2>
          <p>
            Personal loans from Akhuwat Foundation can be used for a variety of reasons, such as medical situations, family events, or other necessary personal costs. Since there is no interest, you can keep your mind on your goals without having to worry about making big payments.
          </p>
          <ul>
            <li>Simple Requirements for Eligibility—The entry process is easy, and the requirements are well-defined.</li>
            <li>Plans for flexible payments – Repaying is easy and doesn't have to be a hassle because there are many choices.</li>
            <li>Fast Approval—Get the money you need quickly, especially when you need it right away.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz9}
            alt="Money Received"
            className="img-fluid wm-100 h-100 mt-5 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0">
            <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={14} duration={3} suffix="K+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Business Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">2. Business loans: boosting the growth of entrepreneurs</h2>
          <p>
            Akhuwat helps business owners by giving them interest-free loans to start or grow their businesses. These loans give you the money you need to make a long-lasting difference, whether you're starting a new business or growing an existing one.
          </p>
          <ul>
            <li>Made to fit the needs of your business – You can choose from loan options that will help you in the short and long run.</li>
            <li>Clear Terms: There are no hidden fees or terms that are hard to understand.</li>
            <li>Useful in Many Fields—Great for tech, retail, marketing, and other companies.</li>
          </ul>
        </div>
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student loans: Putting money into school</h2>
          <p>
            The Akhuwat Foundation thinks that education is the key to a better future. That's why its student loans have no interest at all, so you can study without having to worry about money. They pay for everything, like fees, books, and even living costs.
          </p>
          <ul>
            <li>Covers All School Costs—Everything is covered, from school fees to materials.</li>
            <li>No Interest Charges—Focus on your schoolwork without worrying about money.</li>
            <li>Flexible Options for Paying Back—Most plans start after college to help students get their finances in order.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz10}
            alt="Money Received"
            className="img-fluid wm-100 h-80 mt-5 card-img-top"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Home loans: Making your dream home a reality</h2>
          <p>
            You can buy a new home or fix up the one you already have with Akhuwat's no-interest home loans. You don't have to worry about extra costs when you take out one of these loans to reach one of life's most important goals.
          </p>
          <ul>
            <li>Choices for Buying or Fixing Up – Choose the type of loan that will help you get a house the best.</li>
            <li>Easy to Fill Out and Quick Processing—Least paperwork and quick approval times.</li>
            <li>Budget-Friendly Repayment—Made to make home owning possible and long-lasting.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatLoanServices;
